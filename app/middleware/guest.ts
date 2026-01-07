export default defineNuxtRouteMiddleware(async () => {
  const { isAuthenticated, isPending } = useAuth()

  if (isPending.value) {
    return
  }

  if (isAuthenticated.value) {
    return navigateTo('/')
  }
})
