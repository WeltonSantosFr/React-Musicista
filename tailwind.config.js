/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#f8f9fa",
      gray: {
        1: "#e9ecef",
        2: "#dee2e6",
        3: "#ced4da",
        4: "#adb5bd",
        5: "#6c757d",
        6: "#495057",
        7: "#343a40",
      },
      black: "#212529",
      blue: {
        1 : "#caf0f8",
        2 : "#ade8f4",
        3 : "#90e0ef",
        4 : "#48cae4",
        5 : "#00b4d8",
        6 : "#0096c7",
        7 : "#0077b6",
        8 : "#023e8a",
        9 : "#03045e",
      },
      red: "#ef233c"
    },
    extend: {},
  },
  plugins: [],
};
