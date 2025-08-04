"use client"

import { Scissors } from "lucide-react"
import CategoryPage from "../components/pages/CategoryPage"

export default function EditingPage() {
  return (
    <CategoryPage
      category="editing"
      title="Video Editing"
      description="Creative video editing and post-production services for all types of content"
      icon={Scissors}
      gradient="from-blue-500/20 to-cyan-500/20"
    />
  )
} 