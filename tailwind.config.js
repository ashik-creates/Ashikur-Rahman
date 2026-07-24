/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        "background-alt": "#070707",
        surface: "#0F0F0F",
        "surface-hover": "#1A1A1A",
        accent: "#A855F7",
        "accent-hover": "#C084FC",
        "accent-light": "#ED80E9",
        lavender: "#D3D3FF",
        thistle: "#D8BFD8",
        text: "#FFFFFF",
        "text-secondary": "#B0B0B0",
        muted: "#7A7A7A",
        border: "#1F1F1F",
        "border-soft": "rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg, #A855F7 0%, #ED80E9 100%)",
        "secondary-gradient":
          "linear-gradient(135deg, #D3D3FF 0%, #D8BFD8 100%)",
        "glow-gradient":
          "radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 60%)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg, #9400D3 0%, #ED80E9 100%)",
        "secondary-gradient":
          "linear-gradient(135deg, #D3D3FF 0%, #D8BFD8 100%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
