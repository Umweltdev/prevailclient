"use client";
import { useEffect } from "react";

const colors = [
  "rgba(166, 193, 238, 0.5)", // primary
  "rgba(243, 231, 233, 0.5)", // secondary
  "rgba(194, 233, 251, 0.5)", // accent1
  "rgba(251, 221, 232, 0.5)", // accent2
  "rgba(212, 240, 240, 0.5)", // accent3
];

function morphBlobs() {
  const blobs = document.querySelectorAll<HTMLElement>(".blob");

  blobs.forEach((blob) => {
    // Randomize position
    blob.style.left = `${Math.random() * 100}%`;
    blob.style.top = `${Math.random() * 100}%`;

    // Randomize size
    const size = Math.random() * 300 + 100;
    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;

    // Randomize color
    blob.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  });
}

export default function FloatingBlobs() {
  useEffect(() => {
    morphBlobs();
    const interval = setInterval(morphBlobs, 4000); // morph every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="blob absolute rounded-full blur-3xl opacity-90 transition-all duration-[1500ms] ease-in-out"
        />
      ))}
    </div>
  );
}