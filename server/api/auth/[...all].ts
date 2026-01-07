export default defineEventHandler(async (event) => {
  const convexUrl = process.env.CONVEX_URL

  if (!convexUrl) {
    throw createError({
      statusCode: 503,
      message: 'Authentication not configured. Set CONVEX_URL environment variable.'
    })
  }

  const path = event.context.params?.all || ''

  let targetUrl: string
  if (convexUrl.includes('.convex.cloud')) {
    const convexSiteUrl = convexUrl.replace('.cloud', '.site')
    targetUrl = `${convexSiteUrl}/api/auth/${path}`
  } else {
    targetUrl = `${convexUrl}/api/auth/${path}`
  }

  return proxyRequest(event, targetUrl)
})
