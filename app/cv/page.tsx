// app/cv/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum vitae",
  description:
    "CV of Aleksandar Urošević — Systems Administrator and Webmaster at Johannes Gutenberg University Mainz, B.Sc. Economics student.",
  authors: [{ name: "Aleksandar Urosevic" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://urosevic.vercel.app/cv",
  },
  openGraph: {
    title: "Curriculum vitae | Aleksandar Urošević",
    description:
      "CV of Aleksandar Urošević — Systems Administrator and Webmaster at Johannes Gutenberg University Mainz.",
    url: "https://urosevic.vercel.app/cv",
    siteName: "Aleksandar Urosevic",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Curriculum vitae | Aleksandar Urošević",
    description:
      "CV of Aleksandar Urošević — Systems Administrator and Webmaster at Johannes Gutenberg University Mainz.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aleksandar Urošević",
  url: "https://urosevic.vercel.app",
  jobTitle: "Systems Administrator / Webmaster",
  worksFor: {
    "@type": "Organization",
    name: "Johannes Gutenberg University Mainz",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Johannes Gutenberg University Mainz",
  },
  knowsLanguage: ["German", "English", "Serbian"],
  sameAs: [
    "https://linkedin.com/in/aleksandar-urosevic-6881453aa",
  ],
};

export default function CvPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <h1 className="text-4xl font-bold mb-6">Curriculum vitae</h1>
      <main className="cv-container">
        <section className="cv-section">
          <h2>Work Experience</h2>

          <div className="cv-item">
            <div className="cv-date">
              <time dateTime="2024-05">05/2024</time> – present
            </div>
            <div className="cv-content">
              <h3>Student Assistant systems administrator</h3>
              <p>Johannes Gutenberg University - Chair of Prof. Dr. Franz Rothlauf</p>
              <ul>
                <li>Administration of servers and workstation computers</li>
                <li>First level user support</li>
                <li>Lending of PC equipment for research and teaching</li>
                <li>Managing and maintaining WordPress projects</li>
              </ul>
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-date">
              <time dateTime="2025-03">03/2025</time> – present
            </div>
            <div className="cv-content">
              <h3>Webmaster</h3>
              <p>SQ Mainz e.V. - Johannes Gutenberg University</p>
              <ul>
                <li>Website relaunch using the new CMS WordPress layout of JGU Mainz</li>
                <li>Revision and comprehensive update of the entire web presence</li>
                <li>Ongoing maintenance and updates of all website content</li>
              </ul>
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-date">
              <time dateTime="2025-12">12/2025</time> – present
            </div>
            <div className="cv-content">
              <h3>Webmaster</h3>
              <p>Gutenberg School of Business (GSB) - Johannes Gutenberg University</p>
              <ul>
                <li>Ongoing maintenance and updates of all website content</li>
              </ul>
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-date">
              <time dateTime="2026-05">05/2026</time> – present
            </div>
            <div className="cv-content">
              <h3>Webmaster</h3>
              <p>Chair of Marketing Analytics Prof. Dr. Frank Huber - Johannes Gutenberg University</p>
              <ul>
                <li>Website relaunch using the new CMS and WordPress layout of JGU Mainz</li>
                <li>Revision and comprehensive update of the entire web presence</li>
                <li>Ongoing maintenance and updates of all website content</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Education</h2>

          <div className="cv-item">
            <div className="cv-date">
              <time dateTime="2023-10">10/2023</time> – present
            </div>
            <div className="cv-content">
              <h3>Bachelor of Science (B.Sc.) Economics</h3>
              <p>Johannes Gutenberg University Mainz</p>
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-date">
              <time dateTime="2018">2018</time> – <time dateTime="2023">2023</time>
            </div>
            <div className="cv-content">
              <h3>Abitur (German equivalent to A-Levels)</h3>
              <p>Taunusgymnasium Königstein</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Skills</h2>
          <div className="cv-item">
            <div className="cv-date"></div>
            <div className="cv-content">
              <h3>Technical Skills</h3>
              <p>Operating Systems and Applications</p>
              <ul>
                <li>Microsoft Office</li>
                <li>Microsoft Windows</li>
                <li>Linux (Ubuntu, Debian, Mint)</li>
                <li>VMWare ESXi Server/Hypervisor</li>
                <li>Webhosting using Ubuntu Server, Apache, PHP and MySQL</li>
              </ul>
              <br />
              <h3>Language Skills</h3>
              <ul>
                <li>German (native)</li>
                <li>English (Cambridge C1 Advanced Certification)</li>
                <li>Serbian (native)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Extracurricular Activities</h2>
          <div className="cv-item">
            <div className="cv-date">
              <time dateTime="2025-10">10/2025</time> – <time dateTime="2026-04">04/2026</time>
            </div>
            <div className="cv-content">
              <h3>Tutor at the Chair of Marketing Analytics – Subject: Marketing</h3>
              <p>Johannes Gutenberg University Mainz - Chair of Prof. Dr. Frank Huber</p>
              <ul>
                <li>Conducted weekly tutorials</li>
                <li>Part of the final exam corrected</li>
                <li>Supervised the exam review</li>
              </ul>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-date">
              <time dateTime="2022">2022</time> – present
            </div>
            <div className="cv-content">
              <h3>Creating and maintaining websites for commercial purposes</h3>
              <ul>
                <li>
                  Klavierhof: <a href="https://www.klavierhof.com">www.klavierhof.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <p className="text-sm text-gray-500 mt-8 text-center">
        Last updated: May 2026
      </p>
    </>
  );
}
