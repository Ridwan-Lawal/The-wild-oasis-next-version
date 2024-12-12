/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-brand": "#4f46e5",
        "color-brand-2": "#6366f1",
        "color-yellow-700": "#a16207",
        "color-yellow-100": "#fef9c3",
        "color-red-dark": "#991b1b",
      },
    },
  },
  plugins: [],
};
