'use client';

import type React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/components/cart-provider';
import type { Product } from '@/lib/types';
import WishlistButton from '@/components/wishlist-button';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <Card
        className={cn('overflow-hidden transition-all duration-200 h-full', isHovered && 'shadow-md transform translate-y-[-4px]')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            width={300}
            height={300}
            className={cn('w-full object-cover transition-transform duration-300', compact ? 'h-40' : 'h-60', isHovered && 'scale-105', !imageLoaded && 'opacity-0')}
            onLoad={() => setImageLoaded(true)}
          />

          {product.isNew && <Badge className="absolute top-2 left-2 bg-primary">New</Badge>}

          {product.discount > 0 && <Badge className="absolute top-2 right-2 bg-green-600">{product.discount}% OFF</Badge>}

          {!compact && (
            <div className={cn('absolute bottom-0 right-0  p-2 transform transition-transform duration-300', isHovered ? 'translate-y-0' : 'translate-y-0')}>
              <Button className=" bg-white text-primary hover:bg-white/90" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <CardContent className={cn('p-4', compact && 'p-3')}>
          <h3 className={cn('font-semibold line-clamp-1', compact ? 'text-sm' : 'text-lg')}>{product.name}</h3>

          {!compact && <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{product.description}</p>}

          <div className="flex items-center mt-2">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className={cn('h-4 w-4', i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')} />
                ))}
            </div>
            {!compact && <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>}
          </div>
        </CardContent>

        <CardFooter className={cn('flex items-center justify-between px-4 py-3 border-t border-muted/50', compact && 'px-4 py-3')}>
          <div>
            {product.originalPrice && product.originalPrice > product.price ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
                <span className="text-muted-foreground text-sm line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
            )}
          </div>

          {compact ? (
            <Button size="sm" variant="ghost" className="p-0 h-8 w-8" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          ) : (
            <WishlistButton productId={product.id} size="sm" variant="ghost" className="p-0 h-8 w-8" />
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
