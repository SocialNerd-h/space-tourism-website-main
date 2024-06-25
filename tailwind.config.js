/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlowC: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair"],
      },
      screens: {
        minHeightTablet: { raw: "(max-height: 720px)" },
        minHeightMobile: { raw: "(max-height: 741px)" },

        sm: { min: "340px", max: "640.9px" },
        // => @media (min-width: 360px) { ... }

        md: { min: "641px", max: "1440.9px" },
        // => @media (min-width: 768px) { ... }

        lg: { min: "1440px" },
        // => @media (min-width: 1440px) { ... }
      },
      backgroundImage: {
        homeLg:
          "url('../starter-code/assets/home/background-home-desktop.jpg')",
        homeMd: "url('../starter-code/assets/home/background-home-tablet.jpg')",
        homeSm: "url('../starter-code/assets/home/background-home-mobile.jpg')",
        destinationSm: "url('@assets/destination/background-destination-mobile.jpg')",
        destinationMd: "url('@assets/destination/background-destination-tablet.jpg')",
        destinationLg: "url('@assets/destination/background-destination-desktop.jpg')",
      },
      colors: {
        veryDarkNavy: "#0B0D17",
        lightBlue: "#D0D6F9",
      },
    },
  },
  plugins: [],
};
