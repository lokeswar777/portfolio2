"use client";

import { motion } from "framer-motion";
import { portfolioData, type FocusArea } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { AppWindow, ChartColumn, Workflow, type LucideIcon } from "lucide-react";

const focusIcons: Record<FocusArea["icon"], LucideIcon> = {
  pipeline: Workflow,
  chart: ChartColumn,
  web: AppWindow,
};

export function About() {
  const { bio } = portfolioData.personal;
  const { focusAreas } = portfolioData;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="From raw data to the dashboards and apps people rely on."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            {bio.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-foreground text-xl" : undefined}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[area.icon];
              const layout =
                i === 1
                  ? "sm:translate-y-8"
                  : i === 2
                    ? "sm:-translate-y-8 sm:col-span-2 mx-auto w-full sm:w-1/2"
                    : "";
              return (
                <SpotlightCard
                  key={area.title}
                  className={`p-6 flex flex-col items-center text-center gap-4 ${layout}`}
                >
                  <div className="p-4 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-semibold text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </SpotlightCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
