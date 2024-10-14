
// Footer information
export const footerInfo = {
    logo: "/logo.svg",
    address: "Manzil: Toshkent sh., Chilonzor tumani, 1-mavze",
    phone: "+998 90 123 45 67",
    navigationLinks: [
      { href: "/", label: "Bosh sahifa" },
      { href: "/shop", label: "Do`kon" },
      { href: "/about", label: "Haqimizda" },
      { href: "/contact", label: "Aloqa" },
    ],
    helpLinks: [
      { href: "/faq", label: "Ko`p so`raladigan savollar" },
      { href: "/shipping", label: "Yetkazib berish" },
      { href: "/returns", label: "Qaytarish" },
      { href: "/privacy", label: "Maxfiylik siyosati" },
    ],
    newsletterText: "Yangiliklar va maxsus takliflar haqida xabardor bo`ling",
    copyrightText: `${new Date().getFullYear()} Furniro. Barcha huquqlar himoyalangan.`,
  };


export const getCartItems = () => [
  { id: 1, name: "Stol", price: 199.99, quantity: 1 },
  { id: 2, name: "Stul", price: 89.99, quantity: 2 },
]