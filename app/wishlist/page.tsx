"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { products } from "@/lib/products"
import type { Product } from "@/lib/types"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])
  const { addToCart } = useCart()

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      try {
        const wishlistIds = JSON.parse(savedWishlist) as string[]
        const items = products.filter((product) => wishlistIds.includes(product.id))
        setWishlistItems(items)
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error)
      }
    }
  }, [])

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    const wishlistIds = wishlistItems.map((item) => item.id)
    localStorage.setItem("wishlist", JSON.stringify(wishlistIds))
  }, [wishlistItems])

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  // For demo purposes, if wishlist is empty, add some sample products
  useEffect(() => {
    if (wishlistItems.length === 0) {
      // Add some sample products to the wishlist for demonstration
      const sampleWishlist = products.slice(0, 4)
      setWishlistItems(sampleWishlist)
    }
  }, [wishlistItems.length])

  if (wishlistItems.length === 0) {
    return (
      <div className="container px-4 py-16 text-center">
        <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
        <h1 className="mt-6 text-3xl font-bold">Your wishlist is empty</h1>
        <p className="mt-2 text-muted-foreground">Save items you love to your wishlist and revisit them anytime.</p>
        <Button asChild className="mt-8">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=300"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-60 object-cover"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-primary"
                onClick={() => removeFromWishlist(product.id)}
              >
                <Trash2 className="h-5 w-5" />
                <span className="sr-only">Remove from wishlist</span>
              </Button>
            </div>
            <div className="p-4">
              <Link href={`/product/${product.id}`} className="hover:underline">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              </Link>
              <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
                <Button onClick={() => handleAddToCart(product)} size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/shop">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
        </Button>
      </div>
    </div>
  )
}
