import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Yasmin Sharaf - Multi-talented Artist",
  description: "Portfolio website of Yasmin Sharaf - actress, singer, theater performer, and science educator",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} ${playfair.variable} font-sans overflow-x-hidden`}>
        <div className="min-h-screen w-full overflow-x-hidden">
          <Navbar />
          <main className="w-full overflow-x-hidden">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}
