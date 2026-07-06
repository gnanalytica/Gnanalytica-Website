/**
 * WireFrame — Three.js black wireframe icosahedron on transparent canvas.
 *
 * The "technical print" object floating in the hero: flat cream fill with an
 * ink wireframe over it, slowly tumbling and easing toward the cursor. Raw
 * three (no R3F) to keep the bundle lean; client-only via dynamic import.
 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { prefersReducedMotion } from '../../lib/gsapClient';

export default function WireFrame({ className = '', accent = '#FFC700' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // 1.5× is indistinguishable for a chunky wireframe but ~45% fewer pixels than 2×
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // Flat accent fill + ink wireframe = printed diagram look
    const geo = new THREE.IcosahedronGeometry(1.9, 1);
    const fill = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: new THREE.Color(accent) })
    );
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x121212, linewidth: 2 })
    );
    const group = new THREE.Group();
    group.add(fill);
    group.add(wire);
    // Slight scale gap so edges never z-fight the fill
    fill.scale.setScalar(0.985);
    scene.add(group);

    const setSize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height || 1;
      camera.updateProjectionMatrix();
    };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(mount);

    const still = prefersReducedMotion();
    const target = { x: 0, y: 0 };
    const onPointer = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 0.9;
      target.y = (e.clientY / window.innerHeight - 0.5) * 0.9;
    };
    if (!still) window.addEventListener('pointermove', onPointer);

    let raf;
    const tick = () => {
      group.rotation.y += 0.004;
      group.rotation.x += 0.0016;
      group.rotation.y += (target.x - group.rotation.y * 0.05) * 0.004;
      group.rotation.x += (target.y - group.rotation.x * 0.05) * 0.004;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    // Reduced motion: render one static frame, no loop at all.
    // Otherwise only run the render loop while the canvas is on/near screen —
    // scrolled past the hero, the GPU does nothing.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (still) {
            renderer.render(scene, camera);
          } else if (!raf) {
            tick();
          }
        } else {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { rootMargin: '150px' }
    );
    io.observe(mount);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      if (!still) window.removeEventListener('pointermove', onPointer);
      ro.disconnect();
      geo.dispose();
      fill.material.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [accent]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
