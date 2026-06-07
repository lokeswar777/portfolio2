"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block rounded-full px-4 py-1.5 border border-border/50 bg-background/50 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
            {portfolioData.personal.name.split(" ")[0]}
          </span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">
            {portfolioData.personal.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
        >
          {portfolioData.personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton>
            <Button
              size="lg"
              className="rounded-full px-8 h-14 text-base font-medium group"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </MagneticButton>
          
          <MagneticButton>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base font-medium border-border/50 bg-background/50 backdrop-blur-md hover:bg-muted"
              onClick={() => window.open(portfolioData.personal.resumeUrl, "_blank")}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}