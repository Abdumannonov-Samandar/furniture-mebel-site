import React from 'react'
import { feature } from '@/data/mock'

const Feature = () => {
  return (
    <section className="border-t pt-8 pb-12">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {feature.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">{item.icon}</span>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature