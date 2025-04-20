function getStaticPages() {
  const dir = path.join(process.cwd(), 'app')
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

  // Manually add homepage and /blog
  return ['/', '/blog', ...routes]
}
