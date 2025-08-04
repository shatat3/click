"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail, Phone, MapPin } from "lucide-react"
import Button from "../ui/Button"
import Card from "../ui/Card"
import toast from "react-hot-toast"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@modernapp.com",
    href: "mailto:hello@modernapp.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Tech Street, San Francisco, CA 94105",
    href: "#",
  },
]

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form data:", data)
      toast.success("Message sent successfully!")
      reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our template? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6" variant="3d" hover={true}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-white/20 to-white/10 rounded-lg shadow-glow-white">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{info.title}</h3>
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

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8" variant="3d">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors text-white placeholder-gray-400 shadow-glow-white"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors text-white placeholder-gray-400 shadow-glow-white"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors text-white placeholder-gray-400 shadow-glow-white"
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors resize-none text-white placeholder-gray-400 shadow-glow-white"
                    placeholder="Tell us more about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" variant="3d" className="w-full group shadow-glow-white-strong">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
