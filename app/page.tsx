import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <meta name="google-site-verification" content="Qw2MRfXNWiiOKsUL4-q9z7cm17nXRU6LCgQCe9ZDrjE" />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Aleksandar Urošević
      </h1>
      <p className="mb-4">
        {`Welcome to my website!`}
      </p>
      <ul className="!list-disc !pl-6">
  <li>Undergraduate studying Economics at Johannes Gutenberg University Mainz</li>
  <li>Working as Sysadmin </li>
  <li>CV</li>
</ul>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
