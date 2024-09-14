/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "var(--main-color)",
        heading_color: "var(--heading-color)",
        text_color: "var(--text-color)",
        body_color: "var(--body-color)",
        container_color: "var(--container-color)",
        border_color: "var(--border-color)",
        shadow_1_color: "var(--shadow-1-color)",
        shadow_2_color: "var(--shadow-2-color)",
      },
    },
    fontFamily: {
      Poppins: "Poppins",
    },
  },
  plugins: [],
}
