# React + Vite

Vite-powered React starter configured for GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

Run `npm run build` to create the production build in `dist/`.

## Testing with Jest

Run tests in watch mode during development or once for validation:

```sh
npm test
npm run test:run
```

Jest runs in the `jsdom` browser-like environment. Babel transforms JavaScript, JSX, TypeScript, and TSX; CSS and image imports are mapped to a test stub. Jest configuration is in `jest.config.cjs` and `babel.config.cjs`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository settings, open **Pages** and set the build and deployment source to **GitHub Actions**.
3. Each push to `main` builds and deploys the site. Pull requests run the build without deploying.

The Vite base path is derived from the repository name in GitHub Actions, so repository Pages URLs load assets from the correct path.
