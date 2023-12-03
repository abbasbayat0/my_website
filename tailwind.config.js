/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      rotate: {
        "135": "135deg",
        "250": "250deg"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        blackOps: ['Black Ops One', 'sans-serif']
       },
      animation: {
        introGo: "introGo 2s ease-in-out 1s forwards",
        scale: "scale 1s ease-in 1s forwards",
        enter: "enter 2.3s ease-out forwards",
        color1: "color 1.5s forwards",
        color2: "color 2s forwards",
        text: "color 1s forwards",
        image: "image 2s 1s both",
        description: "description 2s 3s both",
        gear: "gear 2s infinite"
      },
      colors: {
        "bunker": {
          "50": "#0E1118"
        },
        "cardinal": {
          "700": "#C70039"
        },
        "indigo": {
          "900": "#481380"
        },
        "chill": {
          "700": "#00909E"
        },
        "endeavour": {
          "700": "#035AA6"
        },
        "sienna": {
          "500": "#DD7631"
        },
        "blush": {
          "600": "#c04070"
        },
        "jordy": {
          "400": "#71B7FB"
        },
        "moody": {
          "500": "#766CF4"
        },
        "curious": {
          "500": "#2496D1"
        },
        "jade": {
          "600": "#04a777"
        },
        "sand": {
          "50": "#f5f5f5"
        }
      },
      keyframes: {
        introGo: {
          "0%": { transform: "translateY(0)", opacity: "1"},
          "100%": { transform: "translateY(-120%)", opacity: "0"}
        },
        scale: {
          "0%": { transform: "scale(.7)"},
          "100%": { transform: "scale(1)"}
        },
        enter: {
          "0%": { transform: " skewX(-20deg)"},
          "100%": { transform: "translateX(200%) skewX(-20deg)"}
        },
        color: {
          "0%": { transform: "translateX(200px)"},
          "100%": { transform: "translateX(0)"}
        },
        image: {
          "0%": { transform: "translateX(-200%)"},
          "100%": { transform: "translateX(0)"}
        },
        description: {
          "0%": { transform: "translateX(200%)"},
          "100%": { transform: "translateX(0)"}
        },
        gear: {
          "0%": { opacity: ".1"},
          "100%": { opacity: ".9"}
        }
      }
    },
  },
  plugins: [],
}

