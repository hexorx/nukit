<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

definePageMeta({
  middleware: 'guest'
})

const toast = useToast()

const submitted = ref(false)
const loading = ref(false)

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
    required: true
  }
]

const schema = z.object({
  email: z.string().email('Invalid email address')
})

type Schema = z.output<typeof schema>

async function onSubmit(_event: FormSubmitEvent<Schema>) {
  loading.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitted.value = true
    toast.add({ title: 'Check your email', description: 'If an account exists, you will receive a password reset link.', color: 'success' })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <UPageCard class="w-full max-w-md">
      <template v-if="submitted">
        <div class="text-center space-y-4">
          <UIcon
            name="i-lucide-mail-check"
            class="w-12 h-12 mx-auto text-primary"
          />
          <h2 class="text-xl font-semibold">
            Check your email
          </h2>
          <p class="text-muted">
            If an account exists with that email, you'll receive a password reset link shortly.
          </p>
          <UButton
            to="/login"
            variant="outline"
          >
            Back to login
          </UButton>
        </div>
      </template>
      <template v-else>
        <UAuthForm
          :schema="schema"
          :fields="fields"
          :loading="loading"
          :submit="{ label: 'Send reset link' }"
          title="Reset password"
          icon="i-lucide-key"
          @submit="onSubmit"
        >
          <template #description>
            Enter your email and we'll send you a link to reset your password.
          </template>
          <template #footer>
            Remember your password? <ULink
              to="/login"
              class="text-primary font-medium"
            >Sign in</ULink>
          </template>
        </UAuthForm>
      </template>
    </UPageCard>
  </div>
</template>
