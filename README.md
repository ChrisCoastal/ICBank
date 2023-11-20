# IC Bank

Make splitting bills with friends easy!

## Built With

This project is built with React, Next.js, Typescipt, Tailwind, shadcn, and Firestore.

## Continued Development

The [cc/dev-continue](https://github.com/ChrisCoastal/ICBank/tree/cc/dev-continue) branch contains continued ideas, revisions, and features to the initial MVP for IC Bank located on the main branch.

Notable additions include:
- cleanup of components
  - abstracting into more reuseable/smaller blocks
  - improved readability
  - sorting imports
- cleanup/sorting of tailwind classes with prettier-plugin-tailwind
- update backend to Firestore and refactor of Context reducer
- fix of a flicker caused by a re-render of Contact Avatars
- merging all icons into a `BaseIcon` component
  - all possible svg paths for the icon are kept together in an object exported `as const`
  - the component accepts a `keyof paths` as an icon `prop`, giving nice intellisense in the editor
- styling refinements across the app

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
