"use client"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { RainbowButton } from "./ui/rainbow-button"
import Magnet from "./Magnet"
import Link from "next/link"
import Image from "next/image"
export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#fce4f7]/30 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center bg-gradient-to-br from-white via-pink-100/90 to-pink-50/50 border-2 border-dashed border-pink-300 rounded-3xl z-10 max-w-6xl mx-auto">
        <div className="relative  px-6 py-12 flex flex-col ">
          <AnimatedSection className="text-start mb-12 sm:mb-16">
            <span className="inline-block leading-3.5 py-1 text-sm md:text-lg font-medium rounded-full text-pink-500 tracking-widest uppercase mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3">
              Let&apos;s
              <span
                className="text-4xl md:text-5xl font-medium  bg-gradient-to-r from-[#ff4db8] to-pink-500 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-cookie)" }}
              >
                {" "}
                Connect & Collaborate
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="max-w-2xl px-2">
            <p className="text-lg text-[#47494b] leading-relaxed mb-6 max-w-xl">
              I&apos;m currently open to
              <span className="text-pink-500 font-semibold px-1"> internship roles </span>
              and
              <span className="text-pink-500 font-semibold px-1"> opportunities </span>
              where I can learn, contribute, and build
              <span className="text-pink-500 font-semibold px-1"> real impact </span>
              through
              <span className="text-pink-500 font-semibold px-1"> design &amp; development.</span>
            </p>


            <div className="flex flex-wrap items-center gap-4">
              {/* <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 text-base font-semibold bg-gradient-to-r from-[#ff4db8] to-[#f33aa6] text-white shadow-[0_10px_35px_rgba(255,77,184,0.45)] hover:shadow-[0_14px_45px_rgba(255,77,184,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXMnpzJbXLhGdFBPzCHbZrhVKvpnFLkdCSFJMRqJRCsqXSxRCpVpHfbDfPrxhdPSMkPMW">Say hello</Link>
            </Button> */}
              <Link
                href={"https://mail.google.com/mail/u/0/#inbox?compose=jrjtXMnpzJbXLhGdFBPzCHbZrhVKvpnFLkdCSFJMRqJRCsqXSxRCpVpHfbDfPrxhdPSMkPMW"}
                target="_blank"
                className="mt-6"
              >
                <Magnet padding={50} disabled={false} magnetStrength={50}>
                  <span
                    className="group relative text-base sm:text-lg font-bold transition-all duration-300 flex justify-center items-center"
                  >
                    <RainbowButton size="xl" variant="custom">
                      Let&apos;s Connect!

                    </RainbowButton>
                  </span>

                </Magnet>

              </Link>

            </div>
          </AnimatedSection>



        </div>
        <AnimatedSection delay={0.1}>
          <Image src="https://camo.githubusercontent.com/9efed39b8f29b617015d9af452405f6124cb022c28a605b3ef2d943393894e52/68747470733a2f2f6d656469612e74656e6f722e636f6d2f306d31477375442d353377414141416a2f6d6c62622d6a6a6b2d6a6a6b2d6d6c62622e676966" alt="Description" width={300} height={300} />
        </AnimatedSection>
      </div>

    </section>
  )
}
