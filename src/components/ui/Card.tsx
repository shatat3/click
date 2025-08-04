"use client"

import React from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "../../lib/utils"

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode
  hover?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, ...props }, ref) => {
    const baseClasses = "bg-black/40 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"

    const motionProps = hover ? {
      whileHover: { 
        y: -5,
        boxShadow: "0 20px 40px rgba(91, 97, 53, 0.3)"
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
