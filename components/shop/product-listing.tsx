import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import { products } from '@/data/mock'

const ProductListing = () => {
  return (
  <section className="pb-10 pt-16">
    <div className="container px-4 md:px-8 mx-auto max-w-[1236px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover mb-4"
                    />
                    {product.sale && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Sale
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-muted-foreground">Rp {product.price.toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
        </div>
    </div>
  </section>
  )
}

export default ProductListing