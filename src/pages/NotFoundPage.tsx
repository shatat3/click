"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "../components/ui/Button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-x-4">
            <Link to="/">
              <Button>
                Go Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Contact Support
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
