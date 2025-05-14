"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, PawPrint } from "lucide-react"

export default function Footer() {
  const [year, setYear] = useState<number>()

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  return (
    <footer className="bg-muted">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">PetPals</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              What your pet needs, when they need it. Premium products for cats and dogs with same-day delivery.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/shop?category=toys" className="text-sm text-muted-foreground hover:text-primary">
                  Pet Toys
                </Link>
              </li>
              <li>
                <Link href="/shop?category=food" className="text-sm text-muted-foreground hover:text-primary">
                  Pet Food
                </Link>
              </li>
              <li>
                <Link href="/shop?category=supplements" className="text-sm text-muted-foreground hover:text-primary">
                  Supplements
                </Link>
              </li>
              <li>
                <Link href="/shop?category=cat" className="text-sm text-muted-foreground hover:text-primary">
                  Cat Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=dog" className="text-sm text-muted-foreground hover:text-primary">
                  Dog Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Customer Service</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-muted-foreground hover:text-primary">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-muted-foreground hover:text-primary">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-sm text-muted-foreground hover:text-primary">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t">
            <p className="text-xs text-muted-foreground">
            &copy; {year ?? "—"} PetPals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
