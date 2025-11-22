"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { Icons } from "../Icons";

const navLinks = [
  { label: "Blog", href: "/blog", icon: Icons.blog },
  { label: "About", href: "/about", icon: Icons.about },
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Navbar() {
  const path = `/${usePathname().split("/")[1]}`;

  return (
    <header className="z-[999] h-16 sm:h-20">
      <nav className="relative container flex size-full max-w-[700px] items-center justify-between">
        <motion.div initial="hidden" animate="show" variants={itemVariants}>
          <Link href="/" className="font-pixelify-sans text-2xl font-bold">
            AS.
          </Link>
        </motion.div>

        <motion.ul
          className="relative flex items-center gap-6"
          initial="hidden"
          animate="show"
          variants={listVariants}
        >
          {navLinks.map(({ label, href }) => (
            <motion.li key={label} variants={itemVariants}>
              <Link
                href={href}
                className={`font-mono text-sm font-medium tracking-wide transition-colors ${
                  href === path
                    ? "text-primary"
                    : "text-muted-foreground/90 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
}
