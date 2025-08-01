import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Phone, Clock } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="/support" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you succeed. Get in touch with our support team 24/7.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Get instant help with our live chat support available 24/7.</p>
                <Button className="bg-blue-600 hover:bg-blue-700">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond within 2 hours.</p>
                <Button variant="outline">support@bullpuse.com</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Call us directly for urgent matters and immediate assistance.</p>
                <Button variant="outline">+1 (BULLPUSE)</Button>
              </CardContent>
            </Card>
          </div>

          {/* Support Hours */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Help</h2>
            <p className="text-xl text-gray-600">Find answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/faqs" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">FAQs</h3>
                  <p className="text-gray-600 text-sm">Common questions and answers</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/how-it-works" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">How It Works</h3>
                  <p className="text-gray-600 text-sm">Learn about our process</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/trading-programs" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Trading Programs</h3>
                  <p className="text-gray-600 text-sm">Explore our challenges</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pricing" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Pricing</h3>
                  <p className="text-gray-600 text-sm">View our pricing plans</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
