import Link from "next/link"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TradingProgramsPage() {
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
            <Link href="/trading-programs" className="text-sm font-medium text-blue-600 font-semibold">
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

      {/* Content redirects to home page account selection */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Trading Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose from our flexible trading programs designed to fit your experience level and trading style.
          </p>
          <Link href="/#choose-account">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
