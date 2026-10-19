# EvoGym — Fitness & Wellness Platform

A modern, responsive fitness website built with React, TypeScript, and Tailwind CSS. EvoGym provides an engaging interface for exploring fitness programs, discovering training options, and connecting with a fitness community.

## Overview

EvoGym is a fitness-focused web application designed to deliver a clean user experience across desktop, tablet, and mobile devices. It combines reusable React components, responsive layouts, and smooth animations to create an engaging fitness website.

## Features

- **Responsive design** — layouts optimized for desktop, tablet, and mobile.
- **Modern UI** — clean styling with Tailwind CSS.
- **Reusable components** — modular React components for maintainability.
- **Smooth animations** — interactive transitions using Framer Motion.
- **Type safety** — TypeScript for safer and more maintainable code.
- **Form handling** — React Hook Form for managing user input.
- **Client-side navigation and interactions** — dynamic user interface behavior.
- **Contact form integration** — FormSubmit integration, configured through an environment variable.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI |
| TypeScript | Static type checking |
| Vite | Development server and build tooling |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and transitions |
| React Hook Form | Form state management |
| ESLint | Code quality and linting |
| npm | Package management |

## Project Structure

```text
evogym/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and other imported assets
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── shared/             # Shared application components
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── .env.example             # Example environment configuration
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── README.md
└── CLAUDE.md
```

*The directory tree above describes the intended high-level organization. Actual files and directories may differ as the project evolves.*

## Prerequisites

Before getting started, install:

- [Node.js](https://nodejs.org/) — use a version compatible with the project's Vite dependencies.
- npm — included with Node.js.
- Git — recommended for version control.

Verify your installation:

```bash
node --version
npm --version
git --version
```

## Installation

**1. Clone the repository**

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

Replace the placeholders with your actual repository URL and directory name.

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a local `.env` file in the project root:

```env
VITE_EMAIL=your-email@example.com
```

Use the actual variable name expected by the application. Check `.env.example` and the form implementation before changing configuration.

> **Security:** Vite exposes variables prefixed with `VITE_` to client-side code. Never store API secrets, private credentials, or sensitive tokens in these variables.

**4. Start the development server**

```bash
npm run dev
```

Open the local URL printed in your terminal, usually `http://localhost:5173`.

## Available Commands

Run the scripts defined in `package.json`.

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates a production build |
| `npm run lint` | Runs ESLint checks |
| `npm run preview` | Previews the production build locally |

If a command is unavailable, check the scripts section of `package.json`.

## Development Guidelines

- Use functional React components and hooks.
- Prefer small, reusable components over large monolithic components.
- Use TypeScript types and interfaces for component props and structured data.
- Keep styling consistent with the existing Tailwind CSS conventions.
- Use semantic HTML and accessible form controls.
- Handle loading, validation, and error states where applicable.
- Avoid unnecessary dependencies and duplicated logic.
- Keep environment-specific configuration out of committed secrets.
- Run lint and build checks before submitting changes.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Vite generates the production output in the `dist/` directory by default.

Preview the generated build:

```bash
npm run preview
```

The preview command is intended for local verification, not as a production hosting server.

## Troubleshooting

**Dependencies fail to install**

```bash
npm install
```

Check your Node.js version and review the error output. Use the project's lockfile to maintain consistent dependency versions.

**The development server does not start**

```bash
npm run dev
```

Check whether the configured port is already in use and review the terminal output.

**Environment variables are unavailable**

- Confirm that `.env` is located in the project root.
- Verify the variable name.
- Restart the Vite development server after modifying environment variables.
- Remember that only variables prefixed with `VITE_` are exposed to client-side code.

**The production build fails**

```bash
npm run lint
npm run build
```

Review TypeScript, import, dependency, and lint errors before deploying.

## Testing

Automated test coverage depends on the test tooling configured in the repository. Until a test framework is configured, verify the application manually and run the available lint and build commands.

Recommended checks:

- Responsive behavior at different screen sizes.
- Navigation and interactive elements.
- Contact form validation and submission behavior.
- Browser console errors.
- Production build success.

## Contributing

Contributions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make focused changes that follow the existing conventions.
4. Run the available lint and build checks.
5. Submit a pull request with a clear description of the changes.

## License

No license has been specified in this repository documentation. Add a `LICENSE` file once the project's licensing terms have been decided.

## Author

**Project:** EvoGym — Fitness & Wellness Website

For questions, improvements, or collaboration, open an issue in the repository.

---

Built with React, TypeScript, and Vite.
