import { Link } from "react-router-dom"
import { Instagram, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
                      <Link to="/" className="flex items-center space-x-3 mb-4">
            <img 
              src="/click-logo.png" 
              alt="Click Logo" 
              className="h-8 w-auto object-contain"
              style={{ aspectRatio: '1/1' }}
            />
            <span className="text-xl font-bold text-white">Click</span>
          </Link>
          <p className="text-gray-400 max-w-md">
            Professional video production company specializing in creative storytelling, commercial production,
            and post-production services.
          </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#aeb894] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#aeb894] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Click Production. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerLinks.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-[#aeb894] transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
