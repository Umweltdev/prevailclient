'use client';

import { useEffect, useRef } from 'react';

interface Blob {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  noiseX: number;
  noiseY: number;
}

const FloatingBlobs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let blobs: Blob[] = [];

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize blobs
    const initBlobs = () => {
      blobs = [];
      const blobCount = Math.max(3, Math.floor(window.innerWidth / 400)); // More blobs on larger screens
      
      for (let i = 0; i < blobCount; i++) {
        blobs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 100 + Math.random() * 150, // Random size
          color: `rgba(${120 + Math.random() * 50}, ${80 + Math.random() * 100}, ${200 + Math.random() * 55}, ${0.15 + Math.random() * 0.1})`,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          noiseX: Math.random() * 1000,
          noiseY: Math.random() * 1000,
        });
      }
    };

    // Draw a single blob with fluffy appearance
    const drawBlob = (blob: Blob) => {
      ctx.beginPath();
      
      // Create a fluffy blob using multiple Bezier curves
      const numPoints = 12;
      const points: {x: number, y: number}[] = [];
      
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const variation = 0.8 + Math.random() * 0.4;
        const x = blob.x + Math.cos(angle) * blob.radius * variation;
        const y = blob.y + Math.sin(angle) * blob.radius * variation;
        points.push({ x, y });
      }
      
      // Draw the blob with curved edges
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 0; i < numPoints; i++) {
        const nextIndex = (i + 1) % numPoints;
        const controlPointX = (points[i].x + points[nextIndex].x) / 2;
        const controlPointY = (points[i].y + points[nextIndex].y) / 2;
        
        ctx.quadraticCurveTo(
          points[i].x, 
          points[i].y, 
          controlPointX, 
          controlPointY
        );
      }
      
      ctx.closePath();
      
      // Create gradient fill
      const gradient = ctx.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, blob.radius
      );
      gradient.addColorStop(0, blob.color);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add a subtle blur effect
      ctx.filter = 'blur(15px)';
      ctx.fill();
      ctx.filter = 'none';
    };

    // Simple Perlin noise implementation
    const noise = (x: number): number => {
      return Math.sin(x) * 0.5 + 0.5;
    };

    // Update blob positions with Perlin noise for smooth movement
    const updateBlobs = () => {
      blobs.forEach(blob => {
        // Use Perlin noise for smooth, natural movement
        blob.noiseX += 0.01;
        blob.noiseY += 0.01;
        
        // Update position with noise-based movement
        blob.x += blob.speedX + (noise(blob.noiseX) - 0.5) * 0.6;
        blob.y += blob.speedY + (noise(blob.noiseY) - 0.5) * 0.6;
        
        // Bounce off edges
        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw all blobs
      blobs.forEach(drawBlob);
      
      // Update positions
      updateBlobs();
      
      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initBlobs();
    animate();

    // Handle window resize
    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      resizeCanvas();
      initBlobs();
      animate();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full animate-pulse -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default FloatingBlobs;