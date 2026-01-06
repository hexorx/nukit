# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
pnpm install      # Install dependencies (pnpm 10.26.1 required)
pnpm dev          # Development server at http://localhost:3000
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
```

---

## Issue Tracking

This project uses **bd (beads)** for issue tracking.
Run `bd prime` for workflow context, or install hooks (`bd hooks install`) for auto-injection.

**Quick reference:**

- `bd ready` - Find unblocked work
- `bd create "Title" --type task --priority 2` - Create issue
- `bd close <id>` - Complete work
- `bd sync` - Sync with git (run at session end)

For full workflow details: `bd prime`

---

## Architecture

NuKit is a production-ready starter template for AI-powered frontend apps built on:

- **Nuxt 4** - Vue meta-framework with auto-imports, file-based routing, SSR
- **NuxtUI 4** - Component library with Tailwind CSS
- **Convex** - Realtime backend (planned)
- **Better Auth** - Authentication (planned)

### Key Modules

- `@nuxt/ui` - Component library and theming
- `@nuxt/content` - Content management
- `@nuxt/image` - Image optimization
- `@nuxt/test-utils` - Testing with Vitest

### Directory Structure

- `app/components/` - Vue components (PascalCase)
- `app/composables/` - Shared logic (`use` prefix)
- `app/pages/` - File-based routing
- `app/assets/css/` - Tailwind styles

---

## Project Documentation

Read these files for context:

- **CONSTITUTION.md** - Core values, coding standards, non-negotiables
- **VISION.md** - Product direction and goals
- **GARDEN.md** - Knowledge base and external docs
- **AGENTS.md** - Session workflow and issue tracking

---

## Non-Negotiables

### Tools

- **pnpm only** - Never use npm or yarn
- **rg for search** - Never use grep
- **fd for files** - Never use find

### Code Style

- Composition API with `<script setup>`
- TypeScript strict mode
- ESLint: no trailing commas, 1tbs brace style
- Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`

### Git Workflow

- Feature branches (`feature/`, `fix/`, `docs/`)
- Always push before ending session
- Use `bd` (beads) for issue tracking: `bd ready`, `bd show <id>`, `bd close <id>`

---

## Naming Conventions

| Type        | Convention       | Example           |
| ----------- | ---------------- | ----------------- |
| Components  | PascalCase       | `UserProfile.vue` |
| Composables | camelCase + use  | `useAuth.ts`      |
| Constants   | UPPER_SNAKE_CASE | `MAX_RETRIES`     |
