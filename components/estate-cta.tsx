import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-accent text-accent-foreground p-8 md:p-16 lg:p-20">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Get started today and let our expert team help you discover the property of your dreams. Register now for exclusive access to new listings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                Register Interest
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                Schedule a Viewing
              </Button>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-foreground/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
