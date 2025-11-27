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
    <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-14 mb-16">

      {/* TOP HEADER BLOCK */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
          Aleksandar Urošević
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          © {new Date().getFullYear()} — All rights reserved
        </p>

        <p className="text-neutral-500 dark:text-neutral-500 text-sm mt-1">
          Last updated: <span className="font-medium">27 November 2025</span>
        </p>
      </div>

      {/* TWO COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* COLUMN 1: SITE PAGES */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-4">
            Pages
          </h3>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li><a href="/" className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all">Home</a></li>
            <li><a href="/about" className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all">About</a></li>
            <li><a href="/blog" className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all">Blog</a></li>
            <li><a href="/cv" className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all">CV</a></li>
            <li><a href="/contact" className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                href="/rss"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ArrowIcon />
                <span className="ml-2">RSS Feed</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                href="https://rewi.uni-mainz.de/systemadministration/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ArrowIcon />
                <span className="ml-2">Uni Mainz – Systemadministration</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                href="https://sq.jura.uni-mainz.de/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ArrowIcon />
                <span className="ml-2">SQ Mainz</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                href="https://gsb.uni-mainz.de/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ArrowIcon />
                <span className="ml-2">GSB Mainz</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                href="http://urosevic.de/tech-wiki"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ArrowIcon />
                <span className="ml-2">Tech Wiki</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
