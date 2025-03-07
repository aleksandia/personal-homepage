import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog entries',
  description: 'Blog of Aleksandar Urošević',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog | Aleksandar Urošević</h1>
      <BlogPosts />
    </section>
  )
}
