import type { Config } from 'tailwindcss';
import headlessui from '@headlessui/tailwindcss';
import formkit from '@formkit/themes/tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'app.vue',
  ],
  theme: {},
  plugins: [headlessui({}), formkit],
};
