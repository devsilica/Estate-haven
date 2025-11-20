import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-accent text-accent-foreground">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to ship faster?
          </h2>
          <p className="text-lg mb-10 text-accent-foreground/90 max-w-2xl mx-auto text-balance leading-relaxed">
            Join thousands of developers building the next generation of web applications with FlowStack. Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-medium">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="font-medium border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
