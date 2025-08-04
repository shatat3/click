"use client"

import React from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "../../lib/utils"

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode
  hover?: boolean
  variant?: "default" | "3d"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, variant = "default", ...props }, ref) => {
    const baseClasses = variant === "3d" 
      ? "luxury-card-3d" 
      : "bg-black/40 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"

    const motionProps = hover ? {
      whileHover: { 
        y: -8,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 255, 255, 0.2)"
      },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.3 }
    } : {}

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, className)}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = "Card"

export default Card
