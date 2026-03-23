"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 60;
    const connectionDistance = isMobile ? 100 : 150;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function drawGradientMesh() {
      const isDark = document.documentElement.classList.contains("dark");
      const w = canvas!.width;
      const h = canvas!.height;

      if (isDark) {
        const g1 = ctx!.createRadialGradient(
          w * 0.2,
          h * 0.3,
          0,
          w * 0.2,
          h * 0.3,
          w * 0.5
        );
        g1.addColorStop(0, "rgba(99, 102, 241, 0.06)");
        g1.addColorStop(1, "transparent");
        ctx!.fillStyle = g1;
        ctx!.fillRect(0, 0, w, h);

        const g2 = ctx!.createRadialGradient(
          w * 0.8,
          h * 0.7,
          0,
          w * 0.8,
          h * 0.7,
          w * 0.5
        );
        g2.addColorStop(0, "rgba(6, 182, 212, 0.05)");
        g2.addColorStop(1, "transparent");
        ctx!.fillStyle = g2;
        ctx!.fillRect(0, 0, w, h);

        const g3 = ctx!.createRadialGradient(
          w * 0.5,
          h * 0.1,
          0,
          w * 0.5,
          h * 0.1,
          w * 0.4
        );
        g3.addColorStop(0, "rgba(167, 139, 250, 0.04)");
        g3.addColorStop(1, "transparent");
        ctx!.fillStyle = g3;
        ctx!.fillRect(0, 0, w, h);
      } else {
        const g1 = ctx!.createRadialGradient(
          w * 0.2,
          h * 0.3,
          0,
          w * 0.2,
          h * 0.3,
          w * 0.5
        );
        g1.addColorStop(0, "rgba(99, 102, 241, 0.04)");
        g1.addColorStop(1, "transparent");
        ctx!.fillStyle = g1;
        ctx!.fillRect(0, 0, w, h);

        const g2 = ctx!.createRadialGradient(
          w * 0.8,
          h * 0.7,
          0,
          w * 0.8,
          h * 0.7,
          w * 0.5
        );
        g2.addColorStop(0, "rgba(6, 182, 212, 0.03)");
        g2.addColorStop(1, "transparent");
        ctx!.fillStyle = g2;
        ctx!.fillRect(0, 0, w, h);
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      drawGradientMesh();

      const isDark = document.documentElement.classList.contains("dark");
      const particleColor = isDark
        ? "rgba(167, 139, 250,"
        : "rgba(99, 102, 241,";
      const lineColor = isDark
        ? "rgba(167, 139, 250,"
        : "rgba(99, 102, 241,";

      // Update and draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas!.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `${particleColor} ${p.opacity})`;
        ctx!.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `${lineColor} ${opacity})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Static gradient fallback for prefers-reduced-motion */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none motion-reduce:block hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(99,102,241,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(6,182,212,0.05) 0%, transparent 50%)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none motion-reduce:hidden"
      />
    </>
  );
}
