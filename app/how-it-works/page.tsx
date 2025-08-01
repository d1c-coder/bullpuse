import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/how-it-works" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get funded in 4 simple steps and start trading with our capital
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle>Choose Your Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Select your account size and challenge type that fits your trading style.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle>Pass the Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Meet the profit targets while following our risk management rules.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <CardTitle>Get Funded</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Receive your funded account and start trading with our capital.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <CardTitle>Earn Profits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Keep up to 90% of your profits with fast bi-weekly payouts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <Link href="/">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Choose Your Challenge
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
