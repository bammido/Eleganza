import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        apear: {
          '0%': { opacity: '.5', transform: 'translateX(-10px)' },
          // '100%': { opacity: '0', transform: 'translateX(-10px)' },
        },
        growth: {
          '0%': { transform: 'scale(0.5)'}
        }
      },
      animation: {
        'apear': 'apear 1.5s linear normal',
        'growth': 'growth 500ms linear normal',
      }
    },
  },
  plugins: [],
};
export default config;
