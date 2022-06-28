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
        npConvexButton: "6px 6px 12px #B9BCC1,-6px -6px 12px #FFFFFF;",
        npConvexCard: "2px 2px 4px #666666,-4px -4px 8px #FFFFFF;",
        npConcaveButton:
          "inset 5px 5px 10px #B9BCC1,inset -2px -2px 10px #FFFFFF;",
        npConcaveText:
          "inset 5px 5px 10px #B9BCC1,inset -5px -5px 10px #FFFFFF;",
        darkConvexButton: "6px 6px 12px #0F172A,-6px -6px 12px #334154;",
        darkConvexCard: "2px 2px 4px #0F172A,-4px -4px 8px #334154;",
        darkConcaveButton:
          "inset 5px 5px 10px #0F172A,inset -2px -2px 10px #334154;",
        darkConcaveText:
          "inset 5px 5px 10px #0F172A,inset -5px -5px 10px #334154;",
        yellowConvexButton: "2px 2px 0px #c1ac6c;",
        yellowConcaveButton:
          "inset 10px 10px 20px #ccb672 inset -10px -10px 20px #ead284;",
      },
      fontFamily: {
        zen: ["Zen Maru Gothic"],
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
  darkMode: "class",
};
