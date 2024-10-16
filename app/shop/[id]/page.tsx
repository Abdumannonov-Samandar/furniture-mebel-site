import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList } from "@/components/ui/breadcrumb"
import RelatedProducts from "@/components/shop/related-products"
import Details from "@/components/shop/details"


export default function ProductDetail() {
  return (
    <main>
        {/* Breadcrumb */}
        <section className="py-10 bg-pink-100">
            <div className="container mx-auto px-4 md:px-8">
            <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Asgaard sofa</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
            </div>
        </section>

        
        {/* Product Details */}
        <Details/>
        
        {/* Related Products */}
        <RelatedProducts/>

    </main>
  )
}