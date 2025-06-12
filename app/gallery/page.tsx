"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryData = {
  photoshoot: [
    { id: 1, src: "/imgs/headshot/1.JPG", alt: "Professional photoshoot 1" },
    { id: 2, src: "/imgs/headshot/2.JPG", alt: "Professional photoshoot 2" },
    { id: 3, src: "/imgs/headshot/3.JPG", alt: "Professional photoshoot 3" },
    { id: 4, src: "/imgs/headshot/4.JPG", alt: "Professional photoshoot 4" },
    { id: 5, src: "/imgs/headshot/5.JPG", alt: "Professional photoshoot 5" },
    { id: 6, src: "/imgs/headshot/6.JPG", alt: "Professional photoshoot 6" },
    { id: 100, src: "/imgs/headshot/DSC_1049-Enhanced-NR.png", alt: "Professional photoshoot 100" },
    { id: 101, src: "/imgs/headshot/DSC_1042-Enhanced-NR.png", alt: "Professional photoshoot 101" },
    { id: 102, src: "/imgs/headshot/DSC_1059-Enhanced-NR.png", alt: "Professional photoshoot 102" },
    { id: 103, src: "/imgs/headshot/DSC_1066-Enhanced-NR.png", alt: "Professional photoshoot 103" },
    { id: 104, src: "/imgs/headshot/DSC_1076-Enhanced-NR.png", alt: "Professional photoshoot 104" },
    { id: 105, src: "/imgs/headshot/DSC_1080-Enhanced-NR.png", alt: "Professional photoshoot 105" },
    { id: 106, src: "/imgs/headshot/DSC_1137-Enhanced-NR.png", alt: "Professional photoshoot 106" },
    { id: 107, src: "/imgs/headshot/DSC_1133-Enhanced-NR.png", alt: "Professional photoshoot 107" },
    { id: 108, src: "/imgs/headshot/DSC_1125-Enhanced-NR.png", alt: "Professional photoshoot 108" },
    { id: 109, src: "/imgs/headshot/DSC_1123-Enhanced-NR.png", alt: "Professional photoshoot 109" },
    { id: 110, src: "/imgs/headshot/DSC_1114-Enhanced-NR.png", alt: "Professional photoshoot 110" },
    { id: 111, src: "/imgs/headshot/DSC_1105-Enhanced-NR.png", alt: "Professional photoshoot 111" },
    { id: 112, src: "/imgs/headshot/DSC_1091-Enhanced-NR.png", alt: "Professional photoshoot 112" },
    { id: 113, src: "/imgs/headshot/DSC_1027-Enhanced-NR.png", alt: "Professional photoshoot 113" },
    { id: 114, src: "/imgs/headshot/DSC_1039-Enhanced-NR.png", alt: "Professional photoshoot 114" },
  ],
  theater: [ 
    { id: 7,  src:"/imgs/Theater/1.jpg", alt: "Theater performance 1" },
    { id: 8,  src:"/imgs/Theater/1000007552.jpg", alt: "Theater performance 2" },
    { id: 9,  src:"/imgs/Theater/1000007693.jpg", alt: "Theater performance 3" },
    { id: 16, src:"/imgs/Theater/278273130_5018750331526781_5325524490919983045_n.jpg", alt: "Theater performance 4" },
    { id: 17, src:"/imgs/Theater/cover.jpg", alt: "Theater performance 5" },
    { id: 18, src:"/imgs/Theater/IMG-20250608-WA0002.jpg", alt: "Theater performance 6" },
    { id: 19, src:"/imgs/Theater/IMG-20250608-WA0003.jpg", alt: "Theater performance 7" },
    { id: 20, src:"/imgs/Theater/IMG-20250608-WA0004.jpg", alt: "Theater performance 8" },
    { id: 21, src:"/imgs/Theater/IMG-20250608-WA0017.jpg", alt: "Theater performance 9" },
    { id: 22, src:"/imgs/Theater/IMG-20250608-WA0019.jpg", alt: "Theater performance 10" },
    { id: 23, src:"/imgs/Theater/IMG-20250608-WA0021.jpg", alt: "Theater performance 11" },
    { id: 24, src:"/imgs/Theater/IMG-20250608-WA0022.jpg", alt: "Theater performance 12" },
    { id: 25, src:"/imgs/Theater/IMG-20250608-WA0023.jpg", alt: "Theater performance 13" },
    { id: 26, src:"/imgs/Theater/IMG-20250608-WA0024.jpg", alt: "Theater performance 14" },
    { id: 27, src:"/imgs/Theater/IMG-20250608-WA0025.jpg", alt: "Theater performance 15" },
    { id: 28, src:"/imgs/Theater/IMG-20250608-WA0026.jpg", alt: "Theater performance 16" },
    { id: 29, src:"/imgs/Theater/IMG-20250608-WA0027.jpg", alt: "Theater performance 17" },
    { id: 30, src:"/imgs/Theater/IMG-20250608-WA0028.jpg", alt: "Theater performance 18" },
  ],
  science: [
    { id: 31, src: "/imgs/scienceStreat/1.jpg", alt: "Science program 1" },
    { id: 32, src: "/imgs/scienceStreat/2.jpg", alt: "Science program 2" },
    { id: 33, src: "/imgs/scienceStreat/3.jpg", alt: "Science program 3" },
    { id: 34, src: "/imgs/scienceStreat/4.jpg", alt: "Science program 4" },
    { id: 35, src: "/imgs/scienceStreat/5.jpg", alt: "Science program 5" },
    { id: 36, src: "/imgs/scienceStreat/6.jpg", alt: "Science program 6" },
    { id: 37, src: "/imgs/scienceStreat/7.jpg", alt: "Science program 7" },
    { id: 38, src: "/imgs/scienceStreat/8.jpg", alt: "Science program 8" },
    { id: 39, src: "/imgs/scienceStreat/9.jpg", alt: "Science program 9" },
    { id: 40, src: "/imgs/scienceStreat/10.jpg", alt: "Science program 10" },
    { id: 41, src: "/imgs/scienceStreat/11.jpg", alt: "Science program 11" },
    { id: 42, src: "/imgs/scienceStreat/12.jpg", alt: "Science program 12" },
    { id: 43, src: "/imgs/scienceStreat/13.jpg", alt: "Science program 13" },
    { id: 44, src: "/imgs/scienceStreat/14.jpg", alt: "Science program 14" },
    { id: 45, src: "/imgs/scienceStreat/15.jpg", alt: "Science program 15" },
    { id: 46, src: "/imgs/scienceStreat/16.jpg", alt: "Science program 16" },
    { id: 47, src: "/imgs/scienceStreat/17.jpg", alt: "Science program 17" },
  ],
}

interface CarouselProps {
  images: Array<{ id: number; src: string; alt: string }>
  onImageClick: (image: { id: number; src: string; alt: string }) => void
}

function Carousel({ images, onImageClick }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState(3)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setVisibleImages(window.innerWidth >= 768 ? 3 : 1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const startIndex = currentIndex
  const displayImages = []

  for (let i = 0; i < visibleImages; i++) {
    const index = (startIndex + i) % images.length
    displayImages.push(images[index])
  }

  return (
    <div className="relative">
      <div className="flex gap-4 justify-center items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full bg-white/80 hover:bg-white border-pink-200 hover:border-pink-300"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-4 overflow-hidden">
          {displayImages.map((image, index) => (
            <div
              key={image.id}
              className={`transition-all duration-300 cursor-pointer hover:scale-105 ${
                index === 1 && visibleImages === 3 ? "scale-110 z-10" : "scale-95 opacity-75"
              }`}
              onClick={() => onImageClick(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={400}
                className="rounded-xl shadow-lg object-cover h-80 w-60"
              />
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full bg-white/80 hover:bg-white border-pink-200 hover:border-pink-300"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<{ id: number; src: string; alt: string } | null>(null)

  const openLightbox = (image: { id: number; src: string; alt: string }) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <div className="min-h-screen bg-pink-100">
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-serif">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through my artistic endeavors and creative expressions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full mt-6" />
        </div>

        {/* Photoshoot Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12 font-serif">
            Professional Photoshoots
          </h2>
          <Carousel images={galleryData.photoshoot} onImageClick={openLightbox} />
        </section>

        {/* Theater Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12 font-serif">
            Theater Performances
          </h2>
          <Carousel images={galleryData.theater} onImageClick={openLightbox} />
        </section>

        {/* Science Program Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12 font-serif">
          Edutainment
          </h2>
          <Carousel images={galleryData.science} onImageClick={openLightbox} />
        </section>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="outline"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white"
          >
            <X className="h-6 w-6" />
          </Button>
          <Image
            src={lightboxImage.src || "/placeholder.svg"}
            alt={lightboxImage.alt}
            width={800}
            height={1000}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  )
}