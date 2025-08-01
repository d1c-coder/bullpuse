import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Calendar, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "5 Essential Risk Management Rules for Prop Traders",
    excerpt:
      "Learn the fundamental risk management principles that every successful prop trader must follow to protect their capital and maximize profits.",
    author: "BullPulse Team",
    date: "January 15, 2025",
    category: "Education",
  },
  {
    title: "How to Pass Your First Prop Trading Challenge",
    excerpt:
      "A comprehensive guide to successfully completing your evaluation and securing funding from a proprietary trading firm.",
    author: "Trading Expert",
    date: "January 10, 2025",
    category: "Strategy",
  },
  {
    title: "The Psychology of Successful Trading",
    excerpt:
      "Discover the mental strategies and psychological techniques that separate profitable traders from the rest.",
    author: "Dr. Sarah Johnson",
    date: "January 5, 2025",
    category: "Psychology",
  },
  {
    title: "Market Analysis: Q1 2025 Outlook",
    excerpt: "Our expert analysis of market trends and opportunities for the first quarter of 2025.",
    author: "Market Analyst",
    date: "January 1, 2025",
    category: "Analysis",
  },
]

export default function BlogPage() {
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
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Trading Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, strategies, and market analysis from our team of trading experts
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{post.category}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    <Link href="#">{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">Subscribe to our newsletter for the latest trading insights</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
