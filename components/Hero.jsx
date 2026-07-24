"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl max-w-[50vw] max-h-[50vw]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl max-w-[60vw] max-h-[60vw]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] max-w-[80vw] max-h-[80vw]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-accent font-medium mb-4"
            >
              👋 Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text mb-4"
            >
              Ashikur <span className="text-accent">Rahman</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-text-secondary font-medium mb-8"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Building modern web apps with React, Next.js & Express
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="https://drive.google.com/file/d/1beKOA_y8eue9ljBST-WT0zAXq93B6f7F/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-gradient text-white font-medium rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                <FiDownload /> Download Resume
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-primary-gradient hover:text-white transition-all"
              >
                <FiMail /> Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              <a
                href="https://github.com/ashik-creates"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface rounded-full shadow-md text-text hover:text-accent hover:shadow-lg transition-all"
              >
                <FaGithub size="22" />
              </a>
              <a
                href="https://linkedin.com/in/ashik-creates"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface rounded-full shadow-md text-text hover:text-accent hover:shadow-lg transition-all"
              >
                <FaLinkedinIn size="22" />
              </a>
              <a
                href="https://twitter.com/ashikorrahman2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface rounded-full shadow-md text-text hover:text-accent hover:shadow-lg transition-all"
              >
                <FaTwitter size="22" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-4 border-accent/30 shadow-2xl max-w-[85vw]">
              <Image
                src="/projects/images/myPic.png"
                alt="Ashikur Rahman"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 256px, 288px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
