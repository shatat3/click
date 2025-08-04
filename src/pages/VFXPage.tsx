"use client"

import { Video } from "lucide-react"
import CategoryPage from "../components/pages/CategoryPage"

export default function VFXPage() {
  return (
    <CategoryPage
      category="vfx"
      title="Visual Effects"
      description="Professional visual effects and post-production work for film, advertising, and digital media"
      icon={Video}
      gradient="from-purple-500/20 to-pink-500/20"
    />
  )
} 