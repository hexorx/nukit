import type { ButtonProps } from '@nuxt/ui'

export interface AuthProvider {
  label: string
  icon: string
  provider: 'github' | 'google'
}

export function useAuthProviders() {
  const config = useRuntimeConfig()
  const { signInWithSocial } = useAuth()

  const availableProviders = computed<AuthProvider[]>(() => {
    const providers: AuthProvider[] = []

    if (config.public.authGithubEnabled) {
      providers.push({
        label: 'GitHub',
        icon: 'i-simple-icons-github',
        provider: 'github'
      })
    }

    if (config.public.authGoogleEnabled) {
      providers.push({
        label: 'Google',
        icon: 'i-simple-icons-google',
        provider: 'google'
      })
    }

    return providers
  })

  const providerButtons = computed<ButtonProps[]>(() => {
    return availableProviders.value.map(p => ({
      label: p.label,
      icon: p.icon,
      onClick: async () => {
        await signInWithSocial(p.provider)
      }
    }))
  })

  const hasProviders = computed(() => availableProviders.value.length > 0)

  return {
    availableProviders,
    providerButtons,
    hasProviders
  }
}
