"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Sparkles } from "lucide-react"
import { cn } from "../../lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-white/30 shadow-glow-white">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
            <Sparkles className="h-6 w-6 text-white shadow-glow-white" />
            <span className="text-xl font-bold">ModernApp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-white hover:text-gray-300 transition-colors px-3 py-2 rounded-md",
                location.pathname === "/" && "text-white shadow-glow-white bg-transparent"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-white hover:text-gray-300 transition-colors px-3 py-2 rounded-md",
                location.pathname === "/about" && "text-white shadow-glow-white bg-transparent"
              )}
            >
              About
            </Link>
            <Link
              to="/services"
              className={cn(
                "text-white hover:text-gray-300 transition-colors px-3 py-2 rounded-md",
                location.pathname === "/services" && "text-white shadow-glow-white bg-transparent"
              )}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-white hover:text-gray-300 transition-colors px-3 py-2 rounded-md",
                location.pathname === "/contact" && "text-white shadow-glow-white bg-transparent"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-sm rounded-lg mt-2 shadow-glow-white">
            <Link
              to="/"
              className={cn(
                "block px-3 py-2 text-white hover:text-gray-300 transition-colors rounded-md",
                location.pathname === "/" && "text-white shadow-glow-white bg-transparent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "block px-3 py-2 text-white hover:text-gray-300 transition-colors rounded-md",
                location.pathname === "/about" && "text-white shadow-glow-white bg-transparent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className={cn(
                "block px-3 py-2 text-white hover:text-gray-300 transition-colors rounded-md",
                location.pathname === "/services" && "text-white shadow-glow-white bg-transparent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={cn(
                "block px-3 py-2 text-white hover:text-gray-300 transition-colors rounded-md",
                location.pathname === "/contact" && "text-white shadow-glow-white bg-transparent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
