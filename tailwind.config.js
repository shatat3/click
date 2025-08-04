/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#e5e5e5',
          '300': '#d4d4d4',
          '400': '#a3a3a3',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
          '950': '#0a0a0a',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          '50': '#f7f8f4',
          '100': '#eef1e6',
          '200': '#dde3d0',
          '300': '#c8d1b5',
          '400': '#aeb894',
          '500': '#8f9a6f',
          '600': '#5b6135',
          '700': '#4a4f2c',
          '800': '#3d4125',
          '900': '#333620',
          '950': '#1a1c10',
          DEFAULT: '#5b6135',
          foreground: '#ffffff'
        },
        accent: {
          '50': '#f7f8f4',
          '100': '#eef1e6',
          '200': '#dde3d0',
          '300': '#c8d1b5',
          '400': '#aeb894',
          '500': '#8f9a6f',
          '600': '#5b6135',
          '700': '#4a4f2c',
          '800': '#3d4125',
          '900': '#333620',
          '950': '#1a1c10',
          DEFAULT: '#5b6135',
          foreground: '#ffffff'
        },
        luxury: {
          '50': '#f7f8f4',
          '100': '#eef1e6',
          '200': '#dde3d0',
          '300': '#c8d1b5',
          '400': '#aeb894',
          '500': '#8f9a6f',
          '600': '#5b6135',
          '700': '#4a4f2c',
          '800': '#3d4125',
          '900': '#333620',
          '950': '#1a1c10',
          DEFAULT: '#5b6135',
          foreground: '#ffffff'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        sans: [
          'Arial Armenian',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
        serif: [
          'Merriweather',
          'Georgia',
          'serif'
        ],
        mono: [
          'JetBrains Mono',
          'Menlo',
          'monospace'
        ],
        armenian: [
          'Arial Armenian',
          'Arial',
          'sans-serif'
        ]
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        },
        glow: {
          '0%': {
            boxShadow: '0 0 20px rgba(91, 97, 53, 0.3)'
          },
          '100%': {
            boxShadow: '0 0 30px rgba(91, 97, 53, 0.5)'
          }
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
