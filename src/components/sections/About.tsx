"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Code2, Globe, Laptop } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me and what drives my passion for software engineering." 
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              {portfolioData.personal.bio}
            </p>
            <p>
              My focus is on creating seamless user experiences using modern technologies 
              while ensuring robust and scalable backend architectures. I believe in writing 
              clean, maintainable code and continuously learning to stay ahead of industry trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <SpotlightCard className="p-6 flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <Laptop size={32} />
              </div>
              <h3 className="font-semibold text-foreground">Frontend</h3>
              <p className="text-sm text-muted-foreground">Crafting beautiful and responsive user interfaces.</p>
            </SpotlightCard>
            
            <SpotlightCard className="p-6 flex flex-col items-center text-center gap-4 sm:translate-y-8">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <Code2 size={32} />
              </div>
              <h3 className="font-semibold text-foreground">Backend</h3>
              <p className="text-sm text-muted-foreground">Building scalable and secure server architectures.</p>
            </SpotlightCard>
            
            <SpotlightCard className="p-6 flex flex-col items-center text-center gap-4 sm:-translate-y-8 sm:col-span-2 mx-auto w-full sm:w-1/2">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <Globe size={32} />
              </div>
              <h3 className="font-semibold text-foreground">Deployment</h3>
              <p className="text-sm text-muted-foreground">Managing CI/CD pipelines and cloud infrastructure.</p>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}