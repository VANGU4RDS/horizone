import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'purpleSidebar-100': '#453FDD',
        'cream-100': '#FFEAB2',
        'cream-200': '#FFE399',
        'cream-300': '#FFD973',
        'cream-400': '#FFD157',
        'cream-500': '#FFC731',
        'cream-600': '#E5B024',
      }
    },
  },
  plugins: [],
};
export default config;
