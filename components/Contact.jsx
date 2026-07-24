"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:ashikorrahman8900@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name}%0AEmail: ${form.email}`;
    window.open(mailto);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-background-alt relative">
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
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-4 bg-surface rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="p-3 bg-accent/10 rounded-full text-accent">
                <FiMail size="22" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Email</p>
                <p className="font-medium text-text">
                  ashikorrahman8900@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-surface rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="p-3 bg-accent/10 rounded-full text-accent">
                <FiPhone size="22" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Phone</p>
                <p className="font-medium text-text">+880 1776-417604</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-surface rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="p-3 bg-accent/10 rounded-full text-accent">
                <FaWhatsapp size="22" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">WhatsApp</p>
                <p className="font-medium text-text">+8801956417678</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all border border-border hover:border-accent/20"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background text-text border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder-muted"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background text-text border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder-muted"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-background text-text border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none placeholder-muted"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-gradient text-white font-medium rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/25"
                >
                  <FiSend /> Send Message
                </button>
                {submitted && (
                  <p className="text-accent text-center font-medium">
                    Message sent successfully!
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
