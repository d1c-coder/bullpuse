import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RiskDisclosurePage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Risk Disclosure</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: January 1, 2025</p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-red-800 mb-2">Important Risk Warning</h2>
                <p className="text-red-700">
                  Trading in financial markets carries a high level of risk and may not be suitable for all investors.
                  You should carefully consider your investment objectives, level of experience, and risk appetite
                  before participating in our programs.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Market Risk</h2>
              <p className="text-gray-600 mb-4">
                Financial markets are volatile and unpredictable. Market conditions can change rapidly, potentially
                resulting in significant losses.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Leverage Risk</h2>
              <p className="text-gray-600 mb-4">
                Trading with leverage amplifies both potential profits and losses. Small market movements can result in
                proportionally larger impacts on your trading account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Technology Risk</h2>
              <p className="text-gray-600 mb-4">
                Technical failures, internet connectivity issues, or platform malfunctions may prevent you from
                executing trades or managing your positions effectively.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Regulatory Risk</h2>
              <p className="text-gray-600 mb-4">
                Changes in regulations or government policies may affect trading conditions and market access.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. No Guarantee of Profits</h2>
              <p className="text-gray-600 mb-4">
                Past performance is not indicative of future results. There is no guarantee that any trading strategy
                will be profitable.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Educational Purpose</h2>
              <p className="text-gray-600 mb-4">
                BullPulse Trading provides simulated trading environments for educational purposes. All trading is
                conducted with simulated funds, not real money.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <p className="text-blue-800">
                  <strong>Remember:</strong> Never risk more than you can afford to lose. If you have any questions
                  about the risks involved, please consult with an independent financial advisor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
