"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%]  max-w-4xl">
      <nav
        className={`
          flex items-center justify-between px-6 py-3 
          rounded-full border border-[#fce4f7]/60
          bg-white/70 backdrop-blur-xl
          shadow-lg shadow-[#ff4db8]/5
          transition-all duration-300
          ${isScrolled ? "bg-white/90 shadow-xl" : ""}
        `}
      >
        <a
          href="#home"
          className="text-2xl font-normal bg-gradient-to-r from-[#ff4db8] to-[#f33aa6] bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-cookie)" }}
        >
          Sarah.
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[#1a1a2e]/70 hover:text-[#1a1a2e] transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#ff4db8] to-[#f33aa6] rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#1a1a2e] hover:text-[#ff4db8] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#fce4f7]/60 shadow-xl">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-[#1a1a2e]/70 hover:text-[#ff4db8] hover:bg-[#fce4f7]/50 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
