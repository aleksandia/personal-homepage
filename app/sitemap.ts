import fs from 'fs'
import path from 'path'
import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/lib/config'

function getStaticPages(): string[] {
  const appDir = path.join(process.cwd(), 'app')
  const entries = fs.readdirSync(appDir, { withFileTypes: true })

  const ignored = new Set([
    'blog', 'components', 'public', 'og', 'rss', 'api',
    'favicon.ico', 'global.css', 'layout.tsx', 'not-found.tsx',
    'robots.ts', 'sitemap.ts', 'page.tsx',
  ])

  const routes = entries.flatMap((entry) => {
    const fullPath = path.join(appDir, entry.name)
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

  // Add homepage `/` and blog index `/blog` manually
  return ['/', '/blog', ...routes]
}

export default async function sitemap() {
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const staticPages = getStaticPages().map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...staticPages, ...blogPosts]
}
