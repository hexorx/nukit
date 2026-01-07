<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

definePageMeta({
  middleware: 'guest'
})

const { signInWithEmail } = useAuth()
const { providerButtons } = useAuthProviders()
const toast = useToast()

const error = ref<string | null>(null)
const loading = ref(false)

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
    required: true
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true
  }
]

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  error.value = null
  loading.value = true

  try {
    const result = await signInWithEmail(event.data.email, event.data.password)
    if (result.error) {
      error.value = result.error.message || 'Failed to sign in'
    } else {
      toast.add({ title: 'Welcome back!', color: 'success' })
      await navigateTo('/')
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providerButtons"
        :loading="loading"
        title="Welcome back"
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #description>
          Don't have an account? <ULink
            to="/signup"
            class="text-primary font-medium"
          >Sign up</ULink>
        </template>
        <template #password-hint>
          <ULink
            to="/forgot-password"
            class="text-primary font-medium"
            tabindex="-1"
          >Forgot password?</ULink>
        </template>
        <template #validation>
          <UAlert
            v-if="error"
            color="error"
            icon="i-lucide-alert-circle"
            :title="error"
          />
        </template>
        <template #footer>
          By signing in, you agree to our <ULink
            to="/terms"
            class="text-primary font-medium"
          >Terms of Service</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
