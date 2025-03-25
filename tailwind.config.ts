import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        textcolor: "var(--textcolor)",
        cardbg: "var(--cardbg)",
        bordercolor: "var(--bordercolor)",
      },
    },
  },
  plugins: [],
};
export default config;
