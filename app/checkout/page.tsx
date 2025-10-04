"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Check, AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

const NAIRA_TO_USD_RATE = 1560

interface CheckoutData {
  accountSize: string
  planType: string
  price: number
  platform: string
}

const paymentAddresses = {
  usdttrc20: "TE5fM54Ya5Vjirax19wo8mn4713pXhPaj6",
  btc: "bc1q3kvs5tp05su7dqzsd96neh30e6yplxwqcrrsld",
  usdterc20: "0x60871771012Db3aE8832e4E919E3103b60B7a1F6",
  solana: "5N2pL9d5b5Qg1e25v4z4tch4wiPRmrjUxxWBV6Ycwuu3",
  naira: "1000293896 - Bellbank Mfb (BULLPUSE CO)",
}

export default function CheckoutPage() {
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    tradingExperience: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("")
  const [cryptoOption, setCryptoOption] = useState("")
  const [copiedAddress, setCopiedAddress] = useState("")
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [currentStep, setCurrentStep] = useState(1) // 1: Form, 2: Payment, 3: Confirmation
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)

  useEffect(() => {
    // Get checkout data from URL params or localStorage
    const urlParams = new URLSearchParams(window.location.search)
    const data = {
      accountSize: urlParams.get("size") || "$10k",
      planType: urlParams.get("plan") || "2 Step",
      price: Number.parseInt(urlParams.get("price") || "44"),
      platform: urlParams.get("platform") || "MT4",
    }
    setCheckoutData(data)
  }, [])

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.fullName.trim()) errors.fullName = "Full name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.phoneNumber.trim()) errors.phoneNumber = "Phone number is required"
    if (!formData.country.trim()) errors.country = "Country is required"
    if (!formData.tradingExperience.trim()) errors.tradingExperience = "Trading experience is required"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setCurrentStep(2)
    }
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAddress(type)
    setTimeout(() => setCopiedAddress(""), 2000)
  }

  const handlePaymentCompletion = () => {
    if (!disclaimerAccepted) {
      alert("Please accept the disclaimer before confirming payment")
      return
    }
    setPaymentCompleted(true)
    setCurrentStep(3)
  }

  const getPaymentAddress = () => {
    if (paymentMethod === "crypto") {
      return paymentAddresses[cryptoOption as keyof typeof paymentAddresses]
    } else if (paymentMethod === "naira") {
      return paymentAddresses.naira
    }
    return ""
  }

  if (!checkoutData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                1
              </div>
              <div className={`w-16 h-1 ${currentStep >= 2 ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                2
              </div>
              <div className={`w-16 h-1 ${currentStep >= 3 ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                3
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plan:</span>
                    <span className="font-medium">{checkoutData.planType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Size:</span>
                    <span className="font-medium">{checkoutData.accountSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform:</span>
                    <span className="font-medium">{checkoutData.platform}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>${checkoutData.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">One-time refundable fee</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <p className="text-muted-foreground">Please fill in your details to proceed with the purchase</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground ${formErrors.fullName ? "border-destructive" : "border-input"}`}
                            placeholder="Enter your full name"
                          />
                          {formErrors.fullName && (
                            <p className="text-destructive text-sm mt-1">{formErrors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground ${formErrors.email ? "border-destructive" : "border-input"}`}
                            placeholder="Enter your email"
                          />
                          {formErrors.email && <p className="text-destructive text-sm mt-1">{formErrors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground ${formErrors.phoneNumber ? "border-destructive" : "border-input"}`}
                            placeholder="Enter your phone number"
                          />
                          {formErrors.phoneNumber && (
                            <p className="text-destructive text-sm mt-1">{formErrors.phoneNumber}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Country *</label>
                          <input
                            type="text"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground ${formErrors.country ? "border-destructive" : "border-input"}`}
                            placeholder="Enter your country"
                          />
                          {formErrors.country && <p className="text-destructive text-sm mt-1">{formErrors.country}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Trading Experience *</label>
                        <Select
                          value={formData.tradingExperience}
                          onValueChange={(value) => setFormData({ ...formData, tradingExperience: value })}
                        >
                          <SelectTrigger
                            className={`w-full ${formErrors.tradingExperience ? "border-destructive" : ""}`}
                          >
                            <SelectValue placeholder="Select your trading experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                            <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                            <SelectItem value="expert">Expert (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                        {formErrors.tradingExperience && (
                          <p className="text-destructive text-sm mt-1">{formErrors.tradingExperience}</p>
                        )}
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-3">
                        Continue to Payment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <p className="text-muted-foreground">Choose your preferred payment method</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <button
                          onClick={() => setPaymentMethod("crypto")}
                          className={`p-4 border-2 rounded-lg text-left transition-all ${
                            paymentMethod === "crypto"
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-semibold">Cryptocurrency</div>
                          <div className="text-sm text-muted-foreground">Pay with USDT, BTC, or SOL</div>
                        </button>

                        <button
                          onClick={() => setPaymentMethod("naira")}
                          className={`p-4 border-2 rounded-lg text-left transition-all ${
                            paymentMethod === "naira"
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-semibold">Nigerian Naira</div>
                          <div className="text-sm text-muted-foreground">
                            Bank Transfer via PalmPay - ₦{(checkoutData.price * NAIRA_TO_USD_RATE).toLocaleString()}
                          </div>
                        </button>
                      </div>

                      {paymentMethod === "crypto" && (
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Select Cryptocurrency
                          </label>
                          <Select value={cryptoOption} onValueChange={setCryptoOption}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose cryptocurrency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usdttrc20">USDT (TRC20)</SelectItem>
                              <SelectItem value="usdterc20">USDT (ERC20)</SelectItem>
                              <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                              <SelectItem value="solana">Solana (SOL)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {((paymentMethod === "crypto" && cryptoOption) || paymentMethod === "naira") && (
                        <Card className="bg-muted/50">
                          <CardHeader>
                            <CardTitle className="text-lg">Payment Details</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                {paymentMethod === "crypto" ? "Wallet Address" : "Bank Account"}
                              </label>
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={getPaymentAddress()}
                                  readOnly
                                  className="flex-1 px-4 py-3 bg-background border border-input rounded-lg font-mono text-sm"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    copyToClipboard(
                                      getPaymentAddress(),
                                      paymentMethod === "crypto" ? cryptoOption : "naira",
                                    )
                                  }
                                  className="px-3"
                                >
                                  {copiedAddress === (paymentMethod === "crypto" ? cryptoOption : "naira") ? (
                                    <Check className="h-4 w-4" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                            </div>

                            {paymentMethod === "naira" && (
                              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                                <div className="text-sm text-blue-800 dark:text-blue-200">
                                  <p className="font-medium mb-1">Exchange Rate Information:</p>
                                  <p>1 USD = ₦{NAIRA_TO_USD_RATE.toLocaleString()}</p>
                                  <p>
                                    Total: ${checkoutData.price} USD = ₦
                                    {(checkoutData.price * NAIRA_TO_USD_RATE).toLocaleString()}
                                  </p>
                                </div>
                              </div>
                            )}

                            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                              <div className="flex items-start space-x-2">
                                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mt-0.5" />
                                <div className="text-sm">
                                  <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                                    Payment Instructions:
                                  </p>
                                  <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
                                    <li>
                                      • Send exactly{" "}
                                      {paymentMethod === "crypto" ? (
                                        <strong>
                                          ${checkoutData.price} in {cryptoOption?.toUpperCase()}
                                        </strong>
                                      ) : (
                                        <strong>
                                          ₦{(checkoutData.price * NAIRA_TO_USD_RATE).toLocaleString()} ($
                                          {checkoutData.price} USD)
                                        </strong>
                                      )}
                                    </li>
                                    <li>• Double-check the address before sending</li>
                                    <li>• Payment confirmation may take 5-30 minutes</li>
                                    <li>• Keep your transaction hash/receipt for reference</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-start space-x-2">
                                <input
                                  type="checkbox"
                                  id="disclaimer"
                                  checked={disclaimerAccepted}
                                  onChange={(e) => setDisclaimerAccepted(e.target.checked)}
                                  className="mt-1"
                                />
                                <label htmlFor="disclaimer" className="text-sm text-muted-foreground">
                                  I understand that I must complete the payment before clicking "I have completed my
                                  payment". I acknowledge that this is a one-time refundable fee for the trading
                                  challenge, and I agree to the{" "}
                                  <Link href="/legal/terms-and-conditions" className="text-primary hover:underline">
                                    Terms and Conditions
                                  </Link>
                                  .
                                </label>
                              </div>

                              <Button
                                onClick={handlePaymentCompletion}
                                disabled={!disclaimerAccepted}
                                className="w-full bg-green-600 hover:bg-green-700 py-3"
                              >
                                I Have Completed My Payment
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {currentStep === 3 && (
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-2xl text-green-600 dark:text-green-400">Payment Submitted!</CardTitle>
                    <p className="text-muted-foreground">Your payment is being processed</p>
                  </CardHeader>
                  <CardContent className="space-y-6 text-center">
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                      <h3 className="font-semibold text-primary mb-2">What happens next?</h3>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• We'll verify your payment within 30 minutes</li>
                        <li>• You'll receive an email with your account details</li>
                        <li>• Access to your trading platform will be provided</li>
                        <li>• Our support team will contact you within 24 hours</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        A confirmation email has been sent to <strong>{formData.email}</strong>
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/support">
                          <Button variant="outline">Contact Support</Button>
                        </Link>
                        <Link href="/">
                          <Button className="bg-primary hover:bg-primary/90">Back to Home</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
