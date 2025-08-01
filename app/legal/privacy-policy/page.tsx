import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BullPulse</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, participate in
                our trading programs, or contact us for support.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at privacy@bullpulse.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
