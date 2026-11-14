"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { skillIcons } from "@/lib/skillIcons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  const categories = Object.entries(portfolioData.skills);

  return (
    <section id="skills" className="py-24 relative bg-muted/10">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="The languages, platforms and tools I use to build data systems and the apps on top of them."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {categories.map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <SpotlightCard className="p-8 h-full">
                <h3 className="text-xl font-bold mb-6 text-foreground border-b border-border/50 pb-4">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {skills.map((skill) => {
                    const Icon = skillIcons[skill];
                    return (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/60 hover:text-primary transition-colors cursor-default"
                      >
                        {Icon && <Icon size={16} aria-hidden="true" />}
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
