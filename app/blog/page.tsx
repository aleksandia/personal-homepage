import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog entries',
  description: 'Blog of Aleksandar Urošević',
}

export default function Page() {
  return (
    <section>
       <h1 className="text-4xl font-bold mb-6">Blog | Aleksandar Urošević</h1>
      <BlogPosts />
    </section>
  )
}
