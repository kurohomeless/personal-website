// prettier.config.mjs

/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',

  // Great balance for docs + components
  printWidth: 100,

  tabWidth: 2,
  useTabs: false,

  // IMPORTANT for docs projects
  proseWrap: 'preserve',

  bracketSpacing: true,
  bracketSameLine: false,

  embeddedLanguageFormatting: 'auto',

  plugins: ['prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },

    {
      files: '*.mdx',
      options: {
        parser: 'mdx',
      },
    },
  ],
};
