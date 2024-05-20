import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          "2xl": "4.5rem",
        },
        screens: {
          xs: "100%",
          sm: "100%",
          xl: "1232px",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        'jost': ["Jost", "sans-serif"],
      },
      colors: {
        'primary': {
          '900': '#F40469',
        },
      },
      fontSize: {
        "32": ['32px', '48px'],
      },
      backgroundImage: {
        'bannerImg': "url(/Preset.png)",
      },
      spacing: {
        '145': '145px',
        '188': '188px',
      }
    },
  },
  plugins: [],
};
export default config;
