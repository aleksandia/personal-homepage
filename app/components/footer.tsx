"use client";

import Link from "next/link";

export default function Footer() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="border-t mt-16 pt-10 pb-6 text-sm text-foreground/70">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Name + last updated */}
        <div className="mb-6">
          <h2 className="text-3xl font-light tracking-wide text-foreground">
            Aleksandar Urošević
          </h2>

          {/* Elegant underline */}
          <div className="mx-auto mt-2 mb-3 h-px w-24 bg-foreground/20"></div>

          <p className="text-xs text-foreground/50">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-8 mt-4 text-left max-w-md mx-auto">
          
          {/* Column 1: Pages */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Pages</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-foreground transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition">About</Link></li>
              <li><Link href="/projects" className="hover:text-foreground transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/cv" className="hover:text-foreground transition">CV</Link></li>
              <li><Link href="/imprint" className="hover:text-foreground transition">Imprint</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-foreground/40">
          © {new Date().getFullYear()} Aleksandar Urošević. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
