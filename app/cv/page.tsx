// app/contact/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum vitae",
  description: "Personal homepage of Aleksandar Urosevic",
  authors: [{ name: "Aleksandar Urosevic" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://urosevic.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
     <>
      <h1 className="text-4xl font-bold mb-6">Curriculum vitae</h1>
    <main className="cv-container">
      <section className="cv-header">
        <h1>Aleksandar Urosevic</h1>
      </section>

      <section className="cv-section">
        <h2>Work Experience</h2>

        <div className="cv-item">
          <div className="cv-date">05/2024 – Present</div>
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
          <div className="cv-date">03/2025 – Today</div>
          <div className="cv-content">
            <h3>Webmaster</h3>
            <p>SQ Mainz e.V. - Johannes Gutenberg University</p>
            <ul>
              <li>Website relaunch using the new WordPress layout of JGU Mainz</li>
              <li>Revision and comprehensive update of the entire web presence</li>
              <li>Ongoing maintenance and updates of all website content</li>
            </ul>
          </div>
        </div>

                <div className="cv-item">
          <div className="cv-date">12/2025 – Today </div>
          <div className="cv-content">
            <h3>Webmaster</h3>
            <p>Gutenberg School of Business (GSB) - Johannes Gutenberg University</p>
            <ul>
              <li>Ongoing maintenance and updates of all website content</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>

        <div className="cv-item">
          <div className="cv-date">10/2023 – Present</div>
          <div className="cv-content">
            <h3>Bachelor of Science (B.Sc.) Economics</h3>
            <p>Johannes Gutenberg University Mainz</p>
          </div>
        </div>

              <div className="cv-item">
          <div className="cv-date">2018 – 2023</div>
          <div className="cv-content">
            <h3>Abitur (German equivalent to A-Levels)</h3>
            <p>Taunusgymnasium Königstein</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
              <div className="cv-item">
          <div className="cv-date">2018 – 2023</div>
          <div className="cv-content">
            <h3>Technical Skills</h3>
            <ul>
              <li>Ongoing maintenance and updates of all website content</li>
            </ul>
          </div>
        </div>
      </section>

            <section className="cv-section">
        <h2>Extracurricular Activities</h2>
        <div className="cv-item">
          <div className="cv-date">10/2023 – Present</div>
          <div className="cv-content">
            <h3>Bachelor of Science (B.Sc.) Economics</h3>
            <p>Johannes Gutenberg University Mainz</p>
          </div>
        </div>
      </section>
    </main>
  );
}


