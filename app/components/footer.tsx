"use client";

import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-70"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="mt-20 border-t pt-10 pb-10 text-neutral-600 dark:text-neutral-300">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header area */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-light tracking-wide text-foreground">
            Aleksandar Urošević
          </h2>
          <div className="mx-auto mt-3 h-px w-24 bg-neutral-400/30 dark:bg-neutral-500/30" />
          <p className="mt-3 text-xs opacity-70">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

          {/* Column 1 — Pages */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-foreground transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition">About</Link></li>
              <li><Link href="/projects" className="hover:text-foreground transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/rss" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-foreground transition">
                  <ArrowIcon />
                  <span className="ml-2">rss</span>
                </a>
              </li>
              <li>
                <a href="https://rewi.uni-mainz.de/systemadministration/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-foreground transition">
                  <ArrowIcon />
                  <span className="ml-2">uni-mainz</span>
                </a>
              </li>
              <li>
                <a href="https://sq.jura.uni-mainz.de/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-foreground transition">
                  <ArrowIcon />
                  <span className="ml-2">sq-mainz</span>
                </a>
              </li>
              <li>
                <a href="https://gsb.uni-mainz.de/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-foreground transition">
                  <ArrowIcon />
                  <span className="ml-2">gsb-mainz</span>
                </a>
              </li>
              <li>
                <a href="http://urosevic.de/tech-wiki" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-foreground transition">
                  <ArrowIcon />
                  <span className="ml-2">tech-wiki</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <p className="mt-12 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Aleksandar Urošević
        </p>
      </div>
    </footer>
  );
}
