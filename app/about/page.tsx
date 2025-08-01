import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/trading-programs"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Trading Programs
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/support" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">About BullPulse</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're revolutionizing the prop trading industry by providing talented traders with the capital and support
              they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At BullPulse, we believe that talented traders shouldn't be limited by their capital. Our mission is to
                identify, fund, and support skilled traders worldwide, providing them with the resources they need to
                achieve their full potential in the financial markets.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose BullPulse?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry-Leading Profit Splits</h3>
                  <p className="text-gray-600">
                    Keep up to 90% of your profits with our transparent and fair profit-sharing model.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Payouts</h3>
                  <p className="text-gray-600">
                    Get your earnings within 2 business days with our streamlined payout process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
                  <p className="text-gray-600">
                    Trade on cutting-edge platforms with institutional-grade infrastructure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our dedicated support team is available around the clock to assist you.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <span>
                    <strong>Transparency:</strong> Clear rules, fair evaluations, and honest communication.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <span>
                    <strong>Excellence:</strong> We strive for the highest standards in everything we do.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <span>
                    <strong>Innovation:</strong> Continuously improving our services and technology.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <span>
                    <strong>Community:</strong> Building a supportive network of successful traders.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
          <Link href="/">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
