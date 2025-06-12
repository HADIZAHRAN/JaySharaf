"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Instagram, Facebook, Youtube, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      // إرسال الإيميل باستخدام EmailJS
      const result = await emailjs.send(
        'service_gnlblvb', // Service ID - من الصورة الثالثة
        'template_ljiox2o', // Template ID - مُصحح من الصورة الرابعة (yb9ykvl وليس yb9bkvl)
        {
          name: formData.name,          // {{name}} في الـ template
          email: formData.email,        // {{email}} في الـ template  
          message: formData.message,    // {{message}} في الـ template
        },
        'nY9V4gAjOifQahW50' // Public Key
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      
      // فضي الفورم بعد الإرسال الناجح
      setFormData({
        name: "",
        email: "",
        message: "",
      })

    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-pink-100 w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pt-24 pb-16 px-4 w-full">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-serif">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              I'd love to hear from you! Whether it's about a collaboration, performance opportunity, or just to say
              hello.
            </p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full mt-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-12 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-300 rounded-xl flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">
                  Thank you! Your message has been sent successfully.
                </span>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-100 border border-red-300 rounded-xl flex items-center gap-3"
              >
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-800 font-medium">
                  Sorry, something went wrong. Please try again.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your beautiful name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-300 focus:ring-pink-200 transition-all duration-200 text-base lg:text-lg hover:border-pink-200 disabled:opacity-50"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-300 focus:ring-pink-200 transition-all duration-200 text-base lg:text-lg hover:border-pink-200 disabled:opacity-50"
              />
              <Textarea
                name="message"
                placeholder="Tell me about your project or just say hello! I'd love to hear your thoughts..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-300 focus:ring-pink-200 transition-all duration-200 text-base lg:text-lg resize-none hover:border-pink-200 disabled:opacity-50"
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                whileHover={{ scale: isLoading ? 1 : 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: isLoading ? 1 : 0.95, transition: { duration: 0.2 } }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg text-base lg:text-lg font-semibold hover:shadow-2xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Social Media Section */}
<motion.div
  className="text-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.4 }}
>
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h2>
  <div className="flex justify-center space-x-6">
    <motion.a
      href="https://www.instagram.com/jaysharaf?utm_source=qr&igsh=eGdhNGgyNm1rcDNs"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Instagram className="h-6 w-6 text-pink-500" />
    </motion.a>
    <motion.a
      href="https://www.facebook.com/share/1HDXregRhC/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Facebook className="h-6 w-6 text-blue-500" />
    </motion.a>
    <motion.a
      href="https://youtube.com/@jaysharaf2378?si=NqZTekw880IXjQVe"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Youtube className="h-6 w-6 text-red-500" />
    </motion.a>
    <motion.a
      href="https://www.tiktok.com/@jaysharaf18?_t=ZP-8wxRgoNqvyY&_r=1"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* TikTok Icon */}
      <svg 
        className="h-6 w-6 text-black" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.407-1.836-1.588-2.655-.03-.135-.052-.271-.065-.408C16.066 1.119 16.048.963 16.048.8V.48c0-.133-.054-.24-.162-.32C15.794.053 15.687 0 15.554 0H12.83c-.133 0-.24.053-.32.16-.08.107-.12.214-.12.32v8.832c0 .587-.107 1.12-.32 1.6-.213.48-.48.853-.8 1.12-.32.267-.693.4-1.12.4-.587 0-1.093-.213-1.52-.64-.427-.427-.64-.933-.64-1.52s.213-1.093.64-1.52c.427-.427.933-.64 1.52-.64.16 0 .32.027.48.08.16.053.307.133.44.24.133.107.24.24.32.4.08.16.12.333.12.52v2.88c0 .133.053.24.16.32.107.08.214.12.32.12h2.72c.133 0 .24-.04.32-.12.08-.08.12-.187.12-.32v-2.88c0-1.067-.2-2.067-.6-3-.4-.933-.933-1.733-1.6-2.4-.667-.667-1.467-1.2-2.4-1.6-.933-.4-1.933-.6-3-.6-1.067 0-2.067.2-3 .6-.933.4-1.733.933-2.4 1.6-.667.667-1.2 1.467-1.6 2.4-.4.933-.6 1.933-.6 3s.2 2.067.6 3c.4.933.933 1.733 1.6 2.4.667.667 1.467 1.2 2.4 1.6.933.4 1.933.6 3 .6 1.067 0 2.067-.2 3-.6.933-.4 1.733-.933 2.4-1.6.667-.667 1.2-1.467 1.6-2.4.4-.933.6-1.933.6-3V6.482c.747.32 1.52.56 2.32.72.8.16 1.627.24 2.48.24.133 0 .24-.053.32-.16.08-.107.12-.214.12-.32V4.242c0-.133-.04-.24-.12-.32-.08-.08-.187-.12-.32-.12-.747 0-1.467-.107-2.16-.32-.693-.213-1.333-.533-1.92-.96z"/>
      </svg>
    </motion.a>
  </div>
</motion.div>
        </div>
      </div>
    </motion.div>
  )
}