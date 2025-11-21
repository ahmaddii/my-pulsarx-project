"use client";

import React from "react";

export function PurpleCosmicBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Deep dark background base */}
            <div className="absolute inset-0 bg-[#030014]"></div>

            {/* The Main Purple Arc / Singularity at Top */}
            <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] md:w-[1500px] md:h-[1500px] rounded-full opacity-100 z-0">
                {/* Core White/Pink Glow */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,0,255,0.4)_15%,rgba(140,0,255,0.1)_40%,transparent_70%)] blur-[60px] animate-pulse-slow"></div>

                {/* Outer Purple Haze */}
                <div className="absolute inset-[-100px] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.3)_0%,transparent_60%)] blur-[100px] mix-blend-screen"></div>

                {/* Sharp Ring Definition (The "Event Horizon" edge) */}
                <div className="absolute inset-[200px] rounded-full border-[2px] border-purple-500/30 blur-sm"></div>
                <div className="absolute inset-[220px] rounded-full border-[1px] border-white/20 blur-[1px]"></div>
            </div>

            {/* Stars */}
            <div className="absolute inset-0 z-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={`star-${i}`}
                        className="absolute bg-white rounded-full animate-twinkle"
                        style={{
                            width: Math.random() * 2 + 1 + "px",
                            height: Math.random() * 2 + 1 + "px",
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                            opacity: Math.random() * 0.5 + 0.3,
                            animationDelay: Math.random() * 5 + "s",
                            animationDuration: Math.random() * 3 + 2 + "s",
                        }}
                    />
                ))}
            </div>

            {/* Shooting Stars */}
            {[...Array(3)].map((_, i) => (
                <div
                    key={`shooting-${i}`}
                    className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star-fast"
                    style={{
                        top: Math.random() * 50 + "%",
                        left: Math.random() * 100 + "%",
                        animationDelay: Math.random() * 10 + "s",
                        transform: "rotate(-45deg)",
                    }}
                ></div>
            ))}

            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes shooting-star-fast {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        .animate-shooting-star-fast {
          animation: shooting-star-fast 5s linear infinite;
        }
      `}</style>
        </div>
    );
}
