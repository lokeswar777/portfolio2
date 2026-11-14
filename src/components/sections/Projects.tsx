"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  // Featured projects come first and get a wider card.
  const projects = [...portfolioData.projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  return (
    <section id="projects" className="py-24 relative bg-muted/5">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of the notable applications I have built recently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`h-full ${project.featured ? "md:col-span-2" : ""}`}
            >
              <SpotlightCard
                className={`h-full flex flex-col overflow-hidden group ${
                  project.featured ? "lg:flex-row border-primary/30" : ""
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden border-b border-border/50 ${
                    project.featured ? "h-56 lg:h-auto lg:w-1/2 lg:border-b-0 lg:border-r" : "h-48"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent group-hover:opacity-0 transition-opacity z-10" />
                  {project.featured && (
                    <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      <Star size={12} /> Featured
                    </span>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  {project.highlight && (
                    <p className="mb-6 text-sm font-medium text-primary border-l-2 border-primary pl-3">
                      {project.highlight}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.githubUrl || project.liveUrl) && (
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <FaGithub size={16} />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors ml-auto"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
