const path = require('path');

module.exports = {
  plugins: ['prettier', 'import', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
  },
  rules: {
    curly: [2, 'all'],
    'consistent-return': 2,
    'no-warning-comments': [2, { terms: ['FIXME'], location: 'anywhere' }],

    '@typescript-eslint/no-unused-vars': [2, { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/consistent-type-imports': [2, { prefer: 'type-imports', fixStyle: 'separate-type-imports' }],
    '@typescript-eslint/consistent-type-definitions': 0,

    'jsx-a11y/html-has-lang': 0,

    'tailwindcss/no-custom-classname': [
      2,
      {
        config: path.resolve(__dirname, 'tailwind.config.ts'),
        callees: ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'cn'],
        whitelist: ['dark'],
      },
    ],

    'react/jsx-sort-props': [
      2,
      {
        ignoreCase: true,
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
      },
    ],

    'import/first': 2,
    'import/no-namespace': 2,
    'import/no-self-import': 2,
    'import/no-dynamic-require': 2,
    'import/newline-after-import': 2,
    'import/order': [
      2,
      {
        warnOnUnassignedImports: true,
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'unknown', 'type'],
        pathGroups: [
          {
            pattern: '*.css',
            group: 'unknown',
            position: 'after',
          },
        ],
      },
    ],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: ['var', 'let', 'const', 'block-like', 'function', 'return', 'case', 'for', 'if', 'while', 'switch'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'prettier/prettier': [
      2,
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
};
