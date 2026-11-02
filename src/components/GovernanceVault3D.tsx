import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function createVaultEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x040609);

  const plane = new THREE.PlaneGeometry(12, 4);
  const p1 = new THREE.Mesh(
    plane,
    new THREE.MeshBasicMaterial({ color: 0xfff4d6, side: THREE.DoubleSide })
  );
  p1.position.set(5, 6, 6);
  p1.lookAt(0, 0, 0);
  envScene.add(p1);

  const p2 = new THREE.Mesh(
    plane,
    new THREE.MeshBasicMaterial({ color: 0xd4a853, side: THREE.DoubleSide })
  );
  p2.position.set(-6, -3, 5);
  p2.lookAt(0, 0, 0);
  envScene.add(p2);

  const rt = pmrem.fromScene(envScene, 0.03);
  pmrem.dispose();
  return rt.texture;
}

function buildBeveledGoldSquare(size: number, bar: number, depth: number, mat: THREE.Material) {
  const g = new THREE.Group();
  const half = size / 2;
  const horiz = new THREE.BoxGeometry(size + bar, bar, depth);
  const vert = new THREE.BoxGeometry(bar, size - bar, depth);

  const t = new THREE.Mesh(horiz, mat);
  t.position.y = half;
  const b = new THREE.Mesh(horiz, mat);
  b.position.y = -half;
  const l = new THREE.Mesh(vert, mat);
  l.position.x = -half;
  const r = new THREE.Mesh(vert, mat);
  r.position.x = half;

  g.add(t, b, l, r);
  return g;
}

export const GovernanceVault3D: React.FC<{ isLight?: boolean }> = ({ isLight = false }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.28;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const envMap = createVaultEnvironment(renderer);
    scene.environment = envMap;

    scene.add(new THREE.AmbientLight(0xf6ebd0, 0.5));
    const dir = new THREE.DirectionalLight(0xfff3d6, 2.5);
    dir.position.set(4, 6, 5);
    scene.add(dir);

    const root = new THREE.Group();
    scene.add(root);

    const brushedGold = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xe2c27e),
      metalness: 0.96,
      roughness: 0.14,
      envMapIntensity: 1.85,
    });

    const obsidianCrystal = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x080c14),
      metalness: 0.45,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      envMapIntensity: 1.6,
    });

    // Outer Rub el Hizb Sovereign Seal
    const sealGroup = new THREE.Group();
    const sq1 = buildBeveledGoldSquare(2.25, 0.085, 0.14, brushedGold);
    const sq2 = buildBeveledGoldSquare(2.25, 0.085, 0.14, brushedGold);
    sq2.rotation.z = Math.PI / 4;
    sealGroup.add(sq1, sq2);
    root.add(sealGroup);

    // Calibrated Astrolabe Rings
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.88, 0.025, 20, 128), brushedGold);
    root.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.32, 0.022, 20, 100), brushedGold);
    root.add(ring2);

    // Central Asset-Backed Octahedron Core + Gold Wireframe Cage
    const coreGroup = new THREE.Group();
    const octa = new THREE.Mesh(new THREE.OctahedronGeometry(0.66, 0), obsidianCrystal);
    const octaCage = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.685, 0),
      new THREE.MeshStandardMaterial({
        color: 0xf6ebd0,
        metalness: 0.95,
        roughness: 0.12,
        wireframe: true,
      })
    );
    coreGroup.add(octa, octaCage);
    root.add(coreGroup);

    let px = 0;
    let py = 0;
    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      px = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      py = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 440;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      sealGroup.rotation.y = t * 0.28 + px * 0.35;
      sealGroup.rotation.x = Math.sin(t * 0.4) * 0.18 + py * 0.25;

      ring1.rotation.x = Math.PI / 2.6 + Math.cos(t * 0.35) * 0.22;
      ring1.rotation.y = -t * 0.2;

      ring2.rotation.y = t * 0.42;
      ring2.rotation.x = -Math.PI / 3.2;

      coreGroup.rotation.y = -t * 0.55;
      coreGroup.rotation.z = Math.sin(t * 0.6) * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      envMap.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        ref={mountRef}
        className="h-[340px] w-full sm:h-[390px]"
        aria-label="3D Brushed Gold AAOIFI Governance Sculpture"
      />
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase ${
          isLight
            ? 'border-gold-500/35 bg-ivory-100 text-gold-700'
            : 'border-gold-400/30 bg-obsidian-900/90 text-gold-200'
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${isLight ? 'bg-gold-600' : 'bg-gold-300'}`} />
        <span>AAOIFI Shariah Seal · 0% Debt Leverage</span>
      </div>
    </div>
  );
};
