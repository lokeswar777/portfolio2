import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const { personal } = portfolioData;

const socials = [
  { href: personal.github, label: "GitHub", Icon: FaGithub },
  { href: personal.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: personal.leetcode, label: "LeetCode", Icon: SiLeetcode },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter">
            {personal.shortName}
            <span className="text-primary">.</span>
          </span>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
            {personal.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 py-6 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
