// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

import type { Config } from 'tailwindcss';

const addVariablesForColors = ({ addBase, theme }: ANY) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const allColors: Record<string, string> = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  addBase({ ':root': newVars });
};

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      transitionProperty: {
        bg: 'background',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'selector',
  plugins: [addVariablesForColors],
};

export default config;
