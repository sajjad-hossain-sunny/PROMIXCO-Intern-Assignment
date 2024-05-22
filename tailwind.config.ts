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
          DEFAULT: "12px",
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
          50: '#FFD0D8',
          300: '#FF6A90',
          400: '#FB0E74',
          900: '#F40469',
        },
      },
      fontSize: {
        "21": "21px",
        "32": ['32px', '48px'],
        "56": "56px",
      },
      letterSpacing: {
        "0.3": '.3px',
        "0.4": '.4px',
      },
      backgroundImage: {
        'bannerImg': "url(/Preset.png)",
      },
      spacing: {
        '1': '1px',
        '18': '18px',
        '22': '22px',
        '25': '25px',
        '31': '31px',
        '34': '34px',
        '38': '38px',
        '102': '102px',
        '124': '124px',
        '125': '125px',
        '145': '145px',
        '188': '188px',
        '321': '321px',
        '439': '439px',
        '580': '580px',
        '815': '815px',
      },
      borderRadius: {
        '30': '30px',
        '32': '32px',
        '40': '40px',
      },
    },
  },
  plugins: [],
};
export default config;
