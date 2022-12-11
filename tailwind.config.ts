import type { Config } from 'tailwindcss';
import headlessui from '@headlessui/tailwindcss';
import formkit from '@formkit/themes/tailwindcss';

const rootDir = process.cwd();

export default <Partial<Config>>{
  content: [`${rootDir}/nuxt.config.ts`, `${rootDir}/formkit.config.ts`],
  theme: {},
  plugins: [headlessui({}), formkit],
};
