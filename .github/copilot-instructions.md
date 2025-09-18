# Copilot Instructions for `typescriptlab`

## Project Overview
- This is a minimal TypeScript learning and experimentation workspace.
- All source code is located in the `src/` directory. Each file (e.g., `01-basics.ts`) is intended for focused TypeScript exercises or demos.
- There is no application framework, build pipeline, or runtime beyond TypeScript itself.

## Key Files and Structure
- `src/`: Place all TypeScript code here. Each file should be self-contained and named to reflect its topic or lesson.
- `tsconfig.json`: Configured for strict type checking, ES2016 target, CommonJS modules, and `esModuleInterop` enabled. Use this as the reference for language features and compatibility.
- `package.json`: Only essential dev dependencies (`typescript`, `ts-node`). No test runner or linter is configured by default.

## Developer Workflows
- **Run TypeScript files directly:**
  - Use `npx ts-node src/01-basics.ts` to execute a file. Replace the filename as needed.
  - No build step or output directory is used; code is run and checked in-place.
- **Type checking:**
  - Use `npx tsc` to check all files for type errors according to `tsconfig.json`.
- **Add new exercises:**
  - Create new files in `src/` with a clear, descriptive name (e.g., `02-functions.ts`).
  - Keep each file focused and avoid cross-file dependencies unless demonstrating module imports.

## Project Conventions
- Prefer explicit types and strict mode features (see `tsconfig.json`).
- Avoid project-wide side effects; each file should be runnable independently.
- No custom test, lint, or build scripts are present—add only if needed for a specific exercise.

## Examples
- To add a new lesson on generics, create `src/03-generics.ts` and run it with `npx ts-node src/03-generics.ts`.
- To check all code for type errors: `npx tsc`

## Integration Points
- No external APIs or services are integrated.
- No framework-specific conventions or patterns are used.

---

If you add new workflows, scripts, or conventions, update this file to keep AI agents productive and aligned with project practices.
