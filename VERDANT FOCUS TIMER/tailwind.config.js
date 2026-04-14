module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      opacity: {
        6: "0.06",
        7: "0.07",
        8: "0.08",
        12: "0.12",
        14: "0.14",
        16: "0.16",
        18: "0.18",
        28: "0.28",
        72: "0.72",
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        display: ["Fraunces", "serif"],
      },
      boxShadow: {
        glass: "0 28px 80px rgba(5, 15, 23, 0.32)",
        soft: "0 18px 48px rgba(6, 18, 27, 0.18)",
      },
      colors: {
        ink: "var(--text-primary)",
        mute: "var(--text-secondary)",
        line: "var(--line)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
};
