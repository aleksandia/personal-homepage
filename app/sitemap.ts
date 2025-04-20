// Declare baseUrl at top-level
export const baseUrl = 'https://urosevic.vercel.app'

// Only use Node.js modules inside the async sitemap function
export default async function sitemap() {
  const { getBlogPosts } = await import('app/blog/utils')
  const fs = await import('fs')
  const path = await import('path')

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

    return ['/', '/blog', ...routes]
  }

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
