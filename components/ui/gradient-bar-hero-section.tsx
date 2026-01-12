"use client"
import React, { useState, useLayoutEffect, useRef } from 'react';
import { Github, Instagram, Linkedin, Menu, X, FileText } from 'lucide-react';
import Link from "next/link"
import Magnet from '../Magnet';
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import CircularText from "../CircularText"
import { RainbowButton } from "./rainbow-button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { InteractiveHoverButton } from './interactive-hover-button';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}


type AvatarProps = {
  imageSrc: string;
  delay: number;
};

const Avatar: React.FC<AvatarProps> = ({ imageSrc, delay }) => {
  return (
    <div
      className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={imageSrc}
        alt="User avatar"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

const TrustElements: React.FC = () => {
  const avatars = [
    "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
  ];

  return (
    <div className="inline-flex items-center space-x-3 bg-gray-900/60 backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
      <div className="flex -space-x-2 sm:-space-x-3">
        {avatars.map((avatar, index) => (
          <Avatar key={index} imageSrc={avatar} delay={index * 200} />
        ))}
      </div>
      <p className="text-white animate-fadeIn whitespace-nowrap font-space" style={{ animationDelay: '800ms' }}>
        <span className="text-white font-semibold">2.4K</span> currently on the waitlist
      </p>
    </div>
  );
};

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative z-10 w-full">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-900/60 border border-gray-700 focus:border-white outline-none text-white text-sm sm:text-base shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 font-space"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base font-space ${isSubmitting
              ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
              : 'bg-white hover:bg-gray-100 text-black'
              }`}
          >
            {isSubmitting ? (
              <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
            ) : (
              'Join The Waitlist'
            )}
          </button>
        </form>
      ) : (
        <div className="bg-green-500/20 border border-green-500/30 text-green-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-center animate-fadeIn text-sm sm:text-base font-space">
          Thanks! We'll notify you when we launch.
        </div>
      )}
    </div>
  );
};

const GradientBars: React.FC = () => {
  const [numBars] = useState(15);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 20;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full w-full md:px-3 lg:px-0 "
        style={{

          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              className='animate-pulse'
              style={{
                flex: '1 0 calc(100% / 15)',
                maxWidth: 'calc(100% / 15)',
                height: '100%',
                background: 'linear-gradient(to top, #ffb6c1, transparent)', // light pink
                transform: `scaleY(${height / 100})`,
                transformOrigin: 'bottom',
                transition: 'transform 0.5s ease-in-out',
                // animation: 'pulseBar 2s ease-in-out infinite alternate',
                animationDelay: `${index * 0.1}s`,
                outline: '5px solid rgba(0, 0, 0, 0)',
                boxSizing: 'border-box',
              }}
            />
          );
        })}

      </div>

    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl tracking-tighter font-space">
              Preplex
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300 font-space">
              Features
            </a>
            <a href="#vision" className="text-gray-300 hover:text-white transition-colors duration-300 font-space">
              Vision
            </a>
            <a href="#press" className="text-gray-300 hover:text-white transition-colors duration-300 font-space">
              Press
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 font-space">
              Contact
            </a>
            <button className="bg-white hover:bg-gray-100 text-black px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-space">
              Join The Waitlist
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Features
              </a>
              <a href="#vision" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Vision
              </a>
              <a href="#press" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Press
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Contact
              </a>
              <button className="bg-white hover:bg-gray-100 text-black px-5 py-2 rounded-full transition-all duration-300 w-full font-space">
                Join The Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default function Component() {
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
    // <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-12 overflow-hidden">
    //   <div className="absolute inset-0 bg-gray-950"></div>
    //   <GradientBars />
    //   <Navbar />

    //   <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen py-8 sm:py-16">
    //     <div className="mb-6 sm:mb-8">
    //       <TrustElements />
    //     </div>

    //     <h1 className="w-full text-white leading-tight tracking-tight mb-6 sm:mb-8 animate-fadeIn px-4">
    //       <span className="block font-inter font-medium text-[clamp(1.5rem,6vw,3.75rem)] whitespace-nowrap">
    //         Redefining What's Possible,
    //       </span>
    //       <span className="block font-instrument italic text-[clamp(1.5rem,6vw,3.75rem)] whitespace-nowrap">
    //         One Experience at a Time.
    //       </span>
    //     </h1>

    //     <div className="mb-6 sm:mb-10 px-4">
    //       <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-400 leading-relaxed animate-fadeIn animation-delay-200 font-space">
    //         Be the first to know when we launch.
    //       </p>
    //       <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-400 leading-relaxed animate-fadeIn animation-delay-300 font-space">
    //         Join the waitlist and get exclusive early access.
    //       </p>
    //     </div>

    //     <div className="w-full max-w-2xl mb-6 sm:mb-8 px-4">
    //       <WaitlistForm />
    //     </div>

    //     <div className="flex justify-center space-x-6">
    //       <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
    //         <Instagram size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
    //       </a>
    //       <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
    //         <Linkedin size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
    //       </a>
    //       <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
    //         <Github size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden md:px-3 lg:px-10 ">
      {/* Soft background accents (kept subtle, not copied) */}
      <GradientBars />
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#ffd6ef]/25 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#b45cff]/15 rounded-full blur-3xl" />
          </div> */}

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-12 md:pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left: Original content in left-aligned structure */}
          <div className="lg:col-span-10 flex flex-col">
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              className="hero-parallax-title text-5xl  lg:text-5xl xl:text-7xl font-extrabold leading-tight mb-6 text-balance text-[#1f2937] tracking-tight text-center md:text-left"
            >
              CREATING 
              <br />MEANINGFUL & SCALABLE{" "}
              <br />
              <span
                className=" font-medium text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-cookie)" }}
              >
                App & Web Experiences.
              </span>
            </motion.h1>


            <motion.p
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="hero-parallax-copy font-medium text-base text-[#333539] mb-10 leading-relaxed max-w-2xl text-center md:text-left"
            >
              I create smooth, functional software solutions using modern tools and strong fundamentals.
Focused on performance, usability, and building things better with every iteration.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="hero-parallax-cta flex  justify-start gap-4"
            >
              <Link
                href={"https://github.com/devyani-keche"}
                target="_blank"
              >
                <Magnet padding={50} disabled={false} magnetStrength={50}>
                  <motion.span
                    transition={{ duration: 0.6, delay: 2.4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative text-sm md:text-base font-bold transition-all duration-300 flex justify-center items-center"
                  >
                    <RainbowButton size="lg" variant="custom">

                      <p className='flex gap-4 justify-center items-center'>Check Github  <Github size={50} className="w-20 h-20" /></p>
                    </RainbowButton>
                  </motion.span>

                </Magnet>

              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 lg:px-10 lg:py-7 text-base md:text-lg font-bold bg-white border-2 border-[#ff4db8] text-[#f33aa6] shadow-[0_6px_24px_rgba(255,77,184,0.15)] hover:bg-[#fce4f7]/30 hover:border-[#f33aa6] hover:text-[#f33aa6] hover:shadow-[0_10px_35px_rgba(139,43,226,0.25)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              > */}
              {/* <FileText className="mr-2 w-5 h-5" /> */}

              <InteractiveHoverButton
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/Devyani-resume.pdf"
                  link.download = "Devyani-resume.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                Check Resume
              </InteractiveHoverButton>

              {/* </Button> */}
            </motion.div>
          </div>

          {/* Right: Circular Text badge (moved to bottom-right) */}
          <div className="lg:col-span-4"></div>
        </motion.div>
      </div>
      {/* Absolute bottom-right circular text */}
      <div className="hero-parallax-circle absolute bottom-4 md:bottom-12 right-10">
        <CircularText text="APP*WEB*DEVELOPER*" onHover="speedUp" spinDuration={20} />
      </div>
    </section>
  );
};
