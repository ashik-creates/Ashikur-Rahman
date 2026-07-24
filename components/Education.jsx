"use client";

import { motion } from "framer-motion";
import { FiBook } from "react-icons/fi";
import education from "@/data/education";

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-glow-gradient pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            <span className="text-accent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-accent/30 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[29px] sm:-left-[41px] top-0 p-1.5 sm:p-2 bg-accent rounded-full text-white shadow-md">
                <FiBook size="14" className="sm:size-[16px]" />
              </div>
              <div className="bg-surface rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all border border-border hover:border-accent/20">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                  {item.period}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-text">
                  {item.degree}
                </h3>
                <p className="text-text-secondary font-medium mb-2">
                  {item.institution}
                </p>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
