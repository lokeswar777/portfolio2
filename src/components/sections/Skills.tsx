"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";

export function Skills() {
  const categories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative bg-muted/10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive list of the tools and technologies I use to build software." 
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {categories.map((category) => (
            <motion.div key={category} variants={itemVariants}>
              <SpotlightCard className="p-8 h-full">
                <h3 className="text-xl font-bold mb-6 capitalize text-foreground border-b border-border/50 pb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.skills[category].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}