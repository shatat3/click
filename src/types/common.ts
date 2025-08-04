export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

export interface User extends BaseEntity {
  name: string
  email: string
  avatar?: string
}

export interface ApiResponse<T = any> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export type LoadingState = "idle" | "loading" | "success" | "error"

export interface FormField {
  name: string
  label: string
  type: "text" | "email" | "password" | "textarea" | "select"
  placeholder?: string
  required?: boolean
  options?: { label: string; value: string }[]
}
