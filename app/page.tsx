import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, RotateCcw, ShieldCheck, HeadphonesIcon, PawPrint, Cat, Dog } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { products } from '@/lib/products';
import HeroSlider from '@/components/hero-slider';

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 8);
  const catProducts = products.filter((product) => product.pet === 'cat').slice(0, 4);
  const dogProducts = products.filter((product) => product.pet === 'dog').slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Slider */}
      <HeroSlider
        slides={[
          {
            image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1920&auto=format&fit=crop',
            title: 'What your pet needs, when they need it.',
            description: 'Premium products for cats and dogs with same-day delivery.',
            buttonText: 'Shop Now',
            buttonLink: '/shop',
          },
          {
            image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=1920&auto=format&fit=crop',
            title: 'Quality Pet Food & Supplements',
            description: "Nutritious options for your furry friends' health and happiness.",
            buttonText: 'Explore Food',
            buttonLink: '/shop?category=food',
          },
          {
            image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1920&auto=format&fit=crop',
            title: 'Fun & Engaging Pet Toys',
            description: 'Keep your pets active and entertained with our toy collection.',
            buttonText: 'View Toys',
            buttonLink: '/shop?category=toys',
          },
        ]}
      />

      {/* Features Section */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Free Same-Day Delivery</h3>
                <p className="text-sm text-muted-foreground mt-2">Order before 2pm for same-day delivery</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <RotateCcw className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">30-Day Return</h3>
                <p className="text-sm text-muted-foreground mt-2">No questions asked return policy</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-muted-foreground mt-2">100% secure payment processing</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-muted-foreground mt-2">Customer support available anytime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="text-muted-foreground mt-2">Handpicked products for your furry friends</p>
            </div>
            <Button asChild variant="link" className="text-primary mt-2 md:mt-0">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pet Categories */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cat Products */}
            <div>
              <div className="flex items-center mb-6">
                <Cat className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Cat Products</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} compact />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link href="/shop?category=cat">View All Cat Products</Link>
                </Button>
              </div>
            </div>

            {/* Dog Products */}
            <div>
              <div className="flex items-center mb-6">
                <Dog className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Dog Products</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dogProducts.map((product) => (
                  <ProductCard key={product.id} product={product} compact />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link href="/shop?category=dog">View All Dog Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <PawPrint className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join Our Pack</h2>
            <p className="text-white/90 mb-6">Subscribe to our newsletter for exclusive offers, pet care tips, and new product alerts.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-md flex-1 text-black" required />
              <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
