"use client"

import { Linkedin, Twitter, Globe } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import Image from "next/image"
import gdg from "@/public/gdglogo.jpeg"
import sih from "@/public/sih.png"
import vnit from "@/public/vnit.png"
const experiences = [
 {
  logo: vnit,
  company: "VNIT Research Internship",
  role: "Machine Learning Research Intern",
  period: "Jan 2025 – Present",
  location: "VNIT, Nagpur",
  socials: [
    { icon: Globe, url: "https://vnit.ac.in/" },
  ],
  technologies: [
    "Machine Learning",
    "Materials Informatics",
    "Data Science",
    "Generative AI",
    "Python",
  ],
  responsibilities: [
  "Developing a machine learning pipeline to study composition–property relationships using regression models.",
  "Performing data preprocessing, feature engineering, and dataset expansion for predictive modeling.",
  "Applying multi-objective optimization techniques to generate data-driven material recommendations.",
],

}
,

  {
    
    logo: gdg,
    company: "GDG RBU",
    role: "Core Team Member",
    period: "Ongoing",
    location: "On-campus community",
    socials: [
      { icon: Globe, url: "https://gdgrbu.tech/" },
      { icon: Linkedin, url: "https://www.linkedin.com/company/gdg-rbu/" },
    ],
    technologies: [
      "Community Building",
      "Event Management",
      "Web Development",
      "Design Collaboration",
    ],
    responsibilities: [
      "Planned, organized, and managed multiple tech events to ensure smooth execution.",
      "Contributed to brainstorming innovative ideas and developing event websites.",
      "Gained hands-on experience with new technologies while strengthening technical and collaborative skills.",
    ],
    timeline: [
      {
        title: "Marketing Team Lead",
        period: "Sep 2025 - Present · 4 mos",
      },
      {
        title: "Management Team Member",
        period: "Oct 2024 - Oct 2025 · 1 yr 1 mo",
        meta: "Nagpur, Maharashtra, India",
      },
    ],
  },

  {
    logo: sih,
    company: "Smart India Hackathon 2024",
    role: "Finalist (2nd Position) · Bitwise Brigade Team",
    period: "Dec 2024",
    location: "National-level hackathon, India",
    socials: [
      { icon: Globe, url: "https://www.sih.gov.in/" },
    ],
    technologies: [
      "Hackathon",
      "Problem Solving",
      "Transportation & Logistics",
      "Team Collaboration",
      "Prototype Development",
    ],
    responsibilities: [
      "Worked with a team under the theme 'Transportation and Logistics' in a 36-hour hackathon, solving a high-impact problem statement by AICTE, MIC-Student Innovation.",
      "Designed and built a functional prototype within the hackathon timeframe, focusing on real-world usability and performance.",
      "Collaborated with mentors and judges, iterating on the solution based on feedback to refine the overall impact and presentation.",
    ],
  },

]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b45cff]/10 rounded-full blur-3xl" />
      </div> */}

      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-start mb-16">
          <span className="inline-block leading-3.5 py-1 pl-1  text-sm md:text-lg uppercase font-medium rounded-full  text-pink-500 tracking-widest mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
            My Professional
            <span
              className="text-4xl font-medium sm:text-5xl bg-gradient-to-r from-[#ff4db8] to-pink-500 bg-clip-text text-transparent pb-4"
              style={{ fontFamily: "var(--font-cookie)" }}
            >
              {" "}
              Journey
            </span>
          </h2>
        </AnimatedSection>

        {/* Experience Cards */}
        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-dashed hover:border-pink-400 border-pink-300 shadow-sm hover:shadow-lg transition-all">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Company Logo */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#fce4f7] flex items-center justify-center shrink-0">
                      {typeof exp.logo === "string" ? (
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#1a1a2e] truncate">
                        {exp.company}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#f33aa6] font-medium">
                        {exp.role}
                      </p>
                    </div>
                    {/* Social Icons */}
                    <div className="hidden sm:flex gap-2 ml-2 flex-wrap">
                      {exp.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          className="w-7 h-7 rounded-full bg-[#fce4f7]/50 flex items-center justify-center hover:bg-[#fce4f7] transition-colors"
                        >
                          <social.icon className="w-3.5 h-3.5 text-[#f33aa6]" />
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Date & Location */}
                  <div className="mt-1 md:mt-0 text-left md:text-right">
                    <p className="text-sm sm:text-base font-medium text-[#ff4db8]">{exp.period}</p>
                    <p className="text-xs sm:text-sm text-[#6b7280]">{exp.location}</p>
                  </div>
                </div>

                {/* Technologies & Tools */}
                <div className="mb-4">
                  <p className="text-xs sm:text-sm font-medium text-[#6b7280] uppercase tracking-wide mb-2">
                    Skills & Domain
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-[#fce4f7]/50 border border-[#fce4f7] text-[#f33aa6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="space-y-2 mt-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#4b5563]">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#ff4db8] to-[#f33aa6] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Optional timeline view */}
                {Array.isArray((exp as any).timeline) && (exp as any).timeline.length > 0 && (
                  <div className="mt-5">
                    <p className="text-xs sm:text-sm font-medium text-[#6b7280] uppercase tracking-wide mb-2">
                      Role Timeline
                    </p>
                    <ol className="relative mt-1 border-l border-gray-300/60 pl-3 sm:pl-4">
                      {(exp as any).timeline.map((item: any, i: number) => (
                        <li key={i} className="relative mb-3 last:mb-0 pl-1 sm:pl-2">
                          <span className="absolute -left-[16px] lg:-left-[20px] top-2 h-2 w-2 rounded-full bg-gray-400" />
                          <h4 className="text-sm sm:text-base font-medium text-[#111827]">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-[#6b7280]">{item.period}</p>
                          {item.meta && (
                            <p className="text-xs sm:text-sm text-[#6b7280]">{item.meta}</p>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
