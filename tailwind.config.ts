import type { Config } from "tailwindcss";
import TailwindTextShadow from "tailwindcss-textshadow";

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
        outline: "0px 1px 1px rgba(0,0,0,0.8)",
      },
      textShadow: {
        dark: "2px 0px 1px #000, -2px 0px 1px #000, 0px 2px 2px #000, 0 -2px 2px #000",
      },
      colors: {
        "ai-blue": "#43aeff",
      },
      fontSize: {
        "super-size": "12rem",
      },
    },
  },
  plugins: [TailwindTextShadow],
};
export default config;
