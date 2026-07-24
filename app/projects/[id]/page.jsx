"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import projects from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            Project Not Found
          </h2>
          <Link
            href="/projects"
            className="text-accent hover:underline font-medium"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 sm:h-80 lg:h-96"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
              {project.title}
            </h1>
            <p className="text-gray-200 mt-2 max-w-lg mx-auto drop-shadow">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-text mb-4">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm hover:bg-primary-gradient hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-text mb-4">
            Description
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-text mb-4">
            Challenges
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary"
              >
                <FiChevronRight className="text-accent mt-1 shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-text mb-4">
            Future Improvements
          </h2>
          <ul className="space-y-3">
            {project.improvements.map((improvement, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary"
              >
                <FiChevronRight className="text-accent mt-1 shrink-0" />
                {improvement}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-gradient text-white font-medium rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-primary-gradient hover:text-white transition-all"
          >
            <FiGithub /> GitHub Repository
          </a>
        </motion.div>
      </div>
    </div>
  );
}
