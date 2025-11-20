import { Award, Leaf, Clock } from 'lucide-react'

export default function RestaurantAbout() {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized by Michelin Guide and top culinary publications',
    },
    {
      icon: Leaf,
      title: 'Farm to Table',
      description: 'Fresh, locally-sourced ingredients from sustainable farms',
    },
    {
      icon: Clock,
      title: 'Since 2010',
      description: 'Over a decade of culinary excellence and innovation',
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <img
                src="/elegant-restaurant-dining-room-with-beautiful-plat.jpg"
                alt="Restaurant interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-lg -z-10" />
          </div>

          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              A passion for exceptional cuisine
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Savoria, we believe that dining is an art form. Our culinary team meticulously crafts each dish using only the finest seasonal ingredients, creating flavors that tell a story.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our intimate dining room to our innovative menu, every detail is designed to create an unforgettable experience that delights all your senses.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="text-center sm:text-left">
                  <feature.icon className="h-10 w-10 text-accent mb-3 mx-auto sm:mx-0" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
