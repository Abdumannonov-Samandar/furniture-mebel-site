import React from 'react'

const Page = () => {
  return (
    <main>
        <section className="py-12 pt-[121px] pb-[100px] text-center bg-[url('/shop_bg.png')] bg-cover">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Shop</h1>
            <p className="text-muted-foreground">
              Home <span className="mx-2">&gt;</span> Shop
            </p>
        </div>
       </section>
    </main>
  )
}

export default Page