import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Modern Villa with Ocean View',
    location: 'Malibu, California',
    price: '$4,500,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    image: '/luxury-modern-villa-ocean-view.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Downtown Luxury Penthouse',
    location: 'New York, NY',
    price: '$3,200,000',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    image: '/luxury-penthouse-city-view.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Contemporary Family Home',
    location: 'Austin, Texas',
    price: '$1,850,000',
    beds: 4,
    baths: 3,
    sqft: '3,500',
    image: '/modern-family-home.png',
    featured: false,
  },
  {
    id: 4,
    title: 'Luxury Waterfront Estate',
    location: 'Miami, Florida',
    price: '$6,800,000',
    beds: 6,
    baths: 5,
    sqft: '5,800',
    image: '/waterfront-luxury-estate.jpg',
    featured: true,
  },
]

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-background/90 hover:bg-background p-2 rounded-full transition-colors">
                  <Heart className="h-5 w-5 text-foreground" />
                </button>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {property.title}
                    </h3>
                    <p className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </p>
                  </div>
                  <span className="font-bold text-xl text-accent">{property.price}</span>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Square className="h-4 w-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
