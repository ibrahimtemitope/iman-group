import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GEOGRAPHIC_MANDATES, RegionId } from '../data/mandateData';

interface Props {
  isLight?: boolean;
  activeRegion: RegionId;
  onSelectRegion: (id: RegionId) => void;
}

function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function createStudioEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x05070b);

  const panelGeo = new THREE.PlaneGeometry(10, 4);

  const warmPanel = new THREE.Mesh(
    panelGeo,
    new THREE.MeshBasicMaterial({ color: new THREE.Color(0xfff0cc), side: THREE.DoubleSide })
  );
  warmPanel.position.set(5, 6, 6);
  warmPanel.lookAt(0, 0, 0);
  envScene.add(warmPanel);

  const goldPanel = new THREE.Mesh(
    panelGeo,
    new THREE.MeshBasicMaterial({ color: new THREE.Color(0xdca954), side: THREE.DoubleSide })
  );
  goldPanel.position.set(-7, 2, 5);
  goldPanel.lookAt(0, 0, 0);
  envScene.add(goldPanel);

  const coolRimPanel = new THREE.Mesh(
    panelGeo,
    new THREE.MeshBasicMaterial({ color: new THREE.Color(0xdbe8ff), side: THREE.DoubleSide })
  );
  coolRimPanel.position.set(0, -6, -5);
  coolRimPanel.lookAt(0, 0, 0);
  envScene.add(coolRimPanel);

  const rt = pmrem.fromScene(envScene, 0.035);
  pmrem.dispose();
  return rt.texture;
}

function createSquareFrame(size: number, thickness: number, depth: number, material: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  const h = size / 2;
  const topGeo = new THREE.BoxGeometry(size + thickness, thickness, depth);
  const sideGeo = new THREE.BoxGeometry(thickness, size - thickness, depth);

  const top = new THREE.Mesh(topGeo, material);
  top.position.y = h;
  const bot = new THREE.Mesh(topGeo, material);
  bot.position.y = -h;
  const left = new THREE.Mesh(sideGeo, material);
  left.position.x = -h;
  const right = new THREE.Mesh(sideGeo, material);
  right.position.x = h;

  g.add(top, bot, left, right);
  return g;
}

export const SovereignGlobe3D: React.FC<Props> = ({
  isLight = false,
  activeRegion,
  onSelectRegion,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const activeRegionRef = useRef<RegionId>(activeRegion);
  activeRegionRef.current = activeRegion;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const width = container.clientWidth || 560;
    const height = container.clientHeight || 560;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.35, 6.35);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const envMap = createStudioEnvironment(renderer);
    scene.environment = envMap;

    // Studio specular lighting
    const ambient = new THREE.AmbientLight(0xf6ebd0, 0.45);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfff2d2, 2.4);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xcfa657, 2.1, 18);
    rimLight.position.set(-5, -2.5, 4);
    scene.add(rimLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const globeGroup = new THREE.Group();
    rootGroup.add(globeGroup);

    const GLOBE_R = 1.46;

    // 1. Wet Polished Obsidian Core Sphere
    const obsidianMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x060910),
      metalness: 0.35,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.35,
    });
    const sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_R, 64, 64), obsidianMat);
    globeGroup.add(sphereMesh);

    // 2. Subtle Gold Latitude & Longitude Graticule Shell
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xcfa657,
      wireframe: true,
      transparent: true,
      opacity: 0.11,
    });
    const wireSphere = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_R * 1.004, 28, 18), wireMat);
    globeGroup.add(wireSphere);

    // 3. Shimmering Gold Horizon Point Lattice across EMEA / South Asia band
    const dotPositions: number[] = [];
    for (let lat = -34; lat <= 64; lat += 3.5) {
      for (let lon = -22; lon <= 118; lon += 3.5) {
        // Organic land-corridor density modulation
        const wave =
          Math.sin(lat * 0.13) * Math.cos(lon * 0.09) +
          Math.cos((lat - 22) * 0.18) * Math.sin((lon - 52) * 0.11);
        if (wave > -0.18) {
          const v = latLonToVec3(lat, lon, GLOBE_R * 1.008);
          dotPositions.push(v.x, v.y, v.z);
        }
      }
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
    const dotMat = new THREE.PointsMaterial({
      color: 0xebd5a3,
      size: 0.022,
      transparent: true,
      opacity: 0.58,
    });
    const landDots = new THREE.Points(dotGeo, dotMat);
    globeGroup.add(landDots);

    // 4. Liquid 24K Gold Material
    const goldMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xdfbe78),
      metalness: 0.94,
      roughness: 0.15,
      envMapIntensity: 1.75,
    });

    const brightGoldMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xfcf8ee),
    });

    // 5. Beacon Markers for the 4 Geographic Mandates
    const beaconMap: Record<
      string,
      { ring: THREE.Mesh; pin: THREE.Mesh; baseScale: number }
    > = {};

    const hqMandate = GEOGRAPHIC_MANDATES[0];
    const hqPos = latLonToVec3(hqMandate.lat, hqMandate.lon, GLOBE_R * 1.015);

    GEOGRAPHIC_MANDATES.forEach((m) => {
      const pos = latLonToVec3(m.lat, m.lon, GLOBE_R * 1.015);
      const markerGroup = new THREE.Group();
      markerGroup.position.copy(pos);
      markerGroup.lookAt(pos.clone().multiplyScalar(2));

      const pin = new THREE.Mesh(new THREE.SphereGeometry(0.042, 20, 20), brightGoldMat);
      markerGroup.add(pin);

      const haloRing = new THREE.Mesh(
        new THREE.RingGeometry(0.068, 0.095, 32),
        new THREE.MeshBasicMaterial({
          color: 0xf6ebd0,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.85,
        })
      );
      markerGroup.add(haloRing);

      // Vertical gold spire rising delicately from beacon
      const spire = new THREE.Mesh(
        new THREE.CylinderGeometry(0.006, 0.014, 0.16, 12),
        goldMat
      );
      spire.rotation.x = Math.PI / 2;
      spire.position.z = 0.08;
      markerGroup.add(spire);

      globeGroup.add(markerGroup);
      beaconMap[m.id] = { ring: haloRing, pin, baseScale: m.id === 'uae' ? 1.2 : 1.0 };
    });

    // 6. Great-Circle Capital Arcs from UAE HQ -> Pakistan, Europe/GCC, Emerging Africa
    interface PulsePhoton {
      curve: THREE.QuadraticBezierCurve3;
      mesh: THREE.Mesh;
      offset: number;
      speed: number;
    }
    const photons: PulsePhoton[] = [];

    GEOGRAPHIC_MANDATES.slice(1).forEach((dest, idx) => {
      const endPos = latLonToVec3(dest.lat, dest.lon, GLOBE_R * 1.015);
      const mid = hqPos.clone().add(endPos).multiplyScalar(0.5);
      const dist = hqPos.distanceTo(endPos);
      mid.normalize().multiplyScalar(GLOBE_R + 0.26 + dist * 0.24);

      const curve = new THREE.QuadraticBezierCurve3(hqPos, mid, endPos);
      const tubeGeo = new THREE.TubeGeometry(curve, 48, 0.0085, 8, false);
      const tubeMesh = new THREE.Mesh(tubeGeo, goldMat);
      globeGroup.add(tubeMesh);

      const photonMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.028, 14, 14),
        new THREE.MeshBasicMaterial({ color: 0xfff8e6 })
      );
      globeGroup.add(photonMesh);
      photons.push({
        curve,
        mesh: photonMesh,
        offset: idx * 0.33,
        speed: 0.28 + idx * 0.04,
      });
    });

    // 7. Outer Precision 3D 24K Gold Rub el Hizb (8-Pointed Star) & Gimbal Rings
    const starAssembly = new THREE.Group();
    rootGroup.add(starAssembly);

    const sqA = createSquareFrame(3.45, 0.042, 0.055, goldMat);
    const sqB = createSquareFrame(3.45, 0.042, 0.055, goldMat);
    sqB.rotation.z = Math.PI / 4;
    starAssembly.add(sqA, sqB);
    starAssembly.rotation.x = 0.32;
    starAssembly.rotation.y = -0.22;

    const outerGimbal = new THREE.Mesh(
      new THREE.TorusGeometry(2.08, 0.016, 16, 120),
      goldMat
    );
    outerGimbal.rotation.x = Math.PI / 2.35;
    outerGimbal.rotation.y = 0.28;
    rootGroup.add(outerGimbal);

    const innerGimbal = new THREE.Mesh(
      new THREE.TorusGeometry(1.78, 0.011, 16, 120),
      goldMat
    );
    innerGimbal.rotation.x = -Math.PI / 3.1;
    innerGimbal.rotation.z = 0.4;
    rootGroup.add(innerGimbal);

    // Initial globe orientation facing UAE + Pakistan + Africa + Europe
    const getTargetRotation = (regionId: RegionId) => {
      const m = GEOGRAPHIC_MANDATES.find((item) => item.id === regionId) || GEOGRAPHIC_MANDATES[0];
      const rotY = -((m.lon + 90) * Math.PI) / 180;
      const rotX = ((m.lat - 12) * Math.PI) / 180 * 0.55;
      return { rotX, rotY };
    };

    const initialRot = getTargetRotation(activeRegionRef.current);
    globeGroup.rotation.y = initialRot.rotY;
    globeGroup.rotation.x = initialRot.rotX;

    // Pointer interaction (drag + subtle parallax)
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let dragDeltaY = 0;
    let dragDeltaX = 0;
    let pointerNormX = 0;
    let pointerNormY = 0;
    let lastSelected: RegionId = activeRegionRef.current;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerNormX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerNormY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      dragDeltaY += dx * 0.007;
      dragDeltaX = Math.max(-0.45, Math.min(0.45, dragDeltaX + dy * 0.005));
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 560;
      const h = container.clientHeight || 560;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (lastSelected !== activeRegionRef.current) {
        lastSelected = activeRegionRef.current;
        dragDeltaX = 0;
        dragDeltaY = 0;
      }

      const target = getTargetRotation(activeRegionRef.current);
      const desiredY = target.rotY + dragDeltaY + Math.sin(t * 0.35) * 0.06;
      const desiredX = target.rotX + dragDeltaX;

      globeGroup.rotation.y += (desiredY - globeGroup.rotation.y) * 0.055;
      globeGroup.rotation.x += (desiredX - globeGroup.rotation.x) * 0.055;

      // Subtle liquid-metal specular movement on 3D gold rings & Rub el Hizb
      starAssembly.rotation.z = t * 0.09;
      starAssembly.rotation.y = -0.22 + pointerNormX * 0.18;
      starAssembly.rotation.x = 0.32 + pointerNormY * 0.14;

      outerGimbal.rotation.z = -t * 0.14;
      innerGimbal.rotation.y = t * 0.18;

      // Pulse beacons
      Object.entries(beaconMap).forEach(([id, b]) => {
        const isCurrent = id === activeRegionRef.current;
        const pulse = isCurrent ? 1.38 + Math.sin(t * 3.8) * 0.25 : 0.95 + Math.sin(t * 2.2) * 0.1;
        b.ring.scale.setScalar(pulse);
        b.pin.scale.setScalar(isCurrent ? 1.35 : 0.95);
      });

      // Animate capital photons along arcs
      photons.forEach((p) => {
        const u = (t * p.speed + p.offset) % 1;
        const pt = p.curve.getPointAt(u);
        p.mesh.position.copy(pt);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);
      envMap.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <div
        ref={mountRef}
        className="h-[390px] w-full cursor-grab active:cursor-grabbing sm:h-[490px] lg:h-[540px]"
        aria-label="Interactive 3D Sovereign Capital Corridor Globe"
      />

      {/* Interactive Corridor Telemetry Switcher */}
      <div className="mt-2 grid w-full max-w-lg grid-cols-2 gap-2 sm:grid-cols-4">
        {GEOGRAPHIC_MANDATES.map((m) => {
          const active = activeRegion === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onSelectRegion(m.id)}
              className={`rounded-xl border px-3 py-2 text-left transition-all ${
                active
                  ? isLight
                    ? 'border-obsidian-900 bg-obsidian-950 shadow-ivory'
                    : 'border-gold-300 bg-obsidian-800/95 shadow-gold'
                  : isLight
                    ? 'border-gold-500/30 bg-white/95 opacity-90 hover:border-gold-600 hover:opacity-100'
                    : 'border-gold-400/20 bg-obsidian-900/70 opacity-75 hover:border-gold-400/45 hover:opacity-100'
              }`}
            >
              <span
                className={`block font-mono text-[10.5px] font-semibold tracking-wider ${
                  active ? 'text-gold-300' : isLight ? 'text-gold-700' : 'text-gold-300'
                }`}
              >
                {m.code}
              </span>
              <span
                className={`mt-0.5 block truncate text-[12px] font-medium ${
                  active ? 'text-ivory-100' : isLight ? 'text-obsidian-900' : 'text-ivory-100'
                }`}
              >
                {m.id === 'uae'
                  ? 'UAE (HQ)'
                  : m.id === 'gcc-europe'
                    ? 'GCC & Europe'
                    : m.region}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
