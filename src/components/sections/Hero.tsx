"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const { personal, stats } = portfolioData;

const socials = [
  { href: personal.github, label: "GitHub", Icon: FaGithub },
  { href: personal.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: personal.leetcode, label: "LeetCode", Icon: SiLeetcode },
];

function RotatingRole() {
  const roles = personal.rotatingRoles;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-primary"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Avatar() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image may fail before hydration, in which case onError never fires.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent-2 blur-md opacity-70" />
      <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-full p-[3px] bg-gradient-to-tr from-primary to-accent-2">
        {failed ? (
          <div className="h-full w-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
            {personal.name.charAt(0)}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={personal.profileImage}
            alt={personal.name}
            onError={() => setFailed(true)}
            className="h-full w-full rounded-full object-cover bg-background"
          />
        )}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Avatar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to new opportunities
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 border border-border/50 bg-background/50 backdrop-blur-md text-sm text-muted-foreground">
            <MapPin size={14} />
            {personal.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-accent-2">
            {personal.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl md:text-4xl font-semibold tracking-tight text-muted-foreground mb-6"
          aria-label={personal.rotatingRoles.join(", ")}
        >
          <RotatingRole />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton>
              <a
                href="#projects"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 h-14 text-base font-medium group shadow-[0_0_30px_-5px] shadow-primary/50")}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-8 h-14 text-base font-medium border-border/50 bg-background/50 backdrop-blur-md hover:bg-muted"
                )}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-4 mt-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
                aria-label={label}
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-14 grid grid-cols-3 divide-x divide-border/50 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-md"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse px-5 py-4 md:px-8">
              <dt className="text-xs md:text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
