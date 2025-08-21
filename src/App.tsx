"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import VFXPage from "./pages/VFXPage"
import EditingPage from "./pages/EditingPage"
import EventsPage from "./pages/EventsPage"
import VideoCategoryPage from "./pages/VideoCategoryPage"
import ErrorBoundary from "./components/common/ErrorBoundary"
import { useScrollToTop } from "./hooks/useScrollToTop"
import "./styles/globals.css"

function App() {
  const location = useLocation()
  
  // Scroll to top on route change
  useScrollToTop()

  return (
    <ErrorBoundary>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/vfx" element={<VFXPage />} />
            <Route path="/editing" element={<EditingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/:category/:id" element={<VideoCategoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
