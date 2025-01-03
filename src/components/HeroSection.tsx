"use client";

import React from "react";
import ParticlesComponent from "@/components/ParticlesComponent";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo e overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Partículas */}
      <div className="absolute inset-0">
        <ParticlesComponent />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          ¡Hola! Soy <span className="text-cyan-400">Omar Hernández Rey</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-cyan-200">
          Desarrollador Web Full Stack
        </h2>
        <p className="max-w-xl text-lg md:text-xl">
          Combino creatividad e innovación para crear soluciones web
          impresionantes.
        </p>
      </div>
    </div>
  );
}
