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
      <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  
</div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
