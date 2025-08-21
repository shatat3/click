"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CMO at Creative Co.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    text: "Working with your team was an absolute pleasure. The results speak for themselves - our video content has never looked more professional and engaging. The attention to detail and creative vision exceeded our expectations.",
    logo: "/logos/creativeco.svg",
    company: "Creative Co."
  },
  {
    id: 2,
    name: "Mark Lee",
    title: "Founder of EventFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Professional, efficient, and incredibly talented. The team delivered our event videos with such precision and creativity that our clients were blown away. Highly recommended for any video production needs.",
    logo: "/logos/eventflow.svg",
    company: "EventFlow"
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Marketing Director at TechStart",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "The quality of work and level of professionalism is outstanding. They transformed our brand videos into compelling stories that truly resonate with our audience. A game-changer for our marketing efforts.",
    logo: "/logos/techstart.svg",
    company: "TechStart"
  },
  {
    id: 4,
    name: "David Rodriguez",
    title: "CEO at Fashion Forward",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Incredible attention to detail and creative vision. Our fashion campaign videos have never looked more stunning. The team's expertise in visual storytelling is unmatched.",
    logo: "/logos/fashionforward.svg",
    company: "Fashion Forward"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Creative Director at Studio Arts",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    text: "Working with this team has been transformative for our creative projects. Their technical expertise combined with artistic vision creates content that truly stands out in today's competitive landscape.",
    logo: "/logos/studioarts.svg",
    company: "Studio Arts"
  }
]

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            className="glass-effect rounded-2xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-white/5 rounded-full translate-y-12 -translate-x-12" />

            {/* Quote Icon */}
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-black" />
              </div>
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Profile Section */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-white/20">
                      <img 
                        src={activeTestimonial.image} 
                        alt={activeTestimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center text-black font-bold text-lg">
                                ${activeTestimonial.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{activeTestimonial.name}</h3>
                      <p className="text-gray-300">{activeTestimonial.title}</p>
                    </div>
                  </div>
                  
                  {/* Company Logo */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center p-2">
                      <img 
                        src={activeTestimonial.logo} 
                        alt={`${activeTestimonial.company} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to company initials if logo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-r from-white/20 to-white/10 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                ${activeTestimonial.company.split(' ').map(n => n[0]).join('')}
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                  "{activeTestimonial.text}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Arrows - Below the card */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center shadow-glow-white hover:shadow-glow-white-strong transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center shadow-glow-white hover:shadow-glow-white-strong transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Client Navigation */}
        <div className="max-w-4xl mx-auto relative mt-16">
          <motion.div
            className="flex overflow-x-auto gap-2 md:gap-3 pb-4 pt-8 scrollbar-hide px-8 md:px-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Fade overlay for left side */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none z-5" />
            
            {/* Fade overlay for right side */}
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none z-5" />
            
            <div className="flex gap-2 md:gap-3 min-w-max relative z-10">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                    index === activeIndex
                      ? "glass-effect text-white shadow-glow-white scale-105"
                      : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 border border-white/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">{testimonial.company}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Progress Indicators */}
          <motion.div
            className="flex justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-white to-gray-300 scale-125 shadow-glow-white"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 