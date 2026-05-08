# My Blog and CV App

[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=my-blog)](https://vercel.com/hasan-wajahat/my-blog)

This project is a combination of a blog and a CV application. It's built with [Next.js](https://nextjs.org/), [React](https://reactjs.org/), and [TypeScript](https://www.typescriptlang.org/).

## Features

- **articles**: Where I share my frontend knowledge with the world.
- **about-me**: Where I share my CV and my contact information.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

You can also run the production server:

```bash
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The main parts of the project are:

app/: Contains the pages of the application.

app/components/: Contains reusable components.

app/articles/: Contains individual articles.

app/about-me/: Contains the about me page.

## Technologies

- [Next.js](https://nextjs.org/) 16 (App Router) as the meta framework.
- [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack) as the bundler (dev + production builds).
- [React](https://react.dev/) 19 for the UI layer.
- [TypeScript](https://www.typescriptlang.org/) 6 as the main language.
- [Tailwind CSS](https://tailwindcss.com/) 4 as the CSS framework.
- [pnpm](https://pnpm.io/) as the package manager.
- [oxlint](https://oxc.rs/docs/guide/usage/linter) as the linter (Rust-based, replaces ESLint).
- [oxfmt](https://oxc.rs/docs/guide/usage/formatter) as the code formatter (Rust-based, replaces Prettier).
- [@next/mdx](https://nextjs.org/docs/pages/building-your-application/configuring/mdx#nextmdx) as the markdown parser.

## Scripts

- `pnpm dev` — start dev server (Turbopack)
- `pnpm build` — production build (Turbopack)
- `pnpm start` — run production server
- `pnpm lint` — run oxlint
- `pnpm format` — format files with oxfmt
- `pnpm format:check` — check formatting without writing
- `pnpm typecheck` — run TypeScript without emit

## Deployment

Project is deployed automatically on [Vercel](https://vercel.com/). Just push to the `main` branch and it will be deployed.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
