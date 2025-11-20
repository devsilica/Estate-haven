import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "FlowStack transformed how we ship products. What used to take weeks now takes days. The developer experience is unmatched.",
      author: "Sarah Johnson",
      role: "CTO at TechCorp",
      avatar: "/professional-woman-diverse.png",
      rating: 5,
    },
    {
      quote: "The best investment we've made in our infrastructure. Our team's productivity has doubled, and deployment anxiety is a thing of the past.",
      author: "Michael Chen",
      role: "Head of Engineering at StartupXYZ",
      avatar: "/professional-man.jpg",
      rating: 5,
    },
    {
      quote: "I've tried every platform out there. FlowStack is the only one that just works. It's fast, reliable, and the support team is incredible.",
      author: "Emily Rodriguez",
      role: "Lead Developer at DesignStudio",
      avatar: "/professional-woman-developer.png",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by developers worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams who trust FlowStack to power their applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
