"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin, Mail, Phone } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Hero() {
  const { basics } = resumeData;

  const handleScrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6"
          >
            <MapPin size={14} className="text-primary" />
            {basics.location}
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="gradient-text">{basics.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="text-xl md:text-2xl text-primary font-mono mb-6"
          >
            {basics.title}
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8"
          >
            {basics.summary}
          </motion.p>

          {/* Contact chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href={`mailto:${basics.email}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm hover:bg-primary/10 transition-colors"
            >
              <Mail size={14} className="text-primary" />
              {basics.email}
            </a>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm">
              <Phone size={14} className="text-primary" />
              {basics.phone}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleScrollToExperience}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-sm hover:glow-md"
            >
              View Experience
              <ArrowDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>

            <a
              href="#resume-download"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold hover:bg-muted/50 transition-all"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
