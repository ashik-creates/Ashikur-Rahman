"use client";

import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiJsonwebtokens, SiPostman, SiVercel, SiTypescript,
} from "react-icons/si";
import skills from "@/data/skills";

const iconMap = {
  TypeScript: <SiTypescript />,
  "Next.js": <SiNextdotjs />,
  React: <FaReact />,
  "Tailwind CSS": <SiTailwindcss />,
  JavaScript: <FaJsSquare />,
  CSS: <FaCss3Alt />,
  HTML: <FaHtml5 />,
  "Better Auth": <SiJsonwebtokens />,
  JWT: <SiJsonwebtokens />,
  MongoDB: <SiMongodb />,
  "Express.js": <SiExpress />,
  "Node.js": <FaNodeJs />,
  Vercel: <SiVercel />,
  Postman: <SiPostman />,
  "VS Code": <FaReact />,
  GitHub: <FaGithub />,
  Git: <FaGitAlt />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
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
            My <span className="text-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-14">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold text-text mb-6 sm:mb-8 capitalize flex items-center gap-3"
              >
                <span className="w-8 h-1 bg-accent rounded-full" />
                {category}
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {skillList.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group relative px-5 py-4 bg-surface rounded-2xl shadow-sm border border-border hover:border-accent/30 transition-all duration-300 cursor-default"
                    style={{
                      background:
                        skill.name === "TypeScript"
                          ? "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(168,85,247,0.08))"
                          : undefined,
                    }}
                  >
                    {skill.name === "TypeScript" && (
                      <span className="absolute -top-2 -right-2 text-[10px] font-bold px-2 py-0.5 bg-accent text-white rounded-full shadow-lg">
                        NEW
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-xl text-accent">
                        {iconMap[skill.name] || <FaReact />}
                      </span>
                      <span className="font-semibold text-text whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
