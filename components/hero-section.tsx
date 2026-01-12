"use client"
import React, { useLayoutEffect, useRef } from "react"
import Link from "next/link"
import { Github, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import CircularText from "./CircularText"
import { RainbowButton } from "./ui/rainbow-button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Component from "@/components/ui/gradient-bar-hero-section"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Title moves slightly slower
      gsap.fromTo(
        ".hero-parallax-title",
        { yPercent: 0 },
        {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      )

      // Paragraph moves a bit more
      gsap.fromTo(
        ".hero-parallax-copy",
        { yPercent: 0 },
        {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      )

      // CTA buttons
      gsap.fromTo(
        ".hero-parallax-cta",
        { yPercent: 0 },
        {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      )

      // Circular text badge drifts a bit more
      gsap.fromTo(
        ".hero-parallax-circle",
        { yPercent: 0 },
        {
          yPercent: -28,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <Component />
    // <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
    //   {/* Soft background accents (kept subtle, not copied) */}
    //   <div className="absolute inset-0 overflow-hidden pointer-events-none">
    //     <div className="absolute top-20 left-10 w-64 h-64 bg-[#ffd6ef]/25 rounded-full blur-3xl" />
    //     <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#b45cff]/15 rounded-full blur-3xl" />
    //   </div>

    //   {/* Content container */}
    //   <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24">
    //     <motion.div
    //       initial="hidden"
    //       animate="visible"
    //       variants={{
    //         hidden: {},
    //         visible: { transition: { staggerChildren: 0.12 } },
    //       }}
    //       className="grid grid-cols-1 lg:grid-cols-12 gap-8"
    //     >
    //       {/* Left: Original content in left-aligned structure */}
    //       <div className="lg:col-span-9 flex flex-col">
    //         <motion.h1
    //           variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
    //           className="hero-parallax-title text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-extrabold leading-tight mb-6 text-balance text-[#1f2937] tracking-tight text-left"
    //         >
    //           DEVELOPING BEAUTIFUL & SCALABLE{" "}
    //           <br />
    //           <span
    //             className="text-4xl font-medium sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent"
    //             style={{ fontFamily: "var(--font-cookie)" }}
    //           >
    //             App & Web Experiences.
    //           </span>
    //         </motion.h1>


    //         <motion.p
    //           variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
    //           className="hero-parallax-copy text-base text-[#6b7280] mb-10 leading-relaxed max-w-2xl text-left"
    //         >
    //           I build smooth, functional mobile and web experiences using modern tools and clean design principles.
    //           Focused on performance, usability, and aesthetics — always learning, always creating.
    //         </motion.p>

    //         <motion.div
    //           variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
    //           className="hero-parallax-cta flex flex-wrap justify-start gap-4"
    //         >
    //           <Link
    //             href={"https://github.com/devyani-keche"}
    //             target="_blank"
    //           >
    //             <motion.span

    //               initial={{ opacity: 0, scale: 0.9 }}
    //               animate={{ opacity: 1, scale: 1 }}
    //               transition={{ duration: 0.6, delay: 2.4 }}
    //               whileTap={{ scale: 0.98 }}
    //               className="group relative text-base sm:text-lg font-bold transition-all duration-300 flex justify-center items-center"
    //             >
    //               <RainbowButton size="lg" variant="custom">Check Github</RainbowButton>
    //             </motion.span>


    //           </Link>
    //           <Button
    //             size="lg"
    //             variant="outline"
    //             className="rounded-full px-10 py-7 text-lg font-bold bg-white border-2 border-[#ff4db8] text-[#f33aa6] shadow-[0_6px_24px_rgba(255,77,184,0.15)] hover:bg-[#fce4f7]/30 hover:border-[#f33aa6] hover:text-[#f33aa6] hover:shadow-[0_10px_35px_rgba(139,43,226,0.25)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
    //           >
    //             <FileText className="mr-2 w-5 h-5" />
    //             Check Resume
    //           </Button>
    //         </motion.div>
    //       </div>

    //       {/* Right: Circular Text badge (moved to bottom-right) */}
    //       <div className="lg:col-span-4"></div>
    //     </motion.div>
    //   </div>
    //   {/* Absolute bottom-right circular text */}
    //   <div className="hero-parallax-circle absolute bottom-12 right-6">
    //     <CircularText text="APP*WEB*DEVELOPER*" onHover="speedUp" spinDuration={20} />
    //   </div>
    // </section>
  )
}
