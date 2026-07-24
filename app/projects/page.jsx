"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gradient-to-br from-background to-surface text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-text">
          My <span className="text-accent">Projects</span>
        </h1>
        <p className="text-text-secondary mt-3 max-w-xl mx-auto">
          Explore the projects I&apos;ve built.
        </p>
      </motion.div>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectCard />
        </div>
      </section>
    </div>
  );
}
