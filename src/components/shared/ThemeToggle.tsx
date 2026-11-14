"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

/** Applies the theme class immediately so the transition captures the new look. */
function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Read the live class rather than state, so it's correct even before hydration finishes.
    const current: Theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const next: Theme = current === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setTheme(next);
      return;
    }

    if (!document.startViewTransition) {
      // Fallback: fade colors for a moment.
      const root = document.documentElement;
      root.classList.add("theme-transition");
      applyThemeClass(next);
      setTheme(next);
      window.setTimeout(() => root.classList.remove("theme-transition"), 400);
      return;
    }

    // Circular reveal that grows from the button.
    const x = e.clientX || window.innerWidth - 40;
    const y = e.clientY || 40;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(() => {
      applyThemeClass(next);
      setTheme(next);
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 550, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" }
        );
      })
      .catch(() => {
        // Transition was skipped (e.g. tab hidden); the theme is already applied.
      });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-background/50 text-muted-foreground backdrop-blur-md transition-colors hover:text-primary hover:border-primary/50",
        className
      )}
    >
      {/* Both icons render; CSS picks one, so there's no flash before hydration. */}
      <Sun size={18} className="absolute rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
      <Moon size={18} className="absolute rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
    </button>
  );
}
