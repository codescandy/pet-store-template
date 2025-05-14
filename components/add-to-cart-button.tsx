"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/types"
import { cn } from "@/lib/utils"

interface AddToCartButtonProps {
  product: Product
  quantity?: number
  className?: string
}

export default function AddToCartButton({ product, quantity = 1, className }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <Button
      onClick={handleAddToCart}
      className={cn("bg-primary hover:bg-primary/90", className)}
      disabled={product.stock === 0}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
    </Button>
  )
}
