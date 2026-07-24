"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiHeart, FiSmile } from "react-icons/fi";

const journey = [
  "Started learning HTML & CSS.",
  "Learned JavaScript and React.",
  "Explored Next.js.",
  "Built full-stack applications.",
  "Learned Express.js and MongoDB.",
  "Continuously improving my skills.",
];

const enjoy = [
  "Building full-stack web applications",
  "Designing modern user interfaces",
  "Solving programming challenges",
  "Learning new technologies",
];

const hobbies = [
  "Football",
  "Reading technology articles",
  "Exploring AI",
  "Listening to music",
];

const cards = [
  {
    icon: <FiBookOpen size="28" />,
    title: "My Journey",
    items: journey,
  },
  {
    icon: <FiHeart size="28" />,
    title: "What I Enjoy",
    items: enjoy,
  },
  {
    icon: <FiSmile size="28" />,
    title: "Hobbies",
    items: hobbies,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-alt relative">
      <div className="absolute inset-0 bg-glow-gradient pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="text-text-secondary text-lg leading-relaxed">
            My journey into programming started with curiosity about how
            websites work. I began with HTML and CSS, building simple pages
            and experimenting with layouts. As I learned JavaScript, I
            discovered the power of creating interactive experiences, which
            led me to React and Next.js. From there, I dove into full-stack
            development with Express.js and MongoDB, building complete
            applications from the ground up. I enjoy crafting clean,
            responsive UIs and solving real-world problems through code.
            Every project teaches me something new, and I&apos;m always
            excited to learn more.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all border border-border hover:border-accent/20"
            >
              <div className="text-accent mb-4">{card.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-text mb-4">
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-text-secondary"
                  >
                    <span className="text-accent mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
