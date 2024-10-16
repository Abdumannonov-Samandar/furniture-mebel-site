import React from 'react'
import Image from 'next/image'
import { Heart, Minus, Plus, Star } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import AnimateButton from '@/components/shop/animate-button'

const Details = () => {
  return (
    <section className="py-10">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-row-reverse gap-4 md:justify-between">
          <div className="relative aspect-square">
            <Image
              width={481}
              height={500}
              src="https://picsum.photos/800"
              alt="Asgaard sofa"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative">
                <Image
                  src={`https://picsum.photos/220${i + 1}`}
                  alt={`Asgaard sofa thumbnail ${i + 1}`}
                  width={90}
                  height={80}
                  className="rounded-md md:w-[200px] md:h-[107px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Asgaard sofa</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-500">(5 Customer Reviews)</span>
          </div>
          <p className="text-2xl font-bold">Rs. 250,000.00</p>
          <p className="text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
            well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <div>
            <h3 className="font-semibold mb-2">Color</h3>
            <RadioGroup defaultValue="blue" className="flex space-x-2">
              <RadioGroupItem value="blue" id="blue" className="w-6 h-6 rounded-full bg-blue-500" />
              <RadioGroupItem value="green" id="green" className="w-6 h-6 rounded-full bg-green-500" />
              <RadioGroupItem value="orange" id="orange" className="w-6 h-6 rounded-full bg-orange-500" />
            </RadioGroup>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4">1</span>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <AnimateButton />
            <Button variant="outline" className="hover:animate-spin duration-300" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            
          </div>
          <div className="border-t pt-4 space-y-3">
            <p className="text-sm text-gray-500">
              SKU: <span className="font-medium text-gray-900">SS001</span>
            </p>
            <p className="text-sm text-gray-500">
              Category: <span className="font-medium text-gray-900">Sofas</span>
            </p>
            <p className="text-sm text-gray-500">
              Tags: <span className="font-medium text-gray-900">Sofa, Chair, Home, Shop</span>
            </p>
          </div>
        </div>
      </div>


      <Tabs defaultValue="description" className="mt-12 md:max-w-3xl">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="additional">Additional Information</TabsTrigger>
          <TabsTrigger value="reviews">Reviews [5]</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-28 md:mt-4">
          <p className="text-gray-600">
            Embodying the raw, wayward spirit of rock `n` roll, the Kilburn portable active stereo speaker takes the
            unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7
            pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a
            clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow
            you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy
            and stylish travel.
          </p>
        </TabsContent>
        <TabsContent value="additional" className="mt-28 md:mt-4">
          <p className="text-gray-600">Additional information about the product goes here.</p>
        </TabsContent>
        <TabsContent value="reviews" className="mt-28 md:mt-4">
          <p className="text-gray-600">Customer reviews go here.</p>
        </TabsContent>
      </Tabs>
      </div>
      </section>
  )
}

export default Details