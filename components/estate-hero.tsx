'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin, HomeIcon, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [searchType, setSearchType] = useState('buy')

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/luxury-modern-home-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Over 10,000+ Properties Listed
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Find Your Dream Home Today
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-pretty">
            Discover luxury properties tailored to your lifestyle. Browse our curated collection of homes, apartments, and investment opportunities.
          </p>

          <div className="bg-card rounded-xl shadow-lg p-4 md:p-6">
            <div className="flex gap-2 mb-4">
              {['buy', 'rent', 'sell'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSearchType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    searchType === type
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-5 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Location"
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <div className="md:col-span-3 relative">
                <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Property Type"
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <div className="md:col-span-2 relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Price"
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <div className="md:col-span-2">
                <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
