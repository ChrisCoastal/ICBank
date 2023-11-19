# IC Bank

Make splitting bills with friends easy!

## Continued Development

This branch adds continued ideas, revisions, and features to the initial MVP for IC Bank that is located on the main branch.
Notable additions include:

- cleanup of components
  - abstracting into more reuseable blocks
  - sorting imports
- cleanup/sorting of tailwind classes with prettier-plugin-tailwind
- merging all icons into a `BaseIcon` component
  - all possible svg paths for the icon are kept together in an object exported `as const`
  - the component accepts a `keyof paths` as an icon `prop`, giving nice intellisense in the editor
- styling refinements across the app

## Built With

This project was built with React, Next.js, Typescipt, Tailwind, and Shadcn component library.

## Getting Started

Install dependencies with

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the app.
