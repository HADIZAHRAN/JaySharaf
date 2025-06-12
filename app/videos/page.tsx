"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

const videosData = [
  {
    id: 1,
    title: "Shakesperian Monologue",
    category: "acting",
    thumbnail: "/imgs/acting/Shakesperian Monologue 1.png",
    videoUrl: "https://www.youtube.com/watch?v=Wfwt53zTj1M",
  },
  {
    id: 2,
    title: "MAMA Music Video",
    category: "singing",
    thumbnail: "/imgs/singing/1.png",
    videoUrl: "https://player.vimeo.com/video/946191212",
  },
  {
    id: 3,
    title: "Arabesque",
    category: "piano",
    thumbnail: "/imgs/piano/1.png",
    videoUrl: "https://www.youtube.com/watch?v=YU6qDTpL4CU",
  },
  {
    id: 4,
    title: "Elle Woods Legally Blonde:",
    category: "acting",
    thumbnail: "/imgs/acting/2.png",
    videoUrl: "https://www.youtube.com/watch?v=M815pZfOy68",
  },
  {
    id: 5,
    title: "Acapella",
    category: "singing",
    thumbnail: "/imgs/singing/2.png",
    videoUrl: "https://www.youtube.com/watch?v=JxfI3oCDQ8A",
  },
  {
    id: 6,
    title: "Ja Da",
    category: "piano",
    thumbnail: "/imgs/piano/2.png",
    videoUrl: "https://www.youtube.com/embed/3vTuGCEJTUk",
  },
  {
    id: 7,
    title: "A Dreamer Examines his Pillow",
    category: "acting",
    thumbnail: "/imgs/acting/3.png",
    videoUrl: "https://www.youtube.com/watch?v=S4SWINtiwgY",
  },
  {
    id: 8,
    title: "Fix Us",
    category: "singing",
    thumbnail: "/imgs/singing/3.png",
    videoUrl: "https://www.youtube.com/watch?v=VPWBQY2ZIno",
  },
  {
    id: 9,
    title: "Hana",
    category: "storytelling",
    thumbnail: "/imgs/IMG-20250608-WA0029.jpg",
    videoUrl: "https://www.youtube.com/watch?v=BgFpsLT1cX4&feature=youtu.be",
  },
  {
    id: 10,
    title: "Elaina",
    category: "storytelling",
    thumbnail: "/imgs/theater/IMG-20250608-WA0004.jpg",
    videoUrl: "https://www.youtube.com/watch?v=9FZmlIhRQfw",
  },
  {
    id: 11,
    title: "They Just Leave",
    category: "singing",
    thumbnail: "/imgs/singing/4.png",
    videoUrl: "https://www.youtube.com/watch?v=G7iZ-xgw_Qg",
  },
  {
    id: 12,
    title: "The Care & Feeding of Baby Birds",
    category: "acting",
    thumbnail: "/imgs/acting/4.png",
    videoUrl: "https://www.youtube.com/watch?v=SgjntZsBSjE&feature=youtu.be",
  },
  {
    id: 13,
    title: "They Just LeaveActing Reel",
    category: "acting",
    thumbnail: "/imgs/acting/5.png",
    videoUrl: "https://www.youtube.com/watch?v=zOXnhFMgXF4",
  },
  {
    id: 14,
    title: "English Monologues",
    category: "acting",
    thumbnail: "/imgs/acting/6.png",
    videoUrl: "https://www.youtube.com/watch?v=EGSqsZNGfQc",
  },
  {
    id: 15,
    title: "Arabic Monologues",
    category: "acting",
    thumbnail: "/imgs/acting/7.png",
    videoUrl: "https://player.vimeo.com/video/946204412?autoplay=0&loop=0&muted=0"
,
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "acting", label: "Acting" },
  { id: "singing", label: "Singing" },
  { id: "piano", label: "Piano" },
  { id: "storytelling", label: "Storytelling" },
]

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null)

  const filteredVideos =
    activeCategory === "all" ? videosData : videosData.filter((video) => video.category === activeCategory)

  // تحويل رابط YouTube إلى embed
  const getEmbedUrl = (videoUrl: string) => {
    if (videoUrl.includes("youtube.com/watch")) {
      const videoIdMatch = videoUrl.match(/v=([^&]+)/)
      const videoId = videoIdMatch ? videoIdMatch[1] : null
      return videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl
    }
    return videoUrl // روابط Vimeo أو غيرها تفضل زي ما هي
  }

  const openLightbox = (videoUrl: string) => {
    setLightboxVideo(getEmbedUrl(videoUrl))
  }

  const closeLightbox = () => {
    setLightboxVideo(null)
  }

  return (
    <div className="min-h-screen bg-pink-100">
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-serif">My Videos</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my creative journey through performance, music, and artistic expression
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full mt-6" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                  : "border-pink-200 text-gray-700 hover:border-pink-300 hover:bg-pink-50"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(video.videoUrl)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-4 w-4 md:h-6 md:w-6 text-pink-500 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 text-sm md:text-base">
                    {video.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 capitalize mt-1">{video.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos found in this category.</p>
          </div>
        )}
      </div>

      {/* Video Lightbox */}
      {lightboxVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="outline"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white z-10"
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={lightboxVideo}
              title="Video player"
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}
