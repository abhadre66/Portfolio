"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const { basics } = resumeData;

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's connect and build something impactful"
    >
      <div className="max-w-2xl">
        <div className="grid gap-4">
          <motion.a
            href={`mailto:${basics.email}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 p-4 rounded-xl glass glow-border hover:glow-sm transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold">{basics.email}</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 p-4 rounded-xl glass glow-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold">{basics.phone}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 p-4 rounded-xl glass glow-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold">{basics.location}</p>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 mt-4"
          >
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-xl glass glow-border flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all hover:glow-sm"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              aria-label="Github"
              className="w-12 h-12 rounded-xl glass glow-border flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all hover:glow-sm"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
