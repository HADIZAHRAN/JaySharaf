"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Target } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Gallery", href: "/gallery" },
    { name: "Videos", href: "/videos" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/jaysharaf?utm_source=qr&igsh=eGdhNGgyNm1rcDNs", label: "Instagram" },
    {
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.84v5.79a2.1 2.1 0 0 1-2.09 2.09 2.1 2.1 0 0 1-2.09-2.09V2H6.96v5.79a4.83 4.83 0 0 0 4.84 4.84c.85 0 1.64-.22 2.34-.61.39-.22.74-.49 1.04-.82.3-.33.54-.71.71-1.13.17-.42.26-.86.26-1.32V6.69h2.44Z" />
        </svg>
      ),
      href: "https://www.tiktok.com/@jaysharaf18?_t=ZP-8wxRgoNqvyY&_r=1",
      label: "TikTok",
    },
    { icon: Facebook, href: "https://www.facebook.com/share/1HDXregRhC/", label: "Facebook", },
    { icon: Youtube, href: "https://youtube.com/@jaysharaf2378?si=NqZTekw880IXjQVe", label: "YouTube" },
  ]

  return (
    <footer className="bg-pink-300 border-t border-pink-400 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/"
                className="text-2xl sm:text-3xl font-bold text-gray-800 font-serif hover:text-pink-600 transition-colors duration-300"
              >
                JaySharaf
              </Link>
            </motion.div>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Multi-talented artist & educator</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-end space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:text-pink-100 hover:bg-white/30 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden group"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className="h-5 w-5 relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-pink-200 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-black-600 text-sm sm:text-base">
            © {currentYear} Yasmeen Sharaf. All rights reserved. Made with ♡
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
