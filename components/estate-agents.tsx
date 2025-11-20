import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone } from 'lucide-react'

const agents = [
  {
    name: 'Alexandra Carter',
    title: 'Senior Real Estate Agent',
    image: '/professional-real-estate-agent-woman.png',
    properties: 150,
    email: 'alexandra@estatehaven.com',
    phone: '+1 (555) 123-4567',
  },
  {
    name: 'David Martinez',
    title: 'Luxury Property Specialist',
    image: '/professional-real-estate-agent-man.png',
    properties: 120,
    email: 'david@estatehaven.com',
    phone: '+1 (555) 234-5678',
  },
  {
    name: 'Jessica Wong',
    title: 'Investment Property Expert',
    image: '/professional-real-estate-agent-asian-woman.jpg',
    properties: 180,
    email: 'jessica@estatehaven.com',
    phone: '+1 (555) 345-6789',
  },
]

export default function Agents() {
  return (
    <section id="agents" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Agents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Work with experienced professionals who know the market inside out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {agents.map((agent, index) => (
            <Card key={index} className="border-border bg-card overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">{agent.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{agent.title}</p>
                <p className="text-sm text-accent font-semibold mb-4">{agent.properties}+ Properties Sold</p>
                
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="w-full justify-start border-border">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Agent
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start border-border">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Agent
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
