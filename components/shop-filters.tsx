"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Cat, Dog, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ShopFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get current filter values from URL
  const currentCategory = searchParams.get("category") || ""
  const currentPet = searchParams.get("pet") || ""
  const currentSort = searchParams.get("sort") || ""
  const currentMinPrice = searchParams.get("min") ? Number.parseFloat(searchParams.get("min") as string) : 0
  const currentMaxPrice = searchParams.get("max") ? Number.parseFloat(searchParams.get("max") as string) : 100

  // Local state for filters
  const [category, setCategory] = useState(currentCategory)
  const [pet, setPet] = useState(currentPet)
  const [sort, setSort] = useState(currentSort)
  const [priceRange, setPriceRange] = useState<[number, number]>([currentMinPrice, currentMaxPrice])

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (category) {
      params.set("category", category)
    } else {
      params.delete("category")
    }

    if (pet) {
      params.set("pet", pet)
    } else {
      params.delete("pet")
    }

    if (sort) {
      params.set("sort", sort)
    } else {
      params.delete("sort")
    }

    if (priceRange[0] > 0) {
      params.set("min", priceRange[0].toString())
    } else {
      params.delete("min")
    }

    if (priceRange[1] < 100) {
      params.set("max", priceRange[1].toString())
    } else {
      params.delete("max")
    }

    router.push(`/shop?${params.toString()}`)
  }, [category, pet, sort, priceRange, router, searchParams])

  // Reset all filters
  const resetFilters = () => {
    setCategory("")
    setPet("")
    setSort("")
    setPriceRange([0, 100])
    router.push("/shop")
  }

  // Check if any filters are active
  const hasActiveFilters = category || pet || sort || priceRange[0] > 0 || priceRange[1] < 100

  return (
    <div className="space-y-6">
      {hasActiveFilters && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Active Filters</h3>
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs">
            <X className="h-3 w-3 mr-1" />
            Clear All
          </Button>
        </div>
      )}

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {category && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {category}
              <Button variant="ghost" size="icon" onClick={() => setCategory("")} className="h-4 w-4 p-0 ml-1">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove category filter</span>
              </Button>
            </Badge>
          )}

          {pet && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Pet: {pet}
              <Button variant="ghost" size="icon" onClick={() => setPet("")} className="h-4 w-4 p-0 ml-1">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove pet filter</span>
              </Button>
            </Badge>
          )}

          {(priceRange[0] > 0 || priceRange[1] < 100) && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Price: ${priceRange[0]} - ${priceRange[1]}
              <Button variant="ghost" size="icon" onClick={() => setPriceRange([0, 100])} className="h-4 w-4 p-0 ml-1">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove price filter</span>
              </Button>
            </Badge>
          )}
        </div>
      )}

      <Accordion type="multiple" defaultValue={["category", "pet", "price", "sort"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="category-toys"
                  checked={category === "toys"}
                  onCheckedChange={() => setCategory(category === "toys" ? "" : "toys")}
                />
                <Label htmlFor="category-toys">Toys</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="category-food"
                  checked={category === "food"}
                  onCheckedChange={() => setCategory(category === "food" ? "" : "food")}
                />
                <Label htmlFor="category-food">Food</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="category-supplements"
                  checked={category === "supplements"}
                  onCheckedChange={() => setCategory(category === "supplements" ? "" : "supplements")}
                />
                <Label htmlFor="category-supplements">Supplements</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pet">
          <AccordionTrigger>Pet Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pet-cat"
                  checked={pet === "cat"}
                  onCheckedChange={() => setPet(pet === "cat" ? "" : "cat")}
                />
                <Label htmlFor="pet-cat" className="flex items-center">
                  <Cat className="h-4 w-4 mr-1" /> Cats
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pet-dog"
                  checked={pet === "dog"}
                  onCheckedChange={() => setPet(pet === "dog" ? "" : "dog")}
                />
                <Label htmlFor="pet-dog" className="flex items-center">
                  <Dog className="h-4 w-4 mr-1" /> Dogs
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[priceRange[0], priceRange[1]]}
                max={100}
                step={1}
                value={[priceRange[0], priceRange[1]]}
                onValueChange={(value) => setPriceRange([value[0], value[1]])}
                className="my-6"
              />
              <div className="flex items-center justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sort">
          <AccordionTrigger>Sort By</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sort-price-asc"
                  checked={sort === "price-asc"}
                  onCheckedChange={() => setSort(sort === "price-asc" ? "" : "price-asc")}
                />
                <Label htmlFor="sort-price-asc">Price: Low to High</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sort-price-desc"
                  checked={sort === "price-desc"}
                  onCheckedChange={() => setSort(sort === "price-desc" ? "" : "price-desc")}
                />
                <Label htmlFor="sort-price-desc">Price: High to Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sort-rating"
                  checked={sort === "rating"}
                  onCheckedChange={() => setSort(sort === "rating" ? "" : "rating")}
                />
                <Label htmlFor="sort-rating">Highest Rated</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sort-newest"
                  checked={sort === "newest"}
                  onCheckedChange={() => setSort(sort === "newest" ? "" : "newest")}
                />
                <Label htmlFor="sort-newest">Newest First</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
