export default defineEventHandler(async (event) => {
  const convexUrl = process.env.CONVEX_URL
  const convexSiteUrl = process.env.CONVEX_SITE_URL

  if (!convexUrl && !convexSiteUrl) {
    throw createError({
      statusCode: 503,
      message: 'Authentication not configured. Set CONVEX_URL or CONVEX_SITE_URL environment variable.'
    })
  }

  const path = event.context.params?.all || ''

  let targetUrl: string
  if (convexSiteUrl) {
    targetUrl = `${convexSiteUrl}/api/auth/${path}`
  } else if (convexUrl!.includes('.convex.cloud')) {
    targetUrl = `${convexUrl!.replace('.cloud', '.site')}/api/auth/${path}`
  } else {
    targetUrl = `${convexUrl}/api/auth/${path}`
  }

  return proxyRequest(event, targetUrl)
})
