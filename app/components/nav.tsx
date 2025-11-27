"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "Home" },
  "/blog": { name: "Blog" },
  "/about": { name: "About" },
  "/cv": { name: "CV" },
  "/contact": { name: "Contact" },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="
            flex flex-row items-start
            border-b border-neutral-200 dark:border-neutral-800
            pb-2 mb-6
          "
        >
          <div className="flex flex-row space-x-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;

              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    px-3 py-1 rounded-md transition-all m-1
                    ${isActive
                      ? "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                    }
                  `}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
