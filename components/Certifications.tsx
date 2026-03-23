"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionWrapper from "./SectionWrapper";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resumeData.certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="glass rounded-xl p-5 glow-border hover:glow-sm transition-all flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              {cert.toLowerCase().includes("microsoft") ||
              cert.toLowerCase().includes("azure") ? (
                <ShieldCheck size={20} className="text-primary" />
              ) : (
                <Award size={20} className="text-primary" />
              )}
            </div>
            <p className="font-medium text-sm leading-relaxed">{cert}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
