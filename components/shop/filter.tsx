import React from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Grid, LayoutGrid } from 'lucide-react'

const filter = () => {
  return (
    <section className="py-6 bg-pink-100">
        <div className="container px-4 md:px-8 mx-auto max-w-[1236px]">
            <div className="flex flex-col sm:flex-row justify-between items-center ">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Button variant="outline" size="icon">
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Grid className="h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground">Showing 1-16 of 32 results</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Show:</p>
          <Select defaultValue="16">
            <SelectTrigger className="w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="32">32</SelectItem>
              <SelectItem value="48">48</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm font-medium">Short by:</p>
          <Select defaultValue="default">
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        </div>
        </div>
      </section>
  )
}

export default filter