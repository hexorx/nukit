export function useTasks() {
  const tasks = ref<Array<{ _id: string, text: string, completed: boolean }>>([])
  const isPending = ref(false)
  const error = ref<Error | null>(null)

  const createTask = async (_args: { text: string }) => {
    console.warn('Run `pnpm dev:convex` to enable Convex')
  }

  const toggleTask = async (_args: { id: string }) => {
    console.warn('Run `pnpm dev:convex` to enable Convex')
  }

  const removeTask = async (_args: { id: string }) => {
    console.warn('Run `pnpm dev:convex` to enable Convex')
  }

  return {
    tasks,
    isPending,
    error,
    createTask,
    toggleTask,
    removeTask
  }
}
