import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Cookie, Alan_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollProvider } from "@/components/scroll-provider"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })
const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cookie",
})
const alanSans = Alan_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alan-sans",
})

export const metadata: Metadata = {
  title: "Devyani Keche",
  description:
    "Portfolio of Devyani Keche – frontend and mobile developer crafting thoughtful, modern web and app experiences.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Devyani Keche | Frontend & Mobile Developer",
    description:
      "Explore the work, projects, and journey of Devyani Keche – building modern, performant web and mobile experiences.",
    url: "/",
    siteName: "Devyani Keche Portfolio",
    images: [
      {
        url: "/modern-tech-logo.png",
        width: 1200,
        height: 630,
        alt: "Preview of Devyani Keche's portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devyani Keche | Frontend & Mobile Developer",
    description:
      "Frontend & mobile developer crafting thoughtful, modern web and app experiences.",
    images: ["/modern-tech-logo.png"],
  },
  keywords: [
    "Devyani Keche",
    "frontend developer",
    "React developer",
    "React Native",
    "web developer portfolio",
    "mobile app developer",
    "UI developer",
  ],
  authors: [{ name: "Devyani Keche" }],
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className}  ${cookie.variable} ${alanSans.variable} antialiased`}>
        <ScrollProvider>{children}</ScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
