# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## File structure

```
.
├── .gitignore
├── .vscode
│   └── settings.json
├── assets
│   └── css
│   │   └── tailwind.css
│   └──  icons
├── components
│   ├── base
│   ├── elements
│   └── sections
├── layouts
│   └── default.vue
├── pages
│   └── index.vue
├── public
│   └── favicon.ico
├── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
├── stylelint.config.js
├── tsconfig.json
├── package.json
├── yarn.lock
├── .eslint.js
├── .prettierignore
├── .prettierrc
├── .tool-versions
├── .editorconfig
└── README.md
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm run build
```

Locally preview production build:

```bash
# yarn
yarn preview

# npm
npm run preview

# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
