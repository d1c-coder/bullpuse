import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsAndConditionsPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using BullPulse Trading services, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Trading Rules</h2>
              <p className="text-gray-600 mb-4">
                All traders must adhere to our trading rules and risk management guidelines. Violation of these rules
                may result in account termination.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Profit Sharing</h2>
              <p className="text-gray-600 mb-4">
                Profit sharing arrangements are clearly defined in your specific trading agreement and may vary based on
                your chosen program.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Risk Disclosure</h2>
              <p className="text-gray-600 mb-4">
                Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not
                indicative of future results.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                BullPulse Trading shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions regarding these Terms and Conditions, please contact us at legal@bullpulse.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
