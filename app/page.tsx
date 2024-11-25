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
      <div className="my-8">
      - First item
- Second item
- Third item
- Fourth item
</div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
