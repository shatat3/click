import api from "./api"
import type { ContactFormData, ApiResponse } from "../types"

// API Endpoints
export const API_ENDPOINTS = {
  // Services
  SERVICES: "/api/services",
  SERVICE_BY_ID: (id: string) => `/api/services/${id}`,
  
  // Testimonials
  TESTIMONIALS: "/api/testimonials",
  TESTIMONIAL_BY_ID: (id: string) => `/api/testimonials/${id}`,
  
  // Influencers
  INFLUENCERS: "/api/influencers",
  INFLUENCER_BY_ID: (id: string) => `/api/influencers/${id}`,
  
  // Media
  MEDIA: "/api/media",
  MEDIA_BY_ID: (id: string) => `/api/media/${id}`,
} as const

export type EndpointKey = keyof typeof API_ENDPOINTS

export const contactService = {
  submitForm: (data: ContactFormData): Promise<ApiResponse> => api.post("/contact", data),
}

export const newsletterService = {
  subscribe: (email: string): Promise<ApiResponse> => api.post("/newsletter/subscribe", { email }),

  unsubscribe: (email: string): Promise<ApiResponse> => api.post("/newsletter/unsubscribe", { email }),
}

export const userService = {
  getProfile: (): Promise<ApiResponse> => api.get("/user/profile"),

  updateProfile: (data: any): Promise<ApiResponse> => api.put("/user/profile", data),
}
