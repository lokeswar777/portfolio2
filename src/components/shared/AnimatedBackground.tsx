"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-background">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-muted/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{ maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)" }}
      />
    </div>
  );
}