import { Client } from "../types"

export const vfxClients: Client[] = [
  {
    id: "vfx-1",
    name: "TechCorp",
    project: "Product Launch Visual Effects",
    description: "Cinematic visual effects for a major tech product launch campaign",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "vfx",
    year: "2024"
  },
  {
    id: "vfx-2",
    name: "FilmStudio Pro",
    project: "Sci-Fi Movie Effects",
    description: "Advanced visual effects for an upcoming science fiction feature film",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "vfx",
    year: "2024"
  },
  {
    id: "vfx-3",
    name: "AdAgency Creative",
    project: "Commercial VFX Package",
    description: "High-end visual effects for luxury brand advertising campaign",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "vfx",
    year: "2023"
  },
  {
    id: "vfx-4",
    name: "Gaming Studios",
    project: "Game Trailer Effects",
    description: "Dynamic visual effects for AAA game title announcement trailer",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "vfx",
    year: "2023"
  }
]

export const editingClients: Client[] = [
  {
    id: "edit-1",
    name: "Music Label Records",
    project: "Music Video Editing",
    description: "Professional editing for chart-topping music video release",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "editing",
    year: "2024"
  },
  {
    id: "edit-2",
    name: "Documentary Films",
    project: "Nature Documentary",
    description: "Cinematic editing for award-winning nature documentary series",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "editing",
    year: "2024"
  },
  {
    id: "edit-3",
    name: "Corporate Media",
    project: "Company Overview Video",
    description: "Professional corporate video editing for Fortune 500 company",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "editing",
    year: "2023"
  },
  {
    id: "edit-4",
    name: "Wedding Studios",
    project: "Wedding Highlight Reel",
    description: "Emotional wedding video editing with cinematic storytelling",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "editing",
    year: "2023"
  }
]

export const eventsClients: Client[] = [
  {
    id: "event-1",
    name: "Tech Conference 2024",
    project: "Conference Coverage",
    description: "Complete event coverage and live streaming for major tech conference",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "events",
    year: "2024"
  },
  {
    id: "event-2",
    name: "Music Festival Live",
    project: "Festival Production",
    description: "Multi-camera live production for international music festival",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "events",
    year: "2024"
  },
  {
    id: "event-3",
    name: "Corporate Summit",
    project: "Executive Summit Coverage",
    description: "Professional event coverage for executive leadership summit",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "events",
    year: "2023"
  },
  {
    id: "event-4",
    name: "Sports Championship",
    project: "Championship Coverage",
    description: "Live sports event coverage with multiple camera angles",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "events",
    year: "2023"
  }
]

export const getClientsByCategory = (category: string): Client[] => {
  switch (category) {
    case "vfx":
      return vfxClients
    case "editing":
      return editingClients
    case "events":
      return eventsClients
    default:
      return []
  }
} 