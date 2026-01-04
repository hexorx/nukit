# Agent Instructions

This document provides guidance for AI agents working in this Nuxt 4 + Nuxt UI codebase.

## Quick Start

```bash
pnpm install          # Install dependencies (pnpm 10.26.1 required)
pnpm dev              # Development server at http://localhost:3000
pnpm build            # Production build
pnpm lint             # Run ESLint
pnpm typecheck        # TypeScript type checking
```

## Issue Tracking (bd / beads)

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

Run `bd onboard` to get started.

---

## Build & Quality Commands

### Linting
```bash
pnpm lint             # Lint entire project
pnpm lint --fix       # Auto-fix lint errors
```

### Type Checking
```bash
pnpm typecheck        # Run vue-tsc type checking
```

### Testing
```bash
# @nuxt/test-utils is installed but tests not yet configured
# When tests exist:
pnpm test             # Run all tests
pnpm test path/to/file.test.ts  # Run single test file
```

### Build
```bash
pnpm build            # Production build
pnpm preview          # Preview production build locally
```

---

## Project Structure

```
app/
  components/       # Vue components (PascalCase)
  composables/      # Shared logic (useXxx.ts)
  pages/            # File-based routing
  assets/css/       # Tailwind styles
  app.vue           # Root component
  app.config.ts     # App configuration (UI theme)
nuxt.config.ts      # Nuxt configuration
```

---

## Code Style Guidelines

### Vue Components
- **Always** use Composition API with `<script setup>`
- **Single-file components** (.vue files)
- Template-only components are valid (no script needed for presentational components)

### TypeScript
- **Strict mode** enabled
- Prefer explicit types over implicit
- Use TypeScript generics for props: `defineProps<{ ... }>()`

### ESLint Configuration
- **No trailing commas** (`commaDangle: 'never'`)
- **1TBS brace style** (opening brace on same line)
- Auto-imports enabled (no need to import Vue/Nuxt APIs)

### Formatting
- **2 space** indentation, **LF** line endings, **UTF-8** encoding
- Final newline required

### Imports
- Nuxt auto-imports Vue/Nuxt APIs - no manual imports needed
- Components auto-imported from `app/components/`
- Composables auto-imported from `app/composables/`

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `UserProfile.vue` |
| Composables | camelCase + use | `useAuth.ts` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRIES` |
| Props/Events | camelCase | `userName`, `onSubmit` |
| CSS classes | kebab-case | `.user-profile` |

### Error Handling
- Use error boundaries for component errors
- Show user-friendly messages with toast notifications
- Log errors with context (component name, action)
- Fail gracefully with fallback UI

---

## Non-Negotiables

### Tools
- **pnpm only** - Never use npm or yarn
- **rg for search** - Never use grep
- **fd for files** - Never use find

### Architecture
- No circular dependencies
- Composables for shared logic (prefix with `use`)
- Components are single-file (.vue with script setup)

### Git Workflow
- **Feature branches**: `feature/`, `fix/`, `docs/`
- **Conventional commits**: `feat:`, `fix:`, `docs:`, `refactor:`
- Always quote filenames: `git add "file.vue"`
- Never force push to main

---

## Landing the Plane (Session Completion)

**When ending a work session**, complete ALL steps. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues with `bd`
2. **Run quality gates** (if code changed):
   ```bash
   pnpm lint
   pnpm typecheck
   pnpm build
   ```
3. **Update issue status** - Close finished work with `bd close <id>`
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Verify** - All changes committed AND pushed
6. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- If push fails, resolve and retry until it succeeds

---

## Related Documentation

| File | Purpose |
|------|---------|
| CONSTITUTION.md | Core values, non-negotiables |
| VISION.md | Product direction and goals |
| PLAN.md | Current roadmap and phases |
| GARDEN.md | Knowledge base and patterns |
| CLAUDE.md | Detailed development reference |
