"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background-alt relative">
      <div className="absolute inset-0 bg-glow-gradient pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto rounded-full" />
        </motion.div>

        <ProjectCard />
      </div>
    </section>
  );
}
