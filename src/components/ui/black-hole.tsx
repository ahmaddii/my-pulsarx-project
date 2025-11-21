"use client";

import React from "react";

export function BlackHole() {
    return (
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden perspective-1000">
            {/* Main Container with Tilt */}
            <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px] transform-style-3d animate-tilt-slow">

                {/* Gravitational Lensing / Outer Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl opacity-40 animate-pulse-slow"></div>

                {/* Accretion Disk - Back Layer (Simulates the part behind the black hole) */}
                <div className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(var(--primary),0.4)_90deg,transparent_180deg,rgba(var(--accent),0.4)_270deg,transparent_360deg)] blur-xl animate-spin-slower opacity-60 mix-blend-screen"></div>

                {/* Accretion Disk - Main Swirl */}
                <div className="absolute inset-0 rounded-full animate-spin-slow">
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(var(--primary),0.8),transparent,rgba(var(--accent),0.8),transparent)] opacity-80 blur-md"></div>
                    {/* Texture detail */}
                    <div className="absolute inset-4 rounded-full bg-[conic-gradient(from_180deg,transparent,rgba(255,255,255,0.1),transparent,rgba(255,255,255,0.1),transparent)] opacity-40 mix-blend-overlay"></div>
                </div>

                {/* Photon Ring (Bright inner edge) */}
                <div className="absolute top-1/2 left-1/2 w-[42%] h-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white via-primary to-white blur-[2px] animate-spin-reverse opacity-90 z-10 shadow-[0_0_30px_rgba(255,255,255,0.5)]"></div>

                {/* Event Horizon (The Void) */}
                <div className="absolute top-1/2 left-1/2 w-[40%] h-[40%] -translate-x-1/2 -translate-y-1/2 bg-black rounded-full z-20 shadow-[0_0_50px_rgba(0,0,0,1)]">
                    {/* Inner shadow to give depth */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,1)]"></div>
                </div>

                {/* Accretion Disk - Front Layer (Simulates the part in front, distorted) */}
                <div className="absolute top-1/2 left-1/2 w-[160%] h-[40%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.3)_0%,transparent_70%)] blur-xl rotate-12 z-30 mix-blend-screen pointer-events-none"></div>

            </div>

            <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes tilt-slow {
          0%, 100% { transform: rotateX(60deg) rotateY(0deg); }
          50% { transform: rotateX(50deg) rotateY(5deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 25s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }
        .animate-tilt-slow {
          animation: tilt-slow 20s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
