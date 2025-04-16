/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sidebar-bg": "#2C3E50", // 사이드바색 (바탕색)
        "sidebar-hover": "#3A506B", // 사이드바호버색 (호버 색상)
        "sidebar-border": "#4A6078", // 사이드바선색 (선 색상)
        "sidebar-active": "#526D82", // 사이드바활성페이지색 (활성 페이지 색상)
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
