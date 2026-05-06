"use client";

import { useState } from "react";
import { siteContent } from "@/content/site";

const { nav } = siteContent;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex flex-col leading-none">
          <span className="font-cormorant text-2xl font-light tracking-widest text-zinc-900">
            {nav.logo}
          </span>
          <span className="text-[9px] tracking-widest text-zinc-500 font-light mt-0.5">
            {nav.logoSub}
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors font-light"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-zinc-900 text-white text-[11px] tracking-widest px-5 py-2.5 hover:bg-zinc-700 transition-colors flex items-center gap-2 font-light"
          >
            {nav.ctaLabel} <span>→</span>
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-zinc-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-px bg-zinc-900 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-zinc-900 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-zinc-900 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-100 px-6 py-6 flex flex-col gap-4">
          {nav.links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors font-light"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-zinc-900 text-white text-[11px] tracking-widest px-5 py-2.5 hover:bg-zinc-700 transition-colors flex items-center gap-2 font-light w-fit mt-2"
            onClick={() => setMenuOpen(false)}
          >
            {nav.ctaLabel} <span>→</span>
          </a>
        </div>
      )}
    </header>
  );
}
