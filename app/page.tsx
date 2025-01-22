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
        <meta name="description" content="Welcome to the personal homepage of Aleksandar Urošević." />
      </Head>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Aleksandar Urošević
        </h1>
        <p className="mb-4">{`Welcome to my website!`}</p>
        <ul className="!list-disc !pl-6">
          <li>
            Undergraduate studying Economics at Johannes Gutenberg University
            Mainz
          </li>
          <li>Working as a Sysadmin</li>
          <li>Participating in a club that keeps old computers running</li>
          <li>
            <a href="https://raw.githubusercontent.com/aleksandia/personal-homepage/5bd6311d6b82566d3bba086a67cec16cf33c7ed8/CV2.pdf">
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
