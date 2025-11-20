export default function RestaurantChef() {
  return (
    <section id="chef" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Meet Our Chef
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Chef Maria Delgado
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              With over 20 years of culinary experience across three continents, Chef Maria brings a unique perspective to modern cuisine. Trained in Paris and Tokyo, she combines classical techniques with innovative flavors.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Her passion for sustainability and local ingredients has earned Savoria recognition from Michelin Guide and numerous culinary awards.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-serif font-bold text-accent mb-1">2</div>
                <div className="text-sm text-muted-foreground">Michelin Stars</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Awards</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-accent mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <img
                src="/professional-chef-in-kitchen-preparing-gourmet-dis.jpg"
                alt="Chef Maria Delgado"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
