import { Zap, Shield, Layers, BarChart, GitBranch, Workflow } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy your applications in seconds with our optimized infrastructure and edge network.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
    },
    {
      icon: Layers,
      title: 'Seamless Integration',
      description: 'Connect with your favorite tools and services through our extensive API ecosystem.',
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your application performance and user behavior.',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Built-in Git integration for seamless collaboration and deployment workflows.',
    },
    {
      icon: Workflow,
      title: 'Automated Workflows',
      description: 'Set up CI/CD pipelines and automate your entire development lifecycle.',
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything you need to build at scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            From local development to global production, FlowStack provides all the tools your team needs to ship faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border hover:border-accent/50 transition-all hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
