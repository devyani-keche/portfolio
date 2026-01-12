"use client"

import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import parkngo from "@/public/parkngo.png"
import spellbee from "@/public/spellbee.png"
import prettyeasy from "@/public/prettyeasy.png"
const projects = [
  {
    title: "PrettyEasy – Salon Booking App",
    description:
      "A mobile app to book salon appointments in advance, view real-time salon details, and navigate via Google Maps, built to save time and skip queues.",
    image: prettyeasy.src,
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "Firebase Authentication",
      "Firestore",
      "Formik",
      "Yup",
      "Google Maps",
    ],
    liveUrl: "https://expo.dev/accounts/devyanik/projects/prettyeasy/builds/7bd56950-8435-43b2-9f72-915a9980f591",
    githubUrl: "https://github.com/devyani-keche/Pretty-Easy",
  },
  {
    title: "Park-N-Go – Smart Parking Platform",
    description:
      "A smart parking web application that helps users discover available parking spots, see real-time availability, and book slots in advance. I focused on building the React frontend with a mobile-first UI for smooth on-the-go usage.",
    image: parkngo.src,
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "YOLOv8",
      "REST APIs",
      "Responsive Web Design",
    ],
    liveUrl: "https://park-n-go-ui-prototype.vercel.app/",
    githubUrl: "https://github.com/devyani-keche/SIH_SmartParking",
  },
  {
    title: "Spell-Bee – Spelling Quiz Game",
    description:
      "An interactive spelling quiz web app that uses browser speech synthesis to pronounce words, validate answers in real time, and track scores in a clean, distraction‑free UI.",
    image: spellbee.src,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Speech API",
      "GitHub Pages",
    ],
    liveUrl: "https://devyani-keche.github.io/spellbee/index.html",
    githubUrl: "https://github.com/devyani-keche/spellbee",
  },

]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}

        <AnimatedSection className="text-start mb-16">
          <span className="inline-block leading-3.5 py-1 pl-1  text-sm md:text-lg uppercase font-medium rounded-full  text-pink-500 tracking-widest mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
            Things I've
            <span
              className="text-4xl font-medium md:text-5xl bg-gradient-to-r from-[#ff4db8] to-pink-500 bg-clip-text text-transparent pb-4"
              style={{ fontFamily: "var(--font-cookie)" }}
            >
              {" "}
              Built
            </span>
          </h2>
        </AnimatedSection>

        {/* Projects List */}
        <StaggerContainer className="space-y-8" staggerDelay={0.15}>
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <div className="p-4 rounded-3xl border-2 border-dashed border-[#fce4f7] hover:border-[#ff4db8]/40 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Project Preview Image */}
                  <div className="md:w-1/2 shrink-0">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#fce4f7] to-[#ffd6ef] p-2 shadow-lg shadow-[#ff4db8]/10">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-56 md:h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 flex flex-col justify-center py-2">
                    <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">{project.title}</h3>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mb-4">
                      <Link
                        href={project.liveUrl}
                 
                        className="bg-gradient-to-r  cursor-pointer from-[#ff4db8] to-[#f33aa6] text-white hover:opacity-90 flex justify-center items-center rounded-lg h-8 text-sm  px-3"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Link>
                      <Link
                        href={project.githubUrl}
                      
                        className="flex justify-center items-center rounded-lg h-8 text-sm  px-3 cursor-pointer border-pink-300 hover:border-pink-400 border-dashed border-2 text-[#1a1a2e] bg-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </div>

                    <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">{project.description}</p>

                    {/* Technologies Used */}
                    <div>
                      <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wide mb-2">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-[#fce4f7]/50 border border-[#fce4f7] text-[#f33aa6]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>


      </div>
    </section>
  )
}
