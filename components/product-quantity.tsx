"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from "lucide-react"

interface ProductQuantityProps {
  initialQuantity?: number
  maxQuantity: number
  onQuantityChange?: (quantity: number) => void
}

export default function ProductQuantity({ initialQuantity = 1, maxQuantity, onQuantityChange }: ProductQuantityProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const increment = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1
      setQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= 1 && value <= maxQuantity) {
      setQuantity(value)
      onQuantityChange?.(value)
    }
  }

  return (
    <div className="flex items-center">
      <span className="mr-4 font-medium">Quantity:</span>
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={decrement}
          disabled={quantity <= 1}
          className="h-9 w-9 rounded-r-none"
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        <Input
          type="number"
          min={1}
          max={maxQuantity}
          value={quantity}
          onChange={handleChange}
          className="h-9 w-14 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={increment}
          disabled={quantity >= maxQuantity}
          className="h-9 w-9 rounded-l-none"
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>
    </div>
  )
}
