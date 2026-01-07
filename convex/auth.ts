import { betterAuth } from 'better-auth'
import type { BetterAuthOptions } from 'better-auth'
import { createClient, type GenericCtx } from '@convex-dev/better-auth'
import { components } from './_generated/api'
import type { DataModel } from './_generated/dataModel'

export const authComponent = createClient<DataModel>(components.betterAuth)

function buildSocialProviders(): BetterAuthOptions['socialProviders'] {
  const providers: BetterAuthOptions['socialProviders'] = {}

  if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
    providers.github = {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }
  }

  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    providers.google = {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  }

  return Object.keys(providers).length > 0 ? providers : undefined
}

export function createAuth(ctx: GenericCtx<DataModel>) {
  const socialProviders = buildSocialProviders()

  return betterAuth({
    baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
    secret: process.env.BETTER_AUTH_SECRET,
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true
    },
    ...(socialProviders && { socialProviders })
  })
}

export type Auth = ReturnType<typeof createAuth>
