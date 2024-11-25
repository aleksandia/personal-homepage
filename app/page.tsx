import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Aleksandar Urošević
      </h1>
      <p className="mb-4">
        {`Welcome to my website!`}
      </p>
      <ul className="!list-disc !pl-6">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
