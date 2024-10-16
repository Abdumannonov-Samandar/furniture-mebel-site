import Filter from "@/components/shop/filter"
import ProductListing from "@/components/shop/product-listing"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
const Page = () => {
  return (
    <main>
      {/* Shop Section */}
        <section className="pt-[121px] pb-[100px] text-center bg-[url('/shop_bg.png')] bg-cover">
        <div className="container px-4 md:px-8 mx-auto">
          <h1 className="text-5xl font-bold mb-2">Shop</h1>
          <Breadcrumb className="flex items-center justify-center">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

        </div>
       </section>

       {/* Filter and Sort Section */}
      <Filter/>

      {/* Product Listing Section */}
      <ProductListing/>

    </main>
  )
}

export default Page