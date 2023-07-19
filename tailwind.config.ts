import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(12 74 110)',
        secondary: '#ffffff',
      },
    },
  },
  plugins: [],
} satisfies Config;
