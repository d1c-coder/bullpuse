"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/trading-programs", label: "Trading Programs" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/support", label: "Support" },
  ]

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">BullPulse</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button size="sm" className="hidden sm:flex bg-primary hover:bg-primary/90">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm font-medium transition-colors py-2 ${
                  currentPage === item.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
