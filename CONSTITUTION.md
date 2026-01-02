# NuKit Constitution

> Our guiding principles and non-negotiables for building together

**This document defines WHO WE ARE.** For where we're going, see [VISION.md](./VISION.md).

## Core Values

### 1. Clarity Over Cleverness
- Write code that's easy to understand, not code that shows off
- Prefer explicit over implicit
- Name things clearly—no abbreviations unless universally understood

### 2. Modularity & Separation of Concerns
- Each component/composable has a clear, single responsibility
- Shared logic goes in `composables/`, not duplicated
- UI components stay in `components/`, pages in `pages/`
- If it's used in multiple places, extract it

### 3. Test Everything That Matters
- Target: Meaningful coverage, quality over quantity
- Test behavior, not implementation details
- Mock external dependencies (Convex, auth providers)
- Fast tests enable fast iteration

### 4. Documentation Evolves With Code
- Update docs when you change architecture
- Keep VISION.md aligned with product evolution
- Keep PLAN.md current as our working memory
- Maintain GARDEN.md as our knowledge base
- CLAUDE.md is the deep reference, AGENTS.md is the quick guide

### 5. Conventional Commits = Clear History
- Use `feat:`, `fix:`, `docs:`, `refactor:`, etc.
- Enables automatic CHANGELOG generation
- Makes git history readable and meaningful

### 6. Consistency is Key
- Use project conventions everywhere (code, docs, error messages)
- Follow Vue/Nuxt conventions and NuxtUI patterns
- Maintain consistency across all touchpoints with users

## Non-Negotiables

### Code Quality
- **Always use `pnpm`** for package management (never npm/yarn)
- **Always use `rg`** for searching file contents (never grep)
- **Always use `fd`** for finding files (never find)
- **Lint with ESLint** before committing
- **Format with Prettier** before committing
- **Run tests** before pushing

### Architecture
- **No circular dependencies** between modules
- **Composables for shared logic** (prefix with `use`)
- **Components are single-file** (.vue with script setup)
- **TypeScript strict mode** enabled

### Git Workflow
- **Feature branches** for all work (`feature/`, `fix/`, `docs/`)
- **Conventional commits** for all commits
- **Never force push** to main or dev
- **Always quote filenames** in git commands (`git add "file.vue"`)
- **Never use `git push origin HEAD`** (always explicit branch names)

### Testing
- **Test files colocated** or in `tests/` mirroring source structure
- **Mock external services** (no real API calls in unit tests)
- **Use Vitest** for unit/component tests
- **Test edge cases** (errors, loading states, empty states)

### Documentation
- **Keep PLAN.md concise** (high-level only)
- **Keep .claude/ files under 400 lines** (split if needed)
- **Update CLAUDE.md** when architecture changes
- **No nested directories** in .claude/ (stay shallow)

## Strong Preferences

### Code Style
- **Prefer Composition API** with `<script setup>`
- **Prefer explicit types** over implicit (use TypeScript)
- **Prefer composition** over inheritance
- **Prefer small functions** over large ones (max ~50 lines)
- **Prefer early returns** over nested conditionals

### Naming Conventions
- **Components**: PascalCase (`UserProfile.vue`, `NavBar.vue`)
- **Composables**: camelCase with `use` prefix (`useAuth`, `useConvex`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`, `DEFAULT_TIMEOUT`)
- **Props/Events**: camelCase (`userName`, `onSubmit`)

### Error Handling
- **Use error boundaries** for component errors
- **Show user-friendly messages** with toast notifications
- **Log errors with context** (component name, user action, etc.)
- **Fail gracefully** with fallback UI

### Performance
- **Use lazy loading** for routes and heavy components
- **Avoid premature optimization** (profile first)
- **Leverage Convex reactivity** for real-time updates
- **Use NuxtUI components** (already optimized)

## Collaboration Principles

### Human ↔ Agent Partnership
- **We're a team**: Not human vs AI, but human + AI
- **Ask when uncertain**: Better to clarify than assume
- **Suggest improvements**: If you see a better way, speak up
- **Learn together**: Update GARDEN.md as we discover patterns

### Communication Style
- **Be clear and concise**: No fluff, get to the point
- **Use examples**: Show, don't just tell
- **Provide context**: Explain the "why" behind decisions

### Decision Making
- **Default to action**: When in doubt, try it and iterate
- **Bias toward simplicity**: Simple solutions beat complex ones
- **Iterate quickly**: Small changes, fast feedback, continuous improvement

## Living Document

This constitution evolves as we work together. When you notice:
- **New strong preferences** emerging → Add them here
- **Patterns becoming established** → Document in GARDEN.md
- **Better ways of working** → Update this document
- **Outdated rules** → Remove or revise them

**Last Updated**: 2025-01-02

---

## The Hierarchy

```
CONSTITUTION (who we are)
    ↓
VISION (where we're going)
    ↓
GARDEN (what we know)
    ↓
PLAN (what we're doing)
```

**This document anchors everything.** Our vision grows from our values. Our knowledge reflects our principles. Our plans execute our vision.
