"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Award, Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Achievements & Certifications" 
          subtitle="Recognitions and milestones throughout my career." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          {portfolioData.achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-6 h-full flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                  {index % 2 === 0 ? <Trophy size={24} /> : <Award size={24} />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-primary mb-3 block">
                    {item.date}
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}