import fs from 'fs'
import path from 'path'
import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://urosevic.vercel.app'

function getStaticPages() {
  const dir = path.join(process.cwd(), 'app') // entry point of your app directory
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  const ignored = new Set(['blog', 'components', 'public', 'og', 'rss', 'api'])

  const routes = entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    const pageFile = path.join(fullPath, 'page.tsx')

    if (
      entry.isDirectory() &&
      !ignored.has(entry.name) &&
      fs.existsSync(pageFile)
    ) {
      return `/${entry.name}`
    }

    return []
  })

  // Add the homepage `/` manually
  return ['/', ...routes]
}

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const staticPages = getStaticPages().map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...staticPages, ...blogs]
}
