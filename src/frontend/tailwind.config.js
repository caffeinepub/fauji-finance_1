/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        'fauji-green': 'oklch(var(--fauji-green))',
        'fauji-dark': 'oklch(var(--fauji-dark))',
        'fauji-light': 'oklch(var(--fauji-light))',
        'fauji-cream': 'oklch(var(--fauji-cream))',
        'fauji-gold': 'oklch(var(--fauji-gold))',
        'fauji-teal': 'oklch(var(--fauji-teal))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(2rem)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "fade-down": {
          "0%": { 
            opacity: "0",
            transform: "translateY(-2rem)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "slide-in-left": {
          "0%": { 
            opacity: "0",
            transform: "translateX(-2rem)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateX(0)"
          },
        },
        "slide-in-right": {
          "0%": { 
            opacity: "0",
            transform: "translateX(2rem)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateX(0)"
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-subtle": {
          "0%, 100%": { 
            opacity: "1",
            transform: "scale(1)"
          },
          "50%": { 
            opacity: "0.9",
            transform: "scale(1.05)"
          },
        },
        "bounce-subtle": {
          "0%, 100%": { 
            transform: "translateY(0)"
          },
          "50%": { 
            transform: "translateY(-0.5rem)"
          },
        },
        "scale-in": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.9)"
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1)"
          },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 10px rgba(76, 111, 68, 0.3)"
          },
          "50%": { 
            boxShadow: "0 0 25px rgba(76, 111, 68, 0.6)"
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-up": "fade-up 0.7s ease-out",
        "fade-down": "fade-down 0.7s ease-out",
        "slide-in-left": "slide-in-left 0.7s ease-out",
        "slide-in-right": "slide-in-right 0.7s ease-out",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "scale-in": "scale-in 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
