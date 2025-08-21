"use client"

import { motion } from "framer-motion"
import HeroSection from "../components/sections/HeroSection"
import WorkCategoriesSection from "../components/sections/WorkCategoriesSection"
import AboutSection from "../components/sections/AboutSection"
import TestimonialSection from "../components/sections/TestimonialSection"
import ContactSection from "../components/sections/ContactSection"

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <HeroSection />
      <AboutSection />
      <WorkCategoriesSection />
      <TestimonialSection />
      <ContactSection />
    </motion.div>
  )
}
