function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-10 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT COLUMN – QUICK LINKS */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="/rss"
              >
                <ArrowIcon />
                <span className="ml-2">RSS</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://rewi.uni-mainz.de/systemadministration/"
              >
                <ArrowIcon />
                <span className="ml-2">Uni Mainz – Systemadministration</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://sq.jura.uni-mainz.de/"
              >
                <ArrowIcon />
                <span className="ml-2">SQ Mainz</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://gsb.uni-mainz.de/"
              >
                <ArrowIcon />
                <span className="ml-2">GSB Mainz</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="http://urosevic.de/tech-wiki"
              >
                <ArrowIcon />
                <span className="ml-2">Tech Wiki</span>
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN – SITE INFO */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-4">
            Site Information
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
            © {new Date().getFullYear()} Aleksandar Urošević
          </p>

          {/* Optional last updated line */}
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Last updated: <span className="font-medium">27 Nov 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
