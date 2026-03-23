"use client";

import { motion } from "framer-motion";
import { Code, Database, BarChart3, Brain } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionWrapper from "./SectionWrapper";

const categoryIcons: Record<string, typeof Code> = {
  "Programming & Frameworks": Code,
  "Data Engineering & Infrastructure": Database,
  "Data Analysis & Visualization": BarChart3,
  "Machine Learning & AI": Brain,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Technical expertise across the data & AI stack">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.skills.map((group, i) => {
          const Icon = categoryIcons[group.category] || Code;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 glow-border hover:glow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-lg bg-muted/50 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
