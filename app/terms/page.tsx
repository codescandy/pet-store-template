import Link from "next/link"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: May 13, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to PetPals. These terms and conditions outline the rules and regulations for the use of our website.
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
            PetPals if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2>1. Definitions</h2>
          <p>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
            any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and
            accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to
            PetPals. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or
            ourselves.
          </p>

          <h2>2. License</h2>
          <p>
            Unless otherwise stated, PetPals and/or its licensors own the intellectual property rights for all material
            on PetPals. All intellectual property rights are reserved. You may view and/or print pages from the website
            for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from the website</li>
            <li>Reproduce, duplicate or copy material from the website</li>
            <li>Redistribute content from PetPals (unless content is specifically made for redistribution)</li>
          </ul>

          <h2>3. User Comments</h2>
          <p>
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information,
            material and data. PetPals does not screen, edit, publish or review Comments prior to their appearance on
            the website and Comments do not reflect the views or opinions of PetPals, its agents or affiliates. Comments
            reflect the view and opinion of the person who posts such view or opinion.
          </p>
          <p>You are responsible for:</p>
          <ul>
            <li>Ensuring that any Comments you post comply with these Terms and Conditions</li>
            <li>
              Ensuring that any Comments do not infringe any third-party legal rights (such as copyright, trademark,
              privacy, etc.)
            </li>
            <li>
              Ensuring that any Comments are not illegal, obscene, defamatory, threatening, invasive of privacy,
              infringing of intellectual property rights, or otherwise injurious to third parties
            </li>
            <li>
              Ensuring that any Comments do not contain any material that solicits personal information from anyone
              under 18 or exploits people under the age of 18 in a sexual or violent manner
            </li>
          </ul>

          <h2>4. Product Information</h2>
          <p>
            PetPals strives to provide accurate product information, descriptions, and images. However, we do not
            warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or
            error-free. If a product offered by PetPals is not as described, your sole remedy is to return it in unused
            condition.
          </p>

          <h2>5. Pricing and Payment</h2>
          <p>
            All prices are shown in US dollars and are exclusive of taxes unless otherwise specified. We reserve the
            right to change prices for products displayed at any time, and to correct pricing errors that may
            inadvertently occur.
          </p>
          <p>
            Payment can be made through various payment methods we have available, such as Visa, MasterCard, American
            Express cards or online payment methods (PayPal, for example).
          </p>

          <h2>6. Shipping and Delivery</h2>
          <p>
            PetPals ships to addresses within the United States. When you place an order, we will estimate shipping and
            delivery dates for you based on the availability of your items and the shipping options you choose.
            Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes
            page.
          </p>

          <h2>7. Returns and Refunds</h2>
          <p>
            We offer a 30-day return policy for most items. To be eligible for a return, your item must be unused and in
            the same condition that you received it. It must also be in the original packaging. Several types of goods
            are exempt from being returned, including perishable goods such as food, flowers, newspapers or magazines.
          </p>

          <h2>8. Disclaimer</h2>
          <p>
            The materials on PetPals's website are provided on an 'as is' basis. PetPals makes no warranties, expressed
            or implied, and hereby disclaims and negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2>9. Limitations</h2>
          <p>
            In no event shall PetPals or its suppliers be liable for any damages (including, without limitation, damages
            for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
            materials on PetPals's website, even if PetPals or a PetPals authorized representative has been notified
            orally or in writing of the possibility of such damage.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States
            and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            PetPals reserves the right, at our sole discretion, to update, change or replace any part of these Terms of
            Service by posting updates and changes to our website. It is your responsibility to check our website
            periodically for changes.
          </p>

          <h2>12. Contact Information</h2>
          <p>Questions about the Terms of Service should be sent to us at:</p>
          <address>
            PetPals
            <br />
            123 Pet Street
            <br />
            San Francisco, CA 94103
            <br />
            Email: <a href="mailto:terms@petpals.com">terms@petpals.com</a>
            <br />
            Phone: 1-800-123-4567
          </address>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="text-primary hover:underline">
            Contact Us
          </Link>
          {" | "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
