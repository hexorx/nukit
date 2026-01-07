import { createAuthClient } from 'better-auth/vue'

let authClient: ReturnType<typeof createAuthClient> | null = null

function getAuthClient() {
  if (!authClient && import.meta.client) {
    authClient = createAuthClient({
      baseURL: window.location.origin
    })
  }
  return authClient
}

export function useAuth() {
  const config = useRuntimeConfig()
  const client = getAuthClient()

  const session = client?.useSession() ?? ref({ data: null, isPending: true })

  const isEnabled = computed(() => config.public.authEnabled)
  const isAuthenticated = computed(() => !!session.value?.data?.user)
  const user = computed(() => session.value?.data?.user ?? null)
  const isPending = computed(() => session.value?.isPending ?? true)

  async function signInWithEmail(email: string, password: string) {
    if (!client) throw new Error('Auth client not available')
    return client.signIn.email({ email, password })
  }

  async function signUpWithEmail(email: string, password: string, name: string) {
    if (!client) throw new Error('Auth client not available')
    return client.signUp.email({ email, password, name })
  }

  async function signInWithSocial(provider: 'github' | 'google', callbackURL = '/') {
    if (!client) throw new Error('Auth client not available')
    return client.signIn.social({ provider, callbackURL })
  }

  async function signOut() {
    if (!client) throw new Error('Auth client not available')
    return client.signOut()
  }

  return {
    session,
    isEnabled,
    isAuthenticated,
    user,
    isPending,
    signInWithEmail,
    signUpWithEmail,
    signInWithSocial,
    signOut
  }
}
