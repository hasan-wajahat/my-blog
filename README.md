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

- [Next.js](https://nextjs.org/) as the meta framework.
- [TypeScript](https://www.typescriptlang.org/) as the main language.
- [Tailwind CSS](https://tailwindcss.com/) as the CSS framework.
- [pnpm](https://pnpm.io/) as the package manager.
- [ESLint](https://eslint.org/) as the linter.
- [Prettier](https://prettier.io/) as the code formatter.
- [@next/mdx](https://nextjs.org/docs/pages/building-your-application/configuring/mdx#nextmdx) as the markdown parser.

## Deployment

Project is deployed automatically on [Vercel](https://vercel.com/). Just push to the `main` branch and it will be deployed.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
