# Nuxt 3 Starter

_A Nuxt 3 starter template with Tailwind CSS, Headless UI, Pinia, Vueuse, Formkit, Google Fonts, Eslint, Prettier, Husky, Commitlint, and more._

> **WARNING**:
> This Project using "pnpm" as package manager. (not npm or yarn)!!!
>
Checkout [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) for more information.


## Features
- [x]  TypeScript enabled
- [x] [Tailwind CSS v3 (@nuxtjs/tailwindcss)](https://tailwindcss.nuxt.dev/)
- [x] [Headless UI (nuxt-headlessui)](https://headlessui.dev/)
- [x] [State & Store Management (@pinia/nuxt)](https://pinia.vuejs.org/)
- [x] [Vue Composition Collection (@vueuse/nuxt)](https://vueuse.org/)
- [x] [Google Fonts (prelease)](https://google-fonts.nuxtjs.org/)
- [x] [Forms (@formkit/nuxt)](https://formkit.com/)
- [x] Icons: [Heroicons](https://heroicons.com/) and [Nuxt Icons](https://github.com/gitFoxCode/nuxt-icons)
- [x] Eslint & Prettier
- [x] Husky & Commitlint

### TODO

- [ ] [Testing (Nuxt Testing)](https://testing.nuxtjs.org/)
- [ ] [Authentication (sidebase/nuxt-auth)](https://github.com/sidebase/nuxt-auth)
- [ ] [Internationalization (Nuxt I18n)](https://v8.i18n.nuxtjs.org/)
- [ ] [Color Mode (Nuxt Color Mode)](https://color-mode.nuxtjs.org/)
- [ ] [Content (Nuxt Content)](https://content.nuxtjs.org/)


## Structure
```
.
├── .husky
│   ├── commit-msg
│   ├── post-merge
│   └── pre-commit
├── .vscode
│   ├── extensions.json
│   ├── settings.json
│   └── vue.code-snippets
│   ├── src
│   ├── assets
│   │   └── css
│   │   │   └── tailwind.css
│   │   └──  icons
│   ├── components
│   │   ├── atoms
│   │   ├── molecules
│   │   └── organisms
│   ├── composables
│   ├── layouts
│   │   └── default.vue
│   ├── modules
│   ├── pages
│   │   └── index.vue
│   ├── public
│   │   └── favicon.ico
│   ├── stores
│   └── app.vue
├── nuxt.config.ts
├── formkit.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── .env
├── .npmrc
├── .gitignore
├── .commitlintrc.yml
├── .eslintrc.yml
├── .prettierrc.yml
├── .stylelintrc.yml
├── .tool-versions
├── .editorconfig
├── README.md
└── LICENSE.md
</pre>
</details>
```

## Setup

Clone the repository:

```sh
npx nuxi init <project-name> -t gh:mukundshah/nuxt3-starter
```

Make sure to install the dependencies:

```sh
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```sh
pnpm dev
```

## Production

Build the application for production:

```sh
pnpm build
```

Locally preview production build:

```sh
pnpm run preview
```

Check out the [nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

[MIT License](./LICENSE.md)

## Atribution

This template was inspired by [viandwi24/nuxt3-awesome-starter](https://github.com/viandwi24/nuxt3-awesome-starter).
