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
    <main className="cv-container">
      <section className="cv-header">
        <h1>Aleksandar Urosevic</h1>
      </section>

      <section className="cv-section">
        <h2>Work Experience</h2>

        <div className="cv-item">
          <div className="cv-date">05/2024 – Present</div>
          <div className="cv-content">
            <h3>Student Assistant (IT Support)</h3>
            <p>Johannes Gutenberg University</p>
            <ul>
              <li>Helpdesk support for employees, solving IT-related problems</li>
              <li>Assisted in configuring workstations and troubleshooting issues</li>
            </ul>
          </div>
        </div>

        <div className="cv-item">
          <div className="cv-date">2022 – 2023</div>
          <div className="cv-content">
            <h3>Private Tutoring</h3>
            <p>Mathematics & Economics</p>
            <ul>
              <li>Tutored high school students in math and basic economics</li>
              <li>Prepared tailored exercises and explained key concepts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>

        <div className="cv-item">
          <div className="cv-date">10/2023 – Present</div>
          <div className="cv-content">
            <h3>B.Sc. Economics</h3>
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
        <ul className="cv-skill-list">
          <li>Excel & Data Analysis</li>
          <li>Python (basic)</li>
          <li>IT Support & Troubleshooting</li>
          <li>Economic Modelling (beginner)</li>
          <li>English (C1)</li>
        </ul>
      </section>
    </main>
  );
}
