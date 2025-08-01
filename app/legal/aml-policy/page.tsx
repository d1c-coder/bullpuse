import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AMLPolicyPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Anti-Money Laundering Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                BullPulse Trading is committed to preventing money laundering and terrorist financing. This Anti-Money
                Laundering (AML) Policy outlines our procedures and controls to ensure compliance with applicable laws
                and regulations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Customer Due Diligence</h2>
              <p className="text-gray-600 mb-4">We implement robust customer due diligence procedures including:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Identity verification of all customers</li>
                <li>Source of funds verification</li>
                <li>Ongoing monitoring of customer activities</li>
                <li>Enhanced due diligence for high-risk customers</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Suspicious Activity Reporting</h2>
              <p className="text-gray-600 mb-4">
                We maintain systems to detect and report suspicious activities to relevant authorities as required by
                law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Record Keeping</h2>
              <p className="text-gray-600 mb-4">
                All customer records and transaction data are maintained in accordance with regulatory requirements for
                the prescribed periods.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Training</h2>
              <p className="text-gray-600 mb-4">
                All staff receive regular AML training to ensure awareness of their obligations and the latest
                regulatory requirements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions regarding this AML Policy, please contact us at compliance@bullpulse.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
