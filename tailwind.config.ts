import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // "radial-custom":
        //   "radial-gradient(circle at 50% 50%, #7700ff 0%, rgba(119, 0, 255, 0) 100%)",
      },
      colors: {
        primary: "#7700FF",
        secondary: "#0ED4FF",
        mainGreen: "#C0FF0E",
      },
    },
  },
  plugins: [],
};
export default config;
