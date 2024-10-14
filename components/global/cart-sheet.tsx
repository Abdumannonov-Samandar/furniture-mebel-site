import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"

// Bu funksiya haqiqiy ma'lumotlar bilan almashtirilishi kerak
const getCartItems = () => [
  { id: 1, name: "Stol", price: 199.99, quantity: 1 },
  { id: 2, name: "Stul", price: 89.99, quantity: 2 },
]

export function CartSheet() {
  const cartItems = getCartItems()
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Korzinka</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Korzinka</SheetTitle>
          <SheetDescription>Sizning buyurtmalaringiz</SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon"><Minus className="h-4 w-4" /></Button>
                <span>{item.quantity}</span>
                <Button variant="outline" size="icon"><Plus className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Jami:</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </div>
          <Button className="w-full">Buyurtma berish</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}