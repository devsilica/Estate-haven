'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const categories = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
  ]

  const menuItems = {
    appetizers: [
      {
        name: 'Burrata with Heirloom Tomatoes',
        description: 'Creamy burrata, heritage tomatoes, basil oil, aged balsamic',
        price: '$18',
      },
      {
        name: 'Seared Scallops',
        description: 'Pan-seared scallops, cauliflower purée, crispy pancetta',
        price: '$24',
      },
      {
        name: 'Wild Mushroom Soup',
        description: 'Seasonal mushrooms, truffle oil, herb crème fraîche',
        price: '$16',
      },
    ],
    mains: [
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Prime wagyu, potato fondant, seasonal vegetables, red wine reduction',
        price: '$62',
      },
      {
        name: 'Pan-Roasted Halibut',
        description: 'Wild-caught halibut, saffron risotto, grilled asparagus',
        price: '$48',
      },
      {
        name: 'Duck Breast à l\'Orange',
        description: 'Honey-glazed duck, orange gastrique, roasted root vegetables',
        price: '$54',
      },
    ],
    desserts: [
      {
        name: 'Chocolate Fondant',
        description: 'Molten chocolate cake, vanilla bean ice cream, raspberry coulis',
        price: '$14',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic French custard, caramelized sugar, fresh berries',
        price: '$12',
      },
      {
        name: 'Seasonal Tart',
        description: 'Chef\'s selection, vanilla whipped cream, fruit compote',
        price: '$13',
      },
    ],
  }

  return (
    <section id="menu" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Our Menu
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Seasonal selections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each dish is carefully crafted to showcase the finest ingredients of the season
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                  : 'border-border hover:bg-accent/10'
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
            <Card
              key={item.name}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {item.name}
                </h3>
                <span className="text-lg font-semibold text-accent">{item.price}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
