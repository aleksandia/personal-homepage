import { BlogPosts } from 'app/components/posts';
import Head from 'next/head';
import Image from 'next/image';

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
              <h1 className="text-4xl font-bold mb-6">Home</h1>
<div className="flex justify-center my-6">
  <Image
    src="/urosevic_color.JPG"
    alt="Aleksandar Urošević"
    width={350}
    height={350}
    className="rounded-xl shadow-lg"
  />
</div>
        <ul className="!list-disc !pl-6">
          <li>
            Undergraduate student studying Economics at Johannes Gutenberg University Mainz
          </li>
          <li>Systems Administrator (Student Assistant) at <a href="https://en.wi.bwl.uni-mainz.de/" target="_blank">the Chair of Prof. Dr. Franz Rothlauf (Information Systems and Business Administration)</a></li>
          <li>Webmaster at <a href="https://sq.jura.uni-mainz.de/" target="_blank">Schlüsselqualifikationen Jura (SQ Mainz e.V.)</a></li>
           <li>Webmaster at <a href="https://gsb.uni-mainz.de/" target="_blank">Gutenberg School of Business Mainz</a></li>
        </ul>
        <br />
        <h2>Blog posts</h2>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </>
  );
}
