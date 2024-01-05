import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#506ccf",
          200: "#623cea",
          300: "#311e75",
          400: "#50cf9a",
          500: "#ff577f",
        },
        gray: {
          100: "#0a0a0b",
          200: "#121214",
          300: "#595f64",
          400: "#868e96",
          500: "#e9ecef",
          700: "#f8f9fa",
        },
      },
    },
  },
  plugins: [],
}
export default config
