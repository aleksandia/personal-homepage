import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me
      </h1>
      <p className="mb-4">
        {`I am Aleksandar a student at Johannes Gutenberg-University Mainz`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
