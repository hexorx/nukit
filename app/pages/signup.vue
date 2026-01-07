<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

definePageMeta({
  middleware: 'guest'
})

const { signUpWithEmail } = useAuth()
const { providerButtons } = useAuthProviders()
const toast = useToast()

const error = ref<string | null>(null)
const loading = ref(false)

const fields: AuthFormField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Your name',
    required: true
  },
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
    placeholder: 'Create a password',
    required: true
  }
]

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  error.value = null
  loading.value = true

  try {
    const result = await signUpWithEmail(event.data.email, event.data.password, event.data.name)
    if (result.error) {
      error.value = result.error.message || 'Failed to create account'
    } else {
      toast.add({ title: 'Account created!', description: 'Welcome to NuKit.', color: 'success' })
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
        :submit="{ label: 'Sign up' }"
        title="Create account"
        icon="i-lucide-user-plus"
        @submit="onSubmit"
      >
        <template #description>
          Already have an account? <ULink
            to="/login"
            class="text-primary font-medium"
          >Sign in</ULink>
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
          By signing up, you agree to our <ULink
            to="/terms"
            class="text-primary font-medium"
          >Terms of Service</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
