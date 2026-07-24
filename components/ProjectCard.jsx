"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import projects from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectCard() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all border border-border hover:border-accent/20 flex flex-col"
        >
          <div className="relative overflow-hidden h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-text mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary mb-4 line-clamp-3 sm:line-clamp-2">
                {project.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3 mt-auto">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-gradient text-white text-sm sm:text-base font-medium rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:shadow-accent/25 sm:flex-1"
              >
                <FiExternalLink size="16" /> Live Link
              </a>
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-accent text-accent text-sm sm:text-base font-medium rounded-lg hover:bg-accent hover:text-white transition-all sm:flex-1"
              >
                Details <FiArrowRight size="16" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
