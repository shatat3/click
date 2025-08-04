"use client"

import { Calendar } from "lucide-react"
import CategoryPage from "../components/pages/CategoryPage"

export default function EventsPage() {
  return (
    <CategoryPage
      category="events"
      title="Event Coverage"
      description="Professional event coverage and live production services for conferences, concerts, and special events"
      icon={Calendar}
      gradient="from-green-500/20 to-emerald-500/20"
    />
  )
} 