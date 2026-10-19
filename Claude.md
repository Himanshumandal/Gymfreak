# CLAUDE.md — EvoGym Repository Instructions

## 1. Project Overview

EvoGym is a fitness-focused web application built with React, TypeScript, and Vite. The project emphasizes responsive UI, reusable components, consistent styling, and maintainable frontend architecture.

When working in this repository, prioritize correctness, accessibility, simplicity, and consistency with the existing implementation.

## 2. Technology Stack

- **Frontend:** React
- **Language:** TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Linting:** ESLint
- **Package manager:** npm

Before introducing another library, check whether the required functionality can be implemented with the existing stack.

## 3. Initial Repository Inspection

Before making changes:

1. Read `README.md` and this file.
2. Inspect `package.json` and its available scripts.
3. Review the relevant components, hooks, assets, and styles.
4. Understand existing naming conventions and data flow.
5. Identify the smallest set of files needed for the task.
6. Check the existing Git diff to avoid overwriting unrelated user changes.

Do not assume a file exists merely because it appears in the README's example directory tree.

## 4. Project Architecture

Follow the actual repository structure. The application may contain:

- `src/components/` — reusable UI and feature components.
- `src/hooks/` — custom React hooks.
- `src/shared/` — shared layout or application elements.
- `src/assets/` — imported images, icons, and other static assets.
- `src/App.tsx` — main application component.
- `src/main.tsx` — React application entry point.
- `src/index.css` — global styles.

Inspect the existing implementation before deciding where new functionality belongs.

### Component design

- Prefer focused, reusable functional components.
- Keep components small enough to understand and maintain.
- Define explicit prop types with TypeScript.
- Avoid unnecessary prop drilling when a simpler local solution is sufficient.
- Separate reusable UI from complex business logic when it improves clarity.
- Avoid creating abstractions for one-off code without a clear benefit.

## 5. Coding Standards

### TypeScript

- Prefer explicit types for component props, function parameters, and return values where helpful.
- Avoid `any`; use proper interfaces, types, generics, or `unknown` when appropriate.
- Handle nullable and optional values safely.
- Do not suppress TypeScript errors simply to make a build pass.
- Preserve existing TypeScript and Vite configuration unless a change is necessary.

### React

- Follow the Rules of Hooks.
- Call hooks only at the top level of React function components or custom hooks.
- Use stable, meaningful keys when rendering lists.
- Keep state as local as possible.
- Avoid unnecessary effects and duplicated state.
- Clean up subscriptions, event listeners, and other side effects when necessary.
- Do not mutate props or React state directly.
- Preserve existing behavior when refactoring.

### Styling

- Prefer the existing Tailwind CSS utility conventions.
- Reuse existing design patterns, spacing, typography, and responsive breakpoints.
- Avoid adding global styles when component-level styling is sufficient.
- Avoid introducing a second styling framework.
- Test responsive layouts at mobile, tablet, and desktop widths.
- Use consistent visual states for hover, focus, disabled, and active elements.

### Naming

- Use PascalCase for React component names and component files where consistent with the existing repository.
- Use camelCase for variables, functions, and custom hooks.
- Use descriptive names instead of abbreviations.
- Follow the naming conventions of the surrounding code when modifying existing files.

## 6. Accessibility

- Use semantic HTML elements.
- Provide accessible names for buttons, links, and form controls.
- Associate form labels with their inputs.
- Include meaningful alternative text for informative images.
- Ensure keyboard accessibility and visible focus indicators.
- Do not communicate information through color alone.
- Respect reduced-motion preferences where practical when implementing animations.
- Use appropriate heading levels and maintain a logical page structure.

## 7. Forms and External Integrations

The project may use React Hook Form and FormSubmit for contact form functionality.

When modifying forms:

- Preserve existing validation and submission behavior unless the task requires a change.
- Display clear validation and error messages.
- Handle failed submissions gracefully.
- Prevent duplicate submissions where appropriate.
- Do not claim a submission succeeded before the integration confirms it.
- Verify the expected environment-variable names against the actual code.
- Do not introduce fake success messages or hardcode personal email addresses.

Remember that browser-side validation is not a replacement for server-side validation when a backend is introduced.

## 8. Security and Environment Variables

- Never commit `.env` files containing real credentials.
- Use `.env.example` for safe configuration templates.
- Treat all `VITE_*` variables as public client-side configuration.
- Never expose private API keys, database credentials, or server secrets in frontend code.
- Do not add unnecessary third-party scripts or dependencies.
- Avoid logging sensitive user-submitted data.
- Validate untrusted input appropriately.

## 9. Dependencies and Package Management

- Use npm and preserve `package-lock.json`.
- Avoid changing dependency versions unless necessary.
- Do not install a package when the existing stack already provides a reasonable solution.
- Explain the purpose of any new dependency.
- Do not remove dependencies without verifying that they are unused.
- Never modify lockfiles manually when npm can update them correctly.

## 10. Commands and Verification

Inspect `package.json` before relying on any script.

Common commands include:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

After making changes:

1. Run the relevant lint command.
2. Run the production build.
3. Resolve errors introduced by the changes.
4. Test affected interactions manually when practical.
5. Review the final diff for unrelated modifications.

If a check cannot be run, state that clearly rather than claiming it passed.

Do not add test commands or claim automated test coverage unless the repository has the corresponding test tooling configured.

## 11. Git and Change Management

- Keep changes focused on the user's request.
- Do not overwrite unrelated changes.
- Do not delete files without understanding their purpose.
- Avoid force pushes, destructive Git commands, and history rewrites unless explicitly requested.
- Do not commit or push changes unless asked.
- Write clear commit messages when commit guidance is requested.

## 12. Working Process

For each task:

1. Understand the requested outcome.
2. Inspect the relevant code.
3. Identify constraints and potential regressions.
4. Implement the smallest complete solution.
5. Verify the result using available checks.
6. Summarize changed files and behavior.
7. Mention remaining limitations or manual verification steps.

For large tasks, break the implementation into logical stages rather than rewriting the entire application at once.

Ask a clarification question only when a missing requirement materially affects the implementation. Otherwise, follow established project conventions and proceed.

## 13. Response Expectations

When reporting completed work:

- Summarize what changed.
- Identify the important files modified.
- Explain any necessary configuration changes.
- Report verification results honestly.
- Mention known limitations and follow-up work.
- Avoid claiming that untested functionality works.

## 14. Guiding Principle

**Build maintainable, accessible, secure, and responsive software while preserving the existing project's architecture and behavior.**

Prefer clear solutions over clever ones, verified changes over assumptions, and minimal necessary modifications over broad rewrites.
