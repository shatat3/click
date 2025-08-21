export interface VideoCategory {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export const vfxCategories: VideoCategory[] = [
  {
    id: "compositing",
    title: "Compositing",
    description: "Advanced visual effects compositing and integration",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    category: "vfx"
  },
  {
    id: "particle-systems",
    title: "Particle Systems",
    description: "Dynamic particle effects and simulations",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "vfx"
  },
  {
    id: "3d-modeling",
    title: "3D Modeling",
    description: "Custom 3D models and environments",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop",
    category: "vfx"
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description: "Animated graphics and visual elements",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    category: "vfx"
  }
]

export const editingCategories: VideoCategory[] = [
  {
    id: "commercial-editing",
    title: "Commercial Editing",
    description: "Professional commercial video editing",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    category: "editing"
  },
  {
    id: "music-videos",
    title: "Music Videos",
    description: "Creative music video editing and post-production",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    category: "editing"
  },
  {
    id: "documentary",
    title: "Documentary",
    description: "Documentary film editing and storytelling",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    category: "editing"
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "Corporate video editing and branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    category: "editing"
  }
]

export const eventsCategories: VideoCategory[] = [
  {
    id: "conferences",
    title: "Conferences",
    description: "Professional conference coverage and highlights",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    category: "events"
  },
  {
    id: "concerts",
    title: "Concerts",
    description: "Live concert recording and production",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    category: "events"
  },
  {
    id: "weddings",
    title: "Weddings",
    description: "Wedding event coverage and cinematography",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
    category: "events"
  },
  {
    id: "sports",
    title: "Sports Events",
    description: "Sports event coverage and highlights",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    category: "events"
  }
]

export const getVideoCategoriesByType = (type: string): VideoCategory[] => {
  switch (type) {
    case 'vfx':
      return vfxCategories
    case 'editing':
      return editingCategories
    case 'events':
      return eventsCategories
    default:
      return []
  }
}
