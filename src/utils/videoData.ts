export interface VideoItem {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  duration: string
  category: string
  subcategory: string
}

export const vfxVideos: VideoItem[] = [
  {
    id: "vfx-compositing-1",
    title: "Advanced Compositing Workflow",
    description: "Professional compositing techniques for film and advertising",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "2:34",
    category: "vfx",
    subcategory: "compositing"
  },
  {
    id: "vfx-compositing-2",
    title: "Green Screen Keying",
    description: "Perfect keying techniques for complex backgrounds",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    duration: "3:12",
    category: "vfx",
    subcategory: "compositing"
  },
  {
    id: "vfx-particles-1",
    title: "Particle System Masterclass",
    description: "Creating dynamic particle effects and simulations",
    thumbnail: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "4:56",
    category: "vfx",
    subcategory: "particle-systems"
  },
  {
    id: "vfx-3d-1",
    title: "3D Environment Creation",
    description: "Building immersive 3D worlds and environments",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    duration: "5:23",
    category: "vfx",
    subcategory: "3d-modeling"
  },
  {
    id: "vfx-motion-graphics-1",
    title: "Motion Graphics Animation",
    description: "Creating dynamic animated graphics and visual elements",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "3:45",
    category: "vfx",
    subcategory: "motion-graphics"
  }
]

export const editingVideos: VideoItem[] = [
  {
    id: "editing-commercial-1",
    title: "Commercial Editing Techniques",
    description: "Professional commercial video editing workflow",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "3:45",
    category: "editing",
    subcategory: "commercial-editing"
  },
  {
    id: "editing-music-1",
    title: "Music Video Editing",
    description: "Creative editing for music videos and performances",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    duration: "4:12",
    category: "editing",
    subcategory: "music-videos"
  },
  {
    id: "editing-documentary-1",
    title: "Documentary Storytelling",
    description: "Editing techniques for compelling documentary narratives",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "6:28",
    category: "editing",
    subcategory: "documentary"
  },
  {
    id: "editing-corporate-1",
    title: "Corporate Video Production",
    description: "Professional corporate video editing and branding",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    duration: "2:55",
    category: "editing",
    subcategory: "corporate"
  }
]

export const eventsVideos: VideoItem[] = [
  {
    id: "events-conference-1",
    title: "Conference Coverage Highlights",
    description: "Professional conference recording and highlights",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "3:42",
    category: "events",
    subcategory: "conferences"
  },
  {
    id: "events-concert-1",
    title: "Live Concert Recording",
    description: "Capturing the energy of live performances",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    duration: "5:18",
    category: "events",
    subcategory: "concerts"
  },
  {
    id: "events-wedding-1",
    title: "Wedding Cinematography",
    description: "Beautiful wedding event coverage and storytelling",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    duration: "4:33",
    category: "events",
    subcategory: "weddings"
  },
  {
    id: "events-sports-1",
    title: "Sports Event Coverage",
    description: "Dynamic sports event recording and highlights",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    duration: "3:15",
    category: "events",
    subcategory: "sports"
  }
]

export const getVideosByCategory = (category: string, subcategory?: string): VideoItem[] => {
  let videos: VideoItem[] = []
  
  switch (category) {
    case 'vfx':
      videos = vfxVideos
      break
    case 'editing':
      videos = editingVideos
      break
    case 'events':
      videos = eventsVideos
      break
    default:
      return []
  }
  
  if (subcategory) {
    return videos.filter(video => video.subcategory === subcategory)
  }
  
  return videos
}
