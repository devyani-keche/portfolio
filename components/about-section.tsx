"use client"

import { Heart, Code2, Palette, Coffee } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import Image from "next/image"
import me from "../public/me.jpeg"
import { InteractiveHoverButton } from "./ui/interactive-hover-button"
import Link from "next/link"

const highlights = [
  { icon: Code2, label: "5+ Years Experience" },
  { icon: Heart, label: "50+ Happy Clients" },
  { icon: Palette, label: "100+ Projects" },
  { icon: Coffee, label: "1000+ Cups of Coffee" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#fce4f7]/30 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-start mb-16">
          <span className="inline-block leading-3.5 py-1 pl-1 text-sm md:text-lg uppercase font-medium rounded-full  text-pink-500 tracking-widest mb-4">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
            Building with
            <span
              className="text-4xl font-medium sm:text-5xl bg-gradient-to-r from-[#ff4db8] to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-cookie)" }}
            >
              {" "}
              Code & Creativity
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay={0.1}>
            <div className="group relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff4db8]/20 to-pink-400/20 transform group-hover:rotate-12 transition-all duration-300 rotate-6" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200 to-white border border-[#fce4f7] shadow-xl overflow-hidden">
                <Image
                  height={100}
                  width={100}
                  placeholder="blur"
                  priority={true}
                  src={me}
                  alt="Devyani Keche working"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full select-none pointer-events-none h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.12}>
            <StaggerItem>
              <p className="text-lg text-[#6b7280] leading-relaxed mb-6">
                I'm a <span className="text-pink-500 font-semibold px-0.5 ">B.Tech CS undergrad</span> who loves
                learning by <span className="text-pink-500 font-semibold px-0.5 ">building 
                  real-world projects</span>. I'm still early in my
                journey, but I'm deeply passionate about turning ideas into thoughtful, usable digital experiences.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-[#6b7280] leading-relaxed mb-8">
                I’m a <span className="text-pink-500 font-semibold px-0.5 ">full-stack developer</span> experienced with
                <span className="text-pink-500 font-semibold px-0.5 "> React</span>,
                <span className="text-pink-500 font-semibold px-0.5 "> Expo</span> and working across frontend, backend, and
                <span className="text-pink-500 font-semibold px-0.5 "> GenAI</span>, focusing on writing clean, maintainable code
                and crafting interfaces that are intuitive, modern, scalable and delightful to use.
              </p>
            </StaggerItem>

            {/* Stats Grid */}
            {/* <StaggerItem>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#fce4f7] shadow-sm hover:shadow-md hover:border-[#ff4db8]/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff4db8]/10 to-[#f33aa6]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#ff4db8]" />
                    </div>
                    <span className="text-sm font-medium text-[#1a1a2e]">{item.label}</span>
                  </div>
                ))}
              </div>
            </StaggerItem> */}

            <Link href="https://www.linkedin.com/in/devyani-keche/" target="_blank">

              <InteractiveHoverButton>

                Follow Journey
              </InteractiveHoverButton>
            </Link>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
