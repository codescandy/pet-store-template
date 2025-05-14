import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PawPrint, Heart, ShieldCheck, Truck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop"
          width={1600}
          height={500}
          alt="Happy pets with owners"
          className="w-full h-[400px] object-cover"
          priority
        />
        <div className="container absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center h-[400px]  text-center">
          <PawPrint className="h-12 w-12 text-white mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">About PetPals</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl">
            We're on a mission to make pet care easier, healthier, and more joyful for pets and their owners.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  PetPals was founded in 2018 by a group of passionate pet owners who were frustrated with the lack of
                  high-quality, convenient pet supplies available in the market.
                </p>
                <p>
                  What started as a small online store operating out of a garage has grown into a trusted destination
                  for pet owners across the country, offering premium products for cats and dogs.
                </p>
                <p>
                  Our team consists of veterinarians, animal nutritionists, and pet lovers who carefully select each
                  product we offer, ensuring they meet our high standards for quality, safety, and sustainability.
                </p>
                <p>
                  We believe that pets are family, and they deserve the very best. That's why we're committed to
                  providing products that enhance the lives of pets and strengthen the bond between pets and their
                  owners.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0" />
              <Image
                src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?q=80&w=500&auto=format&fit=crop"
                width={500}
                height={500}
                alt="PetPals founders with their pets"
                className="rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg mb-12">
            To provide pet owners with convenient access to premium products that improve the health, happiness, and
            well-being of their beloved companions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We rigorously test and carefully select each product to ensure it meets our high standards for quality
                and safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Our team of veterinarians and pet experts provide trusted advice to help you make informed decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Convenience</h3>
              <p className="text-muted-foreground">
                We deliver what your pet needs, when they need it, with same-day delivery and hassle-free returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">
            Our dedicated team of pet lovers works tirelessly to bring you the best products and service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: "Sam Wilson",
                role: "Head Veterinarian",
                image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: "Jamie Smith",
                role: "Product Specialist",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: "Taylor Brown",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&auto=format&fit=crop",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-48 h-48 mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/10 transform rotate-45" />
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={200}
                    height={200}
                    alt={member.name}
                    className="rounded-full object-cover w-48 h-48 relative z-10"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "PetPals has been a game-changer for me and my two cats. The quality of their products is exceptional, and the convenience of same-day delivery is unbeatable.",
                author: "Michelle K.",
                location: "New York, NY",
              },
              {
                quote:
                  "I love how carefully they select their products. My dog has allergies, and I've never had an issue with anything I've purchased from PetPals.",
                author: "David L.",
                location: "Austin, TX",
              },
              {
                quote:
                  "The customer service is outstanding. When I had an issue with an order, they resolved it immediately and even sent a little gift for my pet!",
                author: "Sarah M.",
                location: "Seattle, WA",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-white/80">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Subscribe to our newsletter for pet care tips, exclusive offers, and updates on new products.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border flex-1"
              required
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
