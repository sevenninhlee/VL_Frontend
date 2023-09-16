import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./billing/**/*.{js,ts,jsx,tsx,mdx}",



  ],
  theme: {
    fontFamily: {
      spaceGrotesk: ["SpaceGrotesk", "sans-serif"],
      satoshi: ["satoshi", "sans-serif"],
    },
    extend: {
      colors: {
        vlocator_purple: {
          DEFAULT: "#6735FC",
          1: "",
        },
        vlocator_black: {
          DEFAULT: "#0F1E24",
          1: "#29333D",
          2: "#181817"
        },
        vlocator_gray: {
          DEFAULT: "#f7f4f0",
          1: "#A8A7A5",
          2: "#7E7B85",
          3: "#DFE1E5",
          4: "#DAD5CE",
          5: "#E0DFE2"
        },
        vlocator_green: {
          DEFAULT: "#60C24F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
