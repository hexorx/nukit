<script setup lang="ts">
useHead({
  title: 'Terms of Service'
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <UPageCard class="w-full max-w-2xl">
      <div class="space-y-4">
        <h1 class="text-2xl font-bold">Terms of Service</h1>
        <p class="text-muted">
          This is a placeholder for your terms of service. Replace this content with your actual terms.
        </p>
        <UButton
          to="/"
          variant="outline"
        >
          Back to home
        </UButton>
      </div>
    </UPageCard>
  </div>
</template>
