// app/contact/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Aleksandar Urosevic",
  description: "Personal homepage of Aleksandar Urosevic",
  authors: [{ name: "Aleksandar Urosevic" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://urosevic.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Reaching out to me</h1>
      <p>I'd love to hear from you! You can send me an e-mail at:</p>
      <a
        href="mailto:urosevic@students.uni-mainz.de"
        className="text-blue-500 underline"
      >
        urosevic@students.uni-mainz.de
      </a>
    </div>
  );
}
