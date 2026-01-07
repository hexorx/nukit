export default defineEventHandler(async (event) => {
  const convexUrl = process.env.CONVEX_URL

  if (!convexUrl) {
    throw createError({
      statusCode: 503,
      message: 'Authentication not configured. Set CONVEX_URL environment variable.'
    })
  }

  const convexSiteUrl = convexUrl.replace('.cloud', '.site')
  const path = event.context.params?.all || ''
  const targetUrl = `${convexSiteUrl}/api/auth/${path}`

  return proxyRequest(event, targetUrl)
})
