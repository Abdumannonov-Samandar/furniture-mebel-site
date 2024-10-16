import Filter from "@/components/shop/filter"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Grid, LayoutGrid } from "lucide-react"
// import Image from "next/image"

const Page = () => {
  return (
    <main>
      {/* Shop Section */}
        <section className="pt-[121px] pb-[100px] text-center bg-[url('/shop_bg.png')] bg-cover">
        <div className="container px-4 md:px-8 mx-auto">
          <h1 className="text-4xl font-bold mb-2">Shop</h1>
            <p className="text-muted-foreground">
              Home <span className="mx-2">&gt;</span> Shop
            </p>
        </div>
       </section>

       {/* Filter and Sort Section */}
      <Filter/>

    </main>
  )
}

export default Page