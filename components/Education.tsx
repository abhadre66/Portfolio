"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 glow-border hover:glow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{edu.institution}</h3>
                <p className="text-primary font-mono text-sm mt-1">
                  {edu.degree}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Calendar size={14} />
                  {edu.dates}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
