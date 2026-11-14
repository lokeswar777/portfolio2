"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and career highlights."
        />

        <div className="max-w-3xl mx-auto mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-border/50 to-transparent" />

          <div className="space-y-12">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary shadow-[0_0_16px] shadow-primary/40 md:-ml-4 flex items-center justify-center z-10 mt-1 md:mt-0">
                  <Briefcase size={12} className="text-primary" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass-card p-6 rounded-xl relative group hover:border-primary/50 transition-colors">
                    <span className="text-sm font-semibold text-primary mb-2 block">{job.date}</span>
                    <h3 className="text-xl font-bold text-foreground mb-1">{job.role}</h3>
                    <h4 className="text-lg text-muted-foreground mb-4 font-medium">{job.company}</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {job.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {job.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
