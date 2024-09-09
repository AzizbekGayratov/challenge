const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Nuckle: ["Nuckle", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        White: "#FFFFFF",
        Secondary: "#ECF4FF",
        MainColor: "#0D63F3",
        Main: "#1E1E1E",
        Gray: "#6C757D",
        Primary: "#E4E7EE",
        Gradient: "bg-gradient-to-r from-[#4D5EF6] to-[#F64D4D]",
        ActiveGradient: "bg-gradient-to-r from-[#4d5ef633] to-[#f64d4d33]",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
