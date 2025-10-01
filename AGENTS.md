# Repository Guidelines

## Project Structure & Module Organization
- Keep application code in `src/` using feature-first folders: `src/components/` for reusable UI, `src/sections/` for home-page blocks, and `src/lib/` for hooks/utilities.
- Static media (images, icons, downloadable assets) live in `public/`; global styles go in `src/styles/`.
- Place page-level copy or configuration in `content/` (Markdown/JSON) so the site can be updated without touching components.
- Mirror the source tree inside `tests/` (e.g., `src/components/Hero.tsx` -> `tests/components/Hero.test.tsx`) to keep tests discoverable.

## Build, Test, and Development Commands
- `npm install` - install dependencies after cloning or when `package.json` changes.
- `npm run dev` - start the local dev server with hot reload at `http://localhost:5173`.
- `npm run build` - produce the production bundle in `dist/`; run before deploying.
- `npm run preview` - serve the built bundle locally to validate production behavior.
- `npm run lint` - run ESLint/Prettier; fix issues before committing.

## Coding Style & Naming Conventions
- Use 2-space indentation, single quotes in TSX/JSX, and trailing commas where valid.
- Name components in PascalCase (`HeroBanner.tsx`), hooks with a `use` prefix, and utility modules in camelCase.
- Co-locate component-specific styles as `.module.scss`; keep shared variables in `src/styles/tokens.scss`.
- Run `npm run lint -- --fix` and `npm run format` (if defined) to apply Prettier formatting.

## Testing Guidelines
- Write unit and component tests with Vitest + Testing Library; integration tests belong in `tests/e2e/` using Playwright.
- Name test files `<Component>.test.tsx` or `<feature>.spec.ts`.
- Target >=80% coverage on new code; check with `npm run test -- --coverage`.
- Include DOM accessibility assertions (`getByRole`) for UI work.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `docs:`, etc.) with imperative subjects <=72 chars.
- Group related changes per commit; squash noisy WIP commits before opening a PR.
- PRs must clearly summarize changes, link issue numbers, and include screenshots or clips for UI adjustments.
- Add testing notes (commands run and results) and request review from the maintainer group before merging.

## Deployment & Environment
- Store local secrets in `.env.local`; commit sample keys to `.env.example`.
- The deployment pipeline consumes the `dist/` output-verify `npm run build` succeeds in CI before tagging a release.
- Document any new environment variables or third-party integrations in the PR description and in `README.md`.
