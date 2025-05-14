import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions about our products or services? We're here to help! Reach out to our friendly team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-2">For general inquiries</p>
                <a href="mailto:info@petpals.com" className="text-primary hover:underline">
                  info@petpals.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-2">Mon-Fri, 9am-6pm</p>
                <a href="tel:+18001234567" className="text-primary hover:underline">
                  1-800-123-4567
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-sm text-muted-foreground mb-2">Our headquarters</p>
                <address className="not-italic text-sm">
                  123 Pet Street
                  <br />
                  San Francisco, CA 94103
                </address>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-sm text-muted-foreground mb-2">When we're available</p>
                <ul className="text-sm space-y-1">
                  <li>Monday-Friday: 9am-6pm</li>
                  <li>Saturday: 10am-4pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">What are your shipping options?</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  We offer free same-day delivery for orders over $35 placed before 2pm. Standard shipping (2-3 days) is
                  available for all other orders.
                </p>
              </div>
              <div>
                <h4 className="font-medium">How can I track my order?</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Once your order ships, you'll receive a tracking number via email that you can use to monitor your
                  delivery.
                </p>
              </div>
              <div>
                <h4 className="font-medium">What is your return policy?</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  We offer a 30-day return policy on all unused items. Please contact our customer service team to
                  initiate a return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
        <div className="rounded-lg overflow-hidden h-[400px] bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143067466!2d-122.41941492392031!3d37.77492997197701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter!5e0!3m2!1sen!2sus!4v1684195272267!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PetPals Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
