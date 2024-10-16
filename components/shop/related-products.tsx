"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader} from '@/components/ui/card'
import { products } from '@/data/mock'


const RelatedProducts = () => {
  return (
    <section className="pt-12 pb-10">
    <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl text-center font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <Card key={product.id} className="p-0 group overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={285}
                  height={301}
                  className="w-full h-[301px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.sale && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    50%
                  </span>
                )}
                {product.new && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                <Button size={'lg'} variant="outline" className="absolute top-1/2 right-1/4 left-1/4 max-w-40 hidden group-hover:block bg-zinc-100 border-zinc-300 text-zinc-500 hover:bg-zinc-200 hover:border-zinc-500 hover:text-zinc-700">Add to cart</Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 bg-zinc-200 transition-colors duration-300 group-hover:bg-zinc-300">
              <h3 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.desc}</p>
              <p className="text-muted-foreground">Rp {product.price.toLocaleString()}</p>
            </CardContent>
          </Card>
          ))}
        </div>
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} variant="outline" size="lg" className="text-orange-800 border-orange-800 mt-10 mx-auto block w-[245px] h-[48px]">
          Show more
        </Button>
    </div>
      </section>
  )
}

export default RelatedProducts