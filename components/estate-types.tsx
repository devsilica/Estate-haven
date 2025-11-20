import { Card, CardContent } from '@/components/ui/card'
import { Home, Building2, TreePine, Warehouse } from 'lucide-react'

const propertyTypes = [
  {
    icon: Home,
    title: 'Residential Homes',
    description: 'Single-family homes perfect for families',
    count: '2,450+',
  },
  {
    icon: Building2,
    title: 'Apartments',
    description: 'Modern apartments in prime locations',
    count: '1,820+',
  },
  {
    icon: TreePine,
    title: 'Vacation Homes',
    description: 'Luxury getaways and second homes',
    count: '680+',
  },
  {
    icon: Warehouse,
    title: 'Commercial',
    description: 'Investment properties and offices',
    count: '340+',
  },
]

export default function PropertyTypes() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Browse by Property Type
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect property that matches your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent transition-colors">
                    <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <p className="text-2xl font-bold text-accent">{type.count}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
