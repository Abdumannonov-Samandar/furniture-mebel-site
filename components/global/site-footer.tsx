import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 py-12 md:py-16">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Furniro</h3>
            <p className="text-sm text-gray-600 mb-4">
              Manzil: Toshkent sh., Chilonzor tumani, 1-mavze
            </p>
            <p className="text-sm text-gray-600">
              Tel: +998 90 123 45 67
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Havolalar</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:underline">Bosh sahifa</Link></li>
              <li><Link href="/shop" className="text-sm text-gray-600 hover:underline">Do`kon</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:underline">Haqimizda</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:underline">Aloqa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Yordam</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm text-gray-600 hover:underline">Ko`p so`raladigan savollar</Link></li>
              <li><Link href="/shipping" className="text-sm text-gray-600 hover:underline">Yetkazib berish</Link></li>
              <li><Link href="/returns" className="text-sm text-gray-600 hover:underline">Qaytarish</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:underline">Maxfiylik siyosati</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Yangiliklar</h3>
            <p className="text-sm text-gray-600 mb-4">
              Yangiliklar va maxsus takliflar haqida xabardor bo`ling
            </p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="E-mail manzilingiz" className="flex-grow" />
              <Button type="submit">Obuna</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Furniro. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}