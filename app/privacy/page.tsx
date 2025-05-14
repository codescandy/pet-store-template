import Link from "next/link"
import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: May 13, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            At PetPals, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or make a purchase. Please read this privacy policy
            carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information about you in various ways when you use our website. This information may include:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, postal address, phone number, and other
              information you provide when creating an account, making a purchase, or contacting customer service.
            </li>
            <li>
              <strong>Transaction Information:</strong> Details about purchases or transactions you make through our
              website, including payment information.
            </li>
            <li>
              <strong>Log Data:</strong> Information that your browser automatically sends whenever you visit our
              website, including your IP address, browser type, referring/exit pages, and timestamps.
            </li>
            <li>
              <strong>Device Information:</strong> Information about the device you use to access our website, including
              hardware model, operating system, and unique device identifiers.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to
              track activity on our website and hold certain information.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect about you to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders, products, services, and promotional offers</li>
            <li>Maintain and improve our website and services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Comply with our legal obligations</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Personalize your experience and deliver content and product offerings relevant to your interests</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>
          <ul>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
              necessary to respond to legal process, to investigate or remedy potential violations of our policies, or
              to protect the rights, property, and safety of others, we may share your information as permitted or
              required by any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties that
              perform services for us or on our behalf, including payment processing, data analysis, email delivery,
              hosting services, customer service, and marketing assistance.
            </li>
            <li>
              <strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw
              consent, we may share your information with third parties for marketing purposes.
            </li>
            <li>
              <strong>Business Transfers:</strong> If we or our assets are acquired, or in the unlikely event that we go
              out of business or enter bankruptcy, user information would be one of the assets that is transferred or
              acquired by a third party.
            </li>
          </ul>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>Your Choices About Your Information</h2>
          <p>You have certain choices regarding the information we collect and how it is used:</p>
          <ul>
            <li>
              <strong>Tracking Technologies:</strong> You can set your browser to refuse all or some browser cookies, or
              to alert you when cookies are being sent.
            </li>
            <li>
              <strong>Marketing Communications:</strong> You can opt out of receiving marketing emails from us by
              following the unsubscribe instructions provided in the emails.
            </li>
            <li>
              <strong>Account Information:</strong> You can review and change your personal information by logging into
              your account settings.
            </li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal
            information from children under 13. If you are under 13, do not use or provide any information on this
            website.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the "Last Updated" date at the top of this page. You are advised to
            review this privacy policy periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions or concerns about this privacy policy, please contact us at:</p>
          <address>
            PetPals
            <br />
            123 Pet Street
            <br />
            San Francisco, CA 94103
            <br />
            Email: <a href="mailto:privacy@petpals.com">privacy@petpals.com</a>
            <br />
            Phone: 1-800-123-4567
          </address>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="text-primary hover:underline">
            Contact Us
          </Link>
          {" | "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  )
}
