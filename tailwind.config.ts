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
        "residential-services": "url('/FourTvs-1.JPG')",
      },
      dropShadow: {
        outline: "0 1.2px 1.2px rgba(0,0,0,0.8)",
      },
      colors: {
        "ai-blue": "#43aeff",
      },
      fontSize: {
        "super-size": "12rem",
      },
    },
  },
  plugins: [],
};
export default config;
