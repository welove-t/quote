const plugin = require("tailwindcss/plugin");

// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y--180": {
      transform: "rotateY(-180deg)",
    },
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});

// backfaceVisibility utilities
const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

// transform-3d utilities
const transform3d = plugin(function ({ addUtilities }) {
  addUtilities({
    ".transform-3d": {
      "transform-style": "preserve-3d",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        npConvexButton: "5px 5px 10px #b1bfbf,-5px -5px 10px #ffffff;",
        npConvexCard: "5px 5px 2px #6d7676,-4px -4px 2px #eeffff;",
        npConcaveButton:
          "inset 5px 5px 10px #99a5a5,inset -2px -2px 10px #ffffff;",
        npConcaveText:
          "inset 5px 5px 10px #9facac,inset -5px -5px 10px #f0ffff;",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        lg: "48px",
        md: "24px",
        sm: "24px",
      },
    },
  },
  plugins: [rotateY, backfaceVisibility, transform3d],
};
