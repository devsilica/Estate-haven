'use client'

import { useState } from 'react'

export default function RestaurantGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const galleryItems = [
    {
      title: 'Signature Dishes',
      image: '/gourmet-plated-dish.png',
    },
    {
      title: 'Intimate Ambiance',
      image: '/cozy-restaurant-interior-with-candlelight.jpg',
    },
    {
      title: 'Fresh Ingredients',
      image: '/fresh-organic-produce.png',
    },
    {
      title: 'Wine Selection',
      image: '/wine-cellar-with-bottles.jpg',
    },
    {
      title: 'Dessert Artistry',
      image: '/elegant-dessert-plating.jpg',
    },
    {
      title: 'Private Dining',
      image: '/elegant-private-dining-room.png',
    },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Moments of excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-60'
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className={`text-2xl font-serif font-semibold text-white transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-y-0' : 'translate-y-2'
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
