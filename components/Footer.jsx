"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-surface text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-accent hover:text-white transition-colors"
            >
              Ashikur Rahman
            </Link>
            <p className="text-muted text-sm mt-1">
              Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ashik-creates"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-accent transition-all"
            >
              <FaGithub size="18" />
            </a>
            <a
              href="https://linkedin.com/in/ashik-creates"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-accent transition-all"
            >
              <FaLinkedinIn size="18" />
            </a>
            <a
              href="https://twitter.com/ashikorrahman2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-accent transition-all"
            >
              <FaTwitter size="18" />
            </a>
            <a
              href="https://www.facebook.com/ashik.aryan.52"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-accent transition-all"
            >
              <FaFacebookF size="18" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted text-sm">
            &copy; 2026 Ashikur Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
