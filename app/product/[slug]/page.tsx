import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/lib/products';
import AddToCartButton from '@/components/add-to-cart-button';
import ProductQuantity from '@/components/product-quantity';
import RelatedProducts from '@/components/related-products';
import { cn } from '@/lib/utils';
import WishlistButton from '@/components/wishlist-button';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.slug !== product.slug && (p.category === product.category || p.pet === product.pet))
    .slice(0, 4);

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="sticky top-20">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <Image src={product.image || '/placeholder.svg?height=600&width=600'} alt={product.name} width={600} height={600} className="h-full w-full object-cover" priority />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-lg bg-muted">
                  <Image src={product.image || '/placeholder.svg?height=150&width=150'} alt={`Product view ${i}`} width={150} height={150} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <div className="mb-6">
            <Link href="/shop" className="text-sm text-primary hover:underline">
              Back to Shop
            </Link>
          </div>

          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="mt-2 flex items-center">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className={cn('h-5 w-5', i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')} />
                ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              {product.rating.toFixed(1)} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="mt-6">
            {product.originalPrice && product.originalPrice > product.price ? (
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
            )}
          </div>

          <div className="mt-6 space-y-6">
            <p className="text-muted-foreground">{product.description}</p>

            <div className="space-y-2">
              <div className="flex items-center">
                <div className={cn('h-3 w-3 rounded-full mr-2', product.stock > 20 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500')} />
                <span>{product.stock > 20 ? 'In Stock' : product.stock > 0 ? `Low Stock (${product.stock} left)` : 'Out of Stock'}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Truck className="mr-2 h-4 w-4" />
                <span>Free shipping on orders over $35</span>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <ProductQuantity maxQuantity={product.stock} />

              <div className="flex flex-col sm:flex-row gap-3">
                <AddToCartButton product={product} className="flex-1" />
                <WishlistButton productId={product.id} variant="outline" size="default" />
              </div>
            </div>

            <div className="border-t border-b py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-primary mr-2" />
                <div>
                  <p className="text-sm font-medium">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">For orders over $35</p>
                </div>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 text-primary mr-2" />
                <div>
                  <p className="text-sm font-medium">30-Day Returns</p>
                  <p className="text-xs text-muted-foreground">No questions asked</p>
                </div>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                <div>
                  <p className="text-sm font-medium">Secure Checkout</p>
                  <p className="text-xs text-muted-foreground">Protected payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger value="description" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3">
              Description
            </TabsTrigger>
            <TabsTrigger value="details" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3">
              Nutritional Details
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3">
              Reviews ({product.reviewCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6">
            <div className="space-y-4">
              <p>
                {product.description} Our premium quality {product.name} is designed to provide the best experience for your pet.
              </p>
              <p>Made with high-quality materials and ingredients, this product is safe and beneficial for your pet's health and happiness.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Premium quality materials</li>
                <li>Designed for pet comfort and enjoyment</li>
                <li>Durable and long-lasting</li>
                <li>Safe for all pets</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="details" className="pt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Nutritional Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Ingredients</h4>
                  <p className="text-sm text-muted-foreground mt-1">Premium protein sources, whole grains, vegetables, essential vitamins and minerals.</p>
                </div>
                <div>
                  <h4 className="font-medium">Guaranteed Analysis</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>Crude Protein: 26% min</li>
                    <li>Crude Fat: 15% min</li>
                    <li>Crude Fiber: 4% max</li>
                    <li>Moisture: 10% max</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Feeding Guidelines</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Feed adult pets 1/2 to 1 cup per 10 pounds of body weight daily, divided into two meals. Adjust as needed to maintain ideal body condition.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className={cn('h-5 w-5', i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')} />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">Based on {product.reviewCount} reviews</span>
                  </div>
                </div>
                <Button>Write a Review</Button>
              </div>

              <div className="space-y-6">
                {/* Sample reviews */}
                {[
                  {
                    name: 'Alex Johnson',
                    rating: 5,
                    date: '2 months ago',
                    comment: 'My pet absolutely loves this! Great quality and fast shipping.',
                  },
                  {
                    name: 'Sam Wilson',
                    rating: 4,
                    date: '3 months ago',
                    comment: "Good product overall. My pet enjoys it, but it's a bit pricey.",
                  },
                  {
                    name: 'Jamie Smith',
                    rating: 5,
                    date: '4 months ago',
                    comment: 'Excellent quality! Will definitely purchase again.',
                  },
                ].map((review, index) => (
                  <div key={index} className="border-b pb-6 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <div className="flex mt-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className={cn('h-4 w-4', i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')} />
                            ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
