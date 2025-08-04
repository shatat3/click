// Common types
export type LoadingState = "idle" | "loading" | "success" | "error"

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  features?: string[]
  price?: string
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

// Influencer types
export interface Influencer {
  id: string
  name: string
  platform: string
  followers: number
  category: string
  bio: string
  avatar?: string
}

// Media types
export interface MediaFile {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  uploadedAt: string
}

// Pagination types
export interface PaginatedResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  currentPage: number
  size: number
  first: boolean
  last: boolean
}

// Work Category types
export interface WorkCategory {
  id: string
  title: string
  description: string
  path: string
  icon: string
  gradient: string
}

// Client types
export interface Client {
  id: string
  name: string
  project: string
  description: string
  videoUrl: string
  thumbnail?: string
  category: string
  year: string
} 