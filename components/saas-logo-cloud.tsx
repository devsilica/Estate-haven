export default function LogoCloud() {
  const companies = [
    { name: 'Netflix', metric: '20 days saved', detail: 'on daily builds' },
    { name: 'TripAdvisor', metric: '98% faster', detail: 'time to market' },
    { name: 'Box', metric: '300% increase', detail: 'in SEO' },
    { name: 'eBay', metric: '6x faster', detail: 'to build + deploy' },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-muted/30">
      <div className="container mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground mb-12 uppercase tracking-wide">
          Trusted by the world's leading companies
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <div key={company.name} className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="text-2xl font-bold mb-2 text-foreground">{company.metric}</div>
              <div className="text-sm text-muted-foreground mb-3">{company.detail}</div>
              <div className="text-xl font-semibold text-foreground">{company.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
