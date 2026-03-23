"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, TrendingUp, Zap, Target } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionWrapper from "./SectionWrapper";

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d,.]+/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const numStr = numericMatch[0].replace(/,/g, "");
    const target = parseFloat(numStr);
    const isFloat = numStr.includes(".");
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const postfix = value.slice(
      value.indexOf(numericMatch[0]) + numericMatch[0].length
    );

    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      let formatted: string;
      if (isFloat) {
        formatted = current.toFixed(2);
      } else if (target >= 1000) {
        formatted = Math.round(current).toLocaleString();
      } else {
        formatted = Math.round(current).toString();
      }

      setDisplay(`${prefix}${formatted}${postfix}`);

      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

const typeIcons: Record<string, typeof Trophy> = {
  metrics: TrendingUp,
  wins: Trophy,
  leadership: Zap,
  default: Target,
};

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Measurable results and impact across projects"
    >
      {/* Top 3 Impact strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {resumeData.topImpact.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="relative p-6 rounded-2xl glass glow-border group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Trophy
              size={24}
              className="text-primary/40 mb-3"
            />
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              <AnimatedCounter value={item.metric} />
            </div>
            <p className="text-sm text-muted-foreground">{item.context}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* All achievements grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {resumeData.achievements.map((achievement, i) => {
          const Icon = typeIcons[achievement.type] || typeIcons.default;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (i % 4) * 0.08 }}
              whileHover={{
                scale: 1.03,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="group p-5 rounded-xl glass glow-border hover:glow-sm transition-all cursor-default"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">
                    <AnimatedCounter value={achievement.metric} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {achievement.context}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
