'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface WishlistButtonProps {
  productId: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export default function WishlistButton({ productId, className, variant = 'ghost', size = 'icon' }: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { toast } = useToast();

  // Check if product is in wishlist on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        const wishlistIds = JSON.parse(savedWishlist) as string[];
        setIsInWishlist(wishlistIds.includes(productId));
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage:', error);
      }
    }
  }, [productId]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const savedWishlist = localStorage.getItem('wishlist');
    let wishlistIds: string[] = [];

    if (savedWishlist) {
      try {
        wishlistIds = JSON.parse(savedWishlist) as string[];
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage:', error);
      }
    }

    if (isInWishlist) {
      // Remove from wishlist
      wishlistIds = wishlistIds.filter((id) => id !== productId);
      toast({
        title: 'Removed from wishlist',
        description: 'The item has been removed from your wishlist',
      });
    } else {
      // Add to wishlist
      wishlistIds.push(productId);
      toast({
        title: 'Added to wishlist',
        description: 'The item has been added to your wishlist',
      });
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlistIds));
    setIsInWishlist(!isInWishlist);
  };

  return (
    <Button variant={variant} size={size} className={cn(className, 'gap-0')} onClick={toggleWishlist} aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}>
      <Heart className={cn('h-5 w-5', isInWishlist && 'fill-primary text-primary')} />
      {size !== 'icon' && <span className=""></span>}
    </Button>
  );
}
