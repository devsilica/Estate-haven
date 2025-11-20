import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function RestaurantFooter() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Savoria</h3>
            <p className="text-background/80 leading-relaxed">
              Experience culinary excellence in an elegant atmosphere.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="text-background/80 hover:text-accent transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#chef" className="text-background/80 hover:text-accent transition-colors">
                  Chef
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-accent transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>123 Culinary Boulevard</li>
              <li>Downtown District, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>info@savoria.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; 2025 Savoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
