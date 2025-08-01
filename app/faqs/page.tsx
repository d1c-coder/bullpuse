"use client"

import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"

const faqs = [
  {
    question: "What is BullPulse?",
    answer:
      "BullPulse is a proprietary trading firm that provides capital to skilled traders. We evaluate traders through our challenge programs and fund successful candidates to trade with our capital.",
  },
  {
    question: "How do I get funded?",
    answer:
      "To get funded, you need to pass our evaluation process. Choose a challenge, meet the profit targets while following risk management rules, and upon successful completion, you'll receive a funded account.",
  },
  {
    question: "What are the profit splits?",
    answer:
      "We offer industry-leading profit splits of up to 90%. The exact percentage depends on your chosen plan and performance level.",
  },
  {
    question: "How often are payouts made?",
    answer:
      "Payouts are processed within 2-10 business days depending on your plan. We offer some of the fastest payout times in the industry.",
  },
  {
    question: "What platforms can I use?",
    answer:
      "We support multiple trading platforms including MT4, MT5, cTrader, and DXTrade. You can select your preferred platform during the signup process.",
  },
  {
    question: "Are there any restrictions on trading strategies?",
    answer:
      "We allow most trading strategies including scalping, swing trading, and algorithmic trading. However, we prohibit certain high-risk strategies like martingale and hedging between accounts.",
  },
  {
    question: "What happens if I fail the challenge?",
    answer:
      "If you don't meet the requirements, you can retake the challenge. We also offer discounted retry options for our traders.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes, we provide 24/7 customer support through live chat, email, and phone. Our team is always ready to assist you with any questions or issues.",
  },
]

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our trading programs and services
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">Our support team is here to help you 24/7</p>
          <Link href="/support">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
