import { BlogPosts } from 'app/components/posts';
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        {/* Add all your meta tags here */}
        <meta
          name="google-site-verification"
          content="Qw2MRfXNWiiOKsUL4-q9z7cm17nXRU6LCgQCe9ZDrjE"
        />
        <title>Aleksandar Urošević - Homepage</title>
        <meta name="description" content="Personal homepage of Aleksandar Urosevic" />
        <meta name="author" content="Aleksandar Urosevic" />
        <link rel="canonical" href="https://urosevic.vercel.app/" />
        <meta http-equiv="content-language" content="en" />
        <meta name="robots" content="index, follow" />
      </Head>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Aleksandar Urošević
        </h1>
        <p className="mb-4">{`Welcome to my website!`}</p>
        <ul className="!list-disc !pl-6">
          <li>
            Undergraduate student studying Economics at Johannes Gutenberg University Mainz
          </li>
          <li>Student Assistant sysadmin at the Chair of Prof. Dr. Franz Rothlauf (Information Systems and Business Administration), Johannes Gutenberg University Mainz </li>
          <li>WordPress migration and web projects at Johannes Gutenberg University Mainz</li>
          <li>
            <a href="https://urosevic.vercel.app/docs/cv.pdf">
              CV
            </a>
          </li>
        </ul>
        <br />
        <h2>Latest blog posts</h2>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </>
  );
}
