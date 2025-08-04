export const APP_NAME = "ModernApp"
export const APP_DESCRIPTION = "Modern React TypeScript Template"

export const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || "https://api.example.com"

export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const
