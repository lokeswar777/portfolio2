"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { BadgeCheck, ExternalLink, Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Achievements & Certifications"
          subtitle="Recognitions and milestones throughout my career."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          {portfolioData.achievements.map((item, index) => {
            const Icon = /certif/i.test(item.title) ? BadgeCheck : Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-6 h-full flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    {item.date && (
                      <span className="text-sm font-medium text-primary mb-3 block">{item.date}</span>
                    )}
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.credentialUrl && (
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        Verify <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
