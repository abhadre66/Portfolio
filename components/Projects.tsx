"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="End-to-end systems built with modern AI and data engineering"
    >
      <div className="grid gap-8">
        {resumeData.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group glass rounded-2xl glow-border hover:glow-sm transition-all overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                      <Code2 size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-primary font-mono">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground/30 group-hover:text-primary transition-colors flex-shrink-0 mt-1"
                />
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {project.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
