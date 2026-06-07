"use client";

import { portfolioData } from "@/data/portfolio";
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter">
            {portfolioData.personal.name}.
          </span>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
            {portfolioData.personal.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={portfolioData.personal.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 py-6 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}