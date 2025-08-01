import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Users, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AffiliatesPage() {
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
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Affiliate Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Earn generous commissions by referring traders to BullPulse. Join our affiliate program and start earning
            today.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Join Affiliate Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Join Our Affiliate Program?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>High Commissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn up to 15% commission on every successful referral with no cap on earnings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Lifetime Referrals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn commissions for the lifetime of your referred traders, not just the first purchase.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitor your referrals and earnings with our advanced affiliate dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sign Up</h3>
              <p className="text-gray-600">Register for our affiliate program and get approved.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Your Link</h3>
              <p className="text-gray-600">Receive your unique referral link and marketing materials.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Refer Traders</h3>
              <p className="text-gray-600">Share your link and refer traders to BullPulse.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Earn Commissions</h3>
              <p className="text-gray-600">Get paid for every successful referral automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of affiliates earning with BullPulse</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
