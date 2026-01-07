import { createAuthClient } from 'better-auth/vue'

const authClient = createAuthClient({
  baseURL: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
})

export function useAuth() {
  const config = useRuntimeConfig()
  const session = authClient.useSession()

  const isEnabled = computed(() => config.public.authEnabled)
  const isAuthenticated = computed(() => !!session.value?.data?.user)
  const user = computed(() => session.value?.data?.user ?? null)
  const isPending = computed(() => session.value?.isPending ?? false)

  async function signInWithEmail(email: string, password: string) {
    return authClient.signIn.email({ email, password })
  }

  async function signUpWithEmail(email: string, password: string, name: string) {
    return authClient.signUp.email({ email, password, name })
  }

  async function signInWithSocial(provider: 'github' | 'google', callbackURL = '/') {
    return authClient.signIn.social({ provider, callbackURL })
  }

  async function signOut() {
    return authClient.signOut()
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
