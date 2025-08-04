export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: number
}

export interface BlogPost extends BaseEntity {
  title: string
  slug: string
  excerpt: string
  content: string
  author: User
  tags: string[]
  published: boolean
}

export interface NewsletterSubscription {
  email: string
  subscribed: boolean
}

import type { BaseEntity, User } from "./common"
