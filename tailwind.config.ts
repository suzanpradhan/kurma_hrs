import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/core/ui/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-inter)'],
      //   mono: ['var(--font-roboto-mono)'],
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        whiteShade: '#F2F3F5',
        blueWhite: '#F5F8FA',
        accent: '#CBA22E',
        accentBlue: {
          50: '#E2EFFF',
          100: '#B3D5FF',
          300: '#347bd3',
          400: '#2560AA',
          500: '#1454A4',
          900: '#0b2d58',
        },
        primaryGray: {
          300: '#DEDEE0',
          500: '#717172',
        },
        dark: {
          500: '#2D2D2E',
        },
      },
      fontFamily: {
        sans: ['var(--font-helvetica)'],
      },
    },
  },
  plugins: [],
};
export default config;
