import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        highlight: {
          light: "#30af5b",
          dark: "#b5ff6d"
        },
        "custom-primary": {
          light: "#0a0a0a",
          dark: "#f6f7ff"
        },
        "custom-secondary": {
          light: "#0a0a0a",
          dark: "#a9a9bd"
        },
        inverse: {
          light: "#0b0b0d",
          dark: "#f7f8fa"
        },
        bg600: {
          light: "#cbd5e1",
          dark: "#2c2c35"
        },
        bg700: {
          light: "#e2e8f0",
          dark: "#191920"
        },
        bg800: {
          light: "#fff",
          dark: "#111116"
        },
        bg900: {
          light: "#f7f8fa",
          dark: "#0b0b0d"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        },
        "gray-light": "#F5F5F5",
        "gray-dark": "#181818",
        "br-gray-light": "#e6e6e6",
        "br-gray-dark": "#313131"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        clash: ["var(--font-clash)"],
        satoshi: ["var(--font-satoshi)"],
        yekan: ["var(--font-yekan)"],
        doran: ["var(--font-doran)"]
      },
      animation: { "wave": "wave-animation 2.5s infinite" },
      keyframes: {
        "wave-animation": {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(0deg)" }
        }
      }
    }

  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("tailwindcss-rtl")]
} satisfies Config