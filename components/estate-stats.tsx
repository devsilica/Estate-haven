import { TrendingUp, Users, Award, Building } from 'lucide-react'

const stats = [
  {
    icon: Building,
    value: '10,000+',
    label: 'Properties Listed',
  },
  {
    icon: Users,
    value: '25,000+',
    label: 'Happy Clients',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Success Rate',
  },
]

export default function Stats() {
  return (
    <section className="py-20 md:py-32 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-foreground/10 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
