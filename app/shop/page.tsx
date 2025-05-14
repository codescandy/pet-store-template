import { Suspense } from "react"
import { products } from "@/lib/products"
import ProductGrid from "@/components/product-grid"
import ShopFilters from "@/components/shop-filters"
import { Skeleton } from "@/components/ui/skeleton"

interface ShopPageProps {
  searchParams: {
    category?: string
    pet?: string
    sort?: string
    min?: string
    max?: string
  }
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  // Filter products based on search params
  let filteredProducts = [...products]

  // Filter by category
  if (searchParams.category) {
    filteredProducts = filteredProducts.filter((product) => product.category === searchParams.category)
  }

  // Filter by pet type
  if (searchParams.pet) {
    filteredProducts = filteredProducts.filter((product) => product.pet === searchParams.pet || product.pet === "both")
  }

  // Filter by price range
  if (searchParams.min) {
    filteredProducts = filteredProducts.filter((product) => product.price >= Number.parseFloat(searchParams.min || "0"))
  }

  if (searchParams.max) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= Number.parseFloat(searchParams.max || "1000"),
    )
  }

  // Sort products
  if (searchParams.sort) {
    switch (searchParams.sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filteredProducts.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      default:
        break
    }
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Shop Pet Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <ShopFilters />

        <div>
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={filteredProducts} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-60 w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </div>
        ))}
    </div>
  )
}
