'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="text-sm font-medium text-accent">New</span>
            <span className="text-sm text-muted-foreground">Introducing FlowStack 2.0</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            The complete platform to build the web
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl text-balance leading-relaxed">
            Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image/Mockup */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
              <img
                src="/modern-saas-dashboard-interface-dark-theme.jpg"
                alt="FlowStack Dashboard"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
