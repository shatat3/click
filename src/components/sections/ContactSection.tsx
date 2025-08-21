"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import Card from "../ui/Card"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@clickproduction.com",
    href: "mailto:hello@clickproduction.com",
    delay: 0.1
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+962 79 555 5555",
    href: "tel:+962795555555",
    delay: 0.2
  },
]

export default function ContactSection() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-50px'
  })

  return (
    <section ref={sectionRef} className="section-enhanced grid-bg">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Start Your <span className="text-gradient">Project</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            Get in touch and we'll respond within 24 hours.
          </motion.p>
        </motion.div>

        {/* Contact Info - Horizontal Layout */}
        <motion.div
          className="flex justify-center items-center space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {contactInfo.map((info) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: info.delay }}
            >
              <Card className="p-6 group w-80" variant="3d" hover={true}>
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-white/20 to-white/10 rounded-lg shadow-glow-white group-hover:shadow-glow-white-strong transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-all duration-300">{info.title}</h3>
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
