"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Shield, Users, DollarSign, BarChart3, Zap, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { useRouter } from "next/navigation"

// Account size configurations
const accountSizes = {
  $2k: {
    value: 2000,
    threeStep: { price: 11, profit: [60, 60, 60], drawdown: 60, dailyDrawdown: 40 },
    twoStep: { price: 15, profit: [160, 100], drawdown: 160, dailyDrawdown: 80 },
    oneStep: { price: 17, profit: 160, drawdown: 100, dailyDrawdown: 60 },
  },
  $5k: {
    value: 5000,
    threeStep: { price: 17, profit: [150, 150, 150], drawdown: 150, dailyDrawdown: 100 },
    twoStep: { price: 19, profit: [400, 250], drawdown: 400, dailyDrawdown: 200 },
    oneStep: { price: 22, profit: 400, drawdown: 250, dailyDrawdown: 150 },
  },
  $10k: {
    value: 10000,
    threeStep: { price: 34, profit: [300, 300, 300], drawdown: 300, dailyDrawdown: 200 },
    twoStep: { price: 44, profit: [800, 500], drawdown: 800, dailyDrawdown: 400 },
    oneStep: { price: 38, profit: 800, drawdown: 500, dailyDrawdown: 300 },
  },
  $20k: {
    value: 20000,
    threeStep: { price: 49, profit: [600, 600, 600], drawdown: 600, dailyDrawdown: 400 },
    twoStep: { price: 59, profit: [1600, 1000], drawdown: 1600, dailyDrawdown: 800 },
    oneStep: { price: 53, profit: 1600, drawdown: 1000, dailyDrawdown: 600 },
  },
  $50k: {
    value: 50000,
    threeStep: { price: 89, profit: [1500, 1500, 1500], drawdown: 1500, dailyDrawdown: 1000 },
    twoStep: { price: 99, profit: [4000, 2500], drawdown: 4000, dailyDrawdown: 2000 },
    oneStep: { price: 93, profit: 4000, drawdown: 2500, dailyDrawdown: 1500 },
  },
  $100k: {
    value: 100000,
    threeStep: { price: 139, profit: [3000, 3000, 3000], drawdown: 3000, dailyDrawdown: 2000 },
    twoStep: { price: 159, profit: [8000, 5000], drawdown: 8000, dailyDrawdown: 4000 },
    oneStep: { price: 150, profit: 8000, drawdown: 5000, dailyDrawdown: 3000 },
  },
}

const platforms = ["MT4", "MT5", "cTrader", "DXTrade"]

const specialFeatures = {
  threeStep: ["No Weekend Holding Restrictions", "Free VPS Available", "24/7 Support", "Risk Management Tools"],
  twoStep: [
    "Weekend Holding",
    "Swap Free",
    "Unique Buyback Feature",
    "Free VPS Available",
    "24/7 Support",
    "Risk Management Tools",
  ],
  oneStep: ["Instant Funding", "No Time Limits", "Free VPS Available", "24/7 Support", "Risk Management Tools"],
}

export default function HomePage() {
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState("$10k")
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    threeStep: "MT4",
    twoStep: "MT4",
    oneStep: "MT4",
  })
  const [expandedFeatures, setExpandedFeatures] = useState({
    threeStep: false,
    twoStep: false,
    oneStep: false,
  })

  const currentConfig = accountSizes[selectedSize as keyof typeof accountSizes]

  const toggleFeatures = (planType: string) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [planType]: !prev[planType as keyof typeof prev],
    }))
  }

  const handlePlatformChange = (planType: string, platform: string) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [planType]: platform,
    }))
  }

  const handleBuyNow = (planType: string) => {
    const planConfig = currentConfig[planType as keyof typeof currentConfig]
    const params = new URLSearchParams({
      size: selectedSize,
      plan: planType === "threeStep" ? "3 Step" : planType === "twoStep" ? "2 Step" : "1 Step",
      price: planConfig.price.toString(),
      platform: selectedPlatforms[planType as keyof typeof selectedPlatforms],
    })

    router.push(`/checkout?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  {"#1 Prop Synthetics Trading Platform"}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Trade with
                  <span className="text-primary"> Our Capital</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join thousands of successful synthetics traders who have scaled their trading with BullPulse. Get
                  funded up to $100,000 and keep up to 90% of your profits.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Start Your Challenge
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">600+</div>
                  <div className="text-sm text-muted-foreground">Active Traders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">$200k+</div>
                  <div className="text-sm text-muted-foreground">Paid Out</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full h-auto bg-muted min-h-[400px] flex items-center justify-center overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log("Video failed to load")
                    e.currentTarget.style.display = "none"
                  }}
                >
                  <source
                    src="https://ehan8as3tor.exactdn.com/wp-content/uploads/2024/03/31033938/Maven_Rocket_BG_White.mp4"
                    type="video/mp4"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Trading Dashboard Preview</p>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make Your Choice - Empower Your Trading Section */}
      <section id="choose-account" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Choose Your Account</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your account and funds to begin your trading journey with BullPulse.
            </p>
          </div>

          {/* Account Size Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Choose your account size</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.keys(accountSizes).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all ${
                    size === selectedSize
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Account Type Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Choose your account type</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 3 Step Challenge */}
              <Card className="relative border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">3 Step</CardTitle>
                  <p className="text-muted-foreground mb-4">The industry's best pricing.</p>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-foreground">${currentConfig.threeStep.price}</span>
                    <span className="text-muted-foreground ml-2">refundable</span>
                    <p className="text-sm text-muted-foreground mt-1">With a {selectedSize} selection</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profit target</span>
                      <span className="font-medium">3% / 3% / 3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"></span>
                      <span className="font-medium">
                        ${currentConfig.threeStep.profit[0]} / ${currentConfig.threeStep.profit[1]} / $
                        {currentConfig.threeStep.profit[2]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Drawdown</span>
                      <span className="font-medium">3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"></span>
                      <span className="font-medium">${currentConfig.threeStep.drawdown}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily drawdown</span>
                      <span className="font-medium">2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"></span>
                      <span className="font-medium">${currentConfig.threeStep.dailyDrawdown}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maximum trading days</span>
                      <span className="font-medium">Infinite</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Overall drawdown</span>
                      <span className="font-medium">Static drawdown (3%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily drawdown</span>
                      <span className="font-medium">Balance / Equity – Highest at EOD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum profit split</span>
                      <span className="font-medium">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum trading days</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payout frequency</span>
                      <span className="font-medium">2 Business Days</span>
                    </div>
                  </div>

                  {/* Special Features Dropdown */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleFeatures("threeStep")}
                      className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground mb-2 hover:text-primary transition-colors"
                    >
                      <span>Special Features</span>
                      {expandedFeatures.threeStep ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {expandedFeatures.threeStep && (
                      <div className="space-y-2 mb-4">
                        {specialFeatures.threeStep.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">Select your Platform</div>
                    <Select
                      value={selectedPlatforms.threeStep}
                      onValueChange={(value) => handlePlatformChange("threeStep", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((platform) => (
                          <SelectItem key={platform} value={platform}>
                            {platform}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={() => handleBuyNow("threeStep")} className="w-full bg-primary hover:bg-primary/90">
                      Buy now
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Quick, accurate, and kind customer support is here 24/7 to assist you on your journey!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 2 Step Challenge */}
              <Card className="relative border-2 border-primary hover:border-primary transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">2 Step</CardTitle>
                  <p className="text-muted-foreground mb-4">The industry's best pricing.</p>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-foreground">${currentConfig.twoStep.price}</span>
                    <span className="text-muted-foreground ml-2">refundable</span>
                    <p className="text-sm text-muted-foreground mt-1">With a {selectedSize} selection</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profit target</span>
                      <span className="font-medium">8% / 5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"></span>
                      <span className="font-medium">
                        ${currentConfig.twoStep.profit[0]} / ${currentConfig.twoStep.profit[1]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Drawdown</span>
                      <span className="font-medium">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"></span>
                      <span className="font-medium">${currentConfig.twoStep.drawdown}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily drawdown</span>
                      <span className="font-medium">4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"></span>
                      <span className="font-medium">${currentConfig.twoStep.dailyDrawdown}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maximum trading days</span>
                      <span className="font-medium">Infinite</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Overall drawdown</span>
                      <span className="font-medium">Static drawdown (8%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily drawdown</span>
                      <span className="font-medium">Balance / Equity – Highest at EOD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum profit split</span>
                      <span className="font-medium">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum trading days</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payout frequency</span>
                      <span className="font-medium">10 Business Days</span>
                    </div>
                  </div>

                  {/* Special Features Dropdown */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleFeatures("twoStep")}
                      className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground mb-2 hover:text-primary transition-colors"
                    >
                      <span>Special Features</span>
                      {expandedFeatures.twoStep ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {expandedFeatures.twoStep && (
                      <div className="space-y-2 mb-4">
                        {specialFeatures.twoStep.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">Select your Platform</div>
                    <Select
                      value={selectedPlatforms.twoStep}
                      onValueChange={(value) => handlePlatformChange("twoStep", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((platform) => (
                          <SelectItem key={platform} value={platform}>
                            {platform}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={() => handleBuyNow("twoStep")} className="w-full bg-primary hover:bg-primary/90">
                      Buy now
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Quick, accurate, and kind customer support is here 24/7 to assist you on your journey!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 1 Step Challenge */}
              <Card className="relative border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">1 Step</CardTitle>
                  <p className="text-muted-foreground mb-4">The industry's best pricing.</p>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-foreground">${currentConfig.oneStep.price}</span>
                    <span className="text-muted-foreground ml-2">refundable</span>
                    <p className="text-sm text-muted-foreground mt-1">With a {selectedSize} selection</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profit target</span>
                      <span className="font-medium">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"></span>
                      <span className="font-medium">${currentConfig.oneStep.profit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Trailing drawdown</span>
                      <span className="font-medium">5% from your highest equity</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily drawdown</span>
                      <span className="font-medium">3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"></span>
                      <span className="font-medium">${currentConfig.oneStep.dailyDrawdown}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maximum trading days</span>
                      <span className="font-medium">Infinite</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Overall drawdown</span>
                      <span className="font-medium">Max Drawdown (Trailing) (5%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily drawdown</span>
                      <span className="font-medium">Balance / Equity – Highest at EOD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum profit split</span>
                      <span className="font-medium">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum trading days</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payout frequency</span>
                      <span className="font-medium">10 Business Days</span>
                    </div>
                  </div>

                  {/* Special Features Dropdown */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleFeatures("oneStep")}
                      className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground mb-2 hover:text-primary transition-colors"
                    >
                      <span>Special Features</span>
                      {expandedFeatures.oneStep ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {expandedFeatures.oneStep && (
                      <div className="space-y-2 mb-4">
                        {specialFeatures.oneStep.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">Select your Platform</div>
                    <Select
                      value={selectedPlatforms.oneStep}
                      onValueChange={(value) => handlePlatformChange("oneStep", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((platform) => (
                          <SelectItem key={platform} value={platform}>
                            {platform}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={() => handleBuyNow("oneStep")} className="w-full bg-primary hover:bg-primary/90">
                      Buy now
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Quick, accurate, and kind customer support is here 24/7 to assist you on your journey!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Why Choose BullPulse?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide the tools, capital, and support you need to succeed as a professional trader.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">High Profit Splits</h3>
              <p className="text-muted-foreground">
                Keep up to 90% of your profits with our industry-leading profit sharing model.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Fast Payouts</h3>
              <p className="text-muted-foreground">
                Get your profits paid out within 24 hours of your withdrawal request.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Risk Management</h3>
              <p className="text-muted-foreground">
                Advanced risk management tools to protect both your account and our capital.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Community Support</h3>
              <p className="text-muted-foreground">
                Join our exclusive community of funded traders and learn from the best.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Detailed performance analytics and insights to improve your trading.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Scaling Opportunities</h3>
              <p className="text-muted-foreground">
                Scale your account up to $2M based on your consistent performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground">Ready to Get Funded?</h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of successful traders who have already started their journey with BullPulse. Your trading
              career starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 text-lg px-8">
                Start Your Challenge
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay in the know about offers and promotions.</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
              />
              <Button className="bg-primary hover:bg-primary/90 px-8">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              By signing up you are agreeing to our Terms and Conditions, Privacy Policy, and to receive marketing
              emails from BullPulse Trading and BullPulse Trading Partners.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">BullPulse</span>
              </Link>
              <p className="text-muted-foreground">Empowering traders worldwide with capital and opportunity.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/how-it-works" className="hover:text-foreground transition-colors">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-foreground transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates" className="hover:text-foreground transition-colors">
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/legal/aml-policy" className="hover:text-foreground transition-colors">
                    AML Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy-policy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms-and-conditions" className="hover:text-foreground transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/legal/risk-disclosure" className="hover:text-foreground transition-colors">
                    Risk Disclosure
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Follow us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="text-center text-muted-foreground space-y-4">
              <p>&copy; 2025 BullPulse. All rights reserved.</p>

              <div className="max-w-4xl mx-auto text-xs leading-relaxed space-y-4">
                <p>
                  All information provided on this site is intended solely for educational purposes related to trading
                  on financial markets and does not serve in any way as a specific investment recommendation, business
                  recommendation, investment opportunity analysis or similar general recommendation regarding the
                  trading of investment instruments. BullPulse Trading only provides services of simulated trading and
                  educational tools for traders. The information on this site is not directed at residents in any
                  country or jurisdiction where such distribution or use would be contrary to local laws or regulations.
                  BullPulse Trading does not act as a broker and do not accept any deposits.
                </p>

                <p>
                  The information on the website is not directed at any jurisdiction and is not intended for any use
                  that would be contrary to local law or regulation. We do not provide access to any country on any
                  sanctions list of the United Nations. Metatrader is not available for United States or Canada.
                </p>

                <p>
                  BullPulse Trade LTD is a registered limited corporation in Saint Lucia at Foregate Offshore Investment
                  and Legal Services LTD., Ground Floor The Sotheby Building, Rodney Village, Rodney Bay, Castries,
                  Saint Lucia LC01 101 with the registration number 2025-00242 and is compliant with all necessary laws
                  and regulations provided in accordance with local and international jurisdictions.
                </p>

                <p>
                  Please be aware that we do not offer specific investment advice, business consulting, analysis of
                  investment opportunities, or any general recommendations on trading investment instruments. Nor do we
                  offer any trading on real markets as all instruments are simulated and fed to use through liquidity
                  providers. Trading in financial markets carries a high level of risk, and we advise against risking
                  more than you can afford to lose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
