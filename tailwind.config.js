module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#212325",
          2: "#424243",
        },
        offwhite: "#F9EFE8",
        stone: "#E3D5C8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
