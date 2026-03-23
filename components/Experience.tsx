"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Building2, Calendar, TrendingUp } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionWrapper from "./SectionWrapper";

function extractMetrics(bullet: string): string[] {
  const matches = bullet.match(
    /\d+[\d,.]*%|\d+[\d,.]*\+?\s*(images|reviews|tracks|models|predictions|stop-words)/gi
  );
  return matches || [];
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Professional journey and impact"
    >
      {/* Impact Highlights Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-4 rounded-2xl glass glow-border"
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={16} className="text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Impact Highlights
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {resumeData.topImpact.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-3 rounded-xl bg-primary/5"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {item.metric}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {item.context}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-20 mb-8"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-sm" />

            {/* Card */}
            <div
              className="glass rounded-2xl overflow-hidden glow-border hover:glow-sm transition-shadow cursor-pointer"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Building2 size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <p className="text-primary font-mono text-sm">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar size={14} />
                      {exp.dates}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={20}
                      className="text-muted-foreground"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Expandable content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-border/50 pt-4">
                      <ul className="space-y-4">
                        {exp.bullets.map((bullet, bi) => {
                          const metrics = extractMetrics(bullet);
                          return (
                            <motion.li
                              key={bi}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: bi * 0.1 }}
                              className="flex gap-3"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {bullet}
                                </p>
                                {metrics.length > 0 && (
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {metrics.map((m, mi) => (
                                      <span
                                        key={mi}
                                        className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-mono font-semibold"
                                      >
                                        {m}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
