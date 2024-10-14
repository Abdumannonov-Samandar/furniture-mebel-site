import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCircle, Search, Heart } from "lucide-react"
import { CartSheet } from "./cart-sheet"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="border-b py-4">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            width={30}
            height={30}
            src="/logo.svg"
            alt="Workflow"
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-sm font-medium hover:underline">
            Bosh sahifa
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:underline">
            Do`kon
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            Haqimizda
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Aloqa
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
            <span className="sr-only">Foydalanuvchi profili</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Qidirish</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Sevimlilar</span>
          </Button>
          <CartSheet />
        </div>
        </div>
      </div>
    </header>
  )
}