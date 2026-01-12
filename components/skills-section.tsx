"use client"

import { Smartphone, Globe, Wrench } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import LogoLoop from "./LogoLoop";
import firebase from "@/public/techstack/firebase.png"
import expo from "@/public/techstack/Expo.png"
import reactlogo from "@/public/techstack/react.png"
import nextjs from "@/public/techstack/next.png"
import tailwindcss from "@/public/techstack/tailwind.png"
import python from "@/public/techstack/python.png"
import c from "@/public/techstack/c.png"
import cpp from "@/public/techstack/cpp.png"
import java from "@/public/techstack/java.png"
import github from "@/public/techstack/github.png"
import vscode from "@/public/techstack/vscode.png"
import vercel from "@/public/techstack/vercel.png"
import android from "@/public/techstack/android.png"
import html from "@/public/techstack/html.png"
import css from "@/public/techstack/css.png"
import sql from "@/public/techstack/sql.png"
import js from "@/public/techstack/js.png"
import Image from "next/image";
import mongo from "@/public/techstack/mongodb.png"
import mysql from "@/public/techstack/mysql.png"
import langchain from "@/public/techstack/langchain.png"
import androidstudio from "@/public/techstack/androidstudio.png"
import typescript from "@/public/techstack/typescript.png"
import figma from "@/public/techstack/figma.png"
import canva from "@/public/techstack/canva.png"

const techLogos = [
  { src: reactlogo.src, alt: "React", title: "React", href: "https://react.dev" },
  { src: nextjs.src, alt: "Next.js", title: "Next.js", href: "https://nextjs.org" },
  { src: expo.src, alt: "Expo", title: "Expo", href: "https://expo.dev" },
  { src: android.src, alt: "Android", title: "Android", href: "https://www.android.com" },
  { src: androidstudio.src, alt: "Android Studio", title: "Android Studio", href: "https://developer.android.com/studio" },

  { src: html.src, alt: "HTML", title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: css.src, alt: "CSS", title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { src: js.src, alt: "JavaScript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

  { src: python.src, alt: "Python", title: "Python", href: "https://www.python.org" },
  { src: java.src, alt: "Java", title: "Java", href: "https://www.java.com" },

  { src: mysql.src, alt: "MySQL", title: "MySQL", href: "https://www.mysql.com" },
  { src: mongo.src, alt: "MongoDB", title: "MongoDB", href: "https://www.mongodb.com" },
  { src: firebase.src, alt: "Firebase", title: "Firebase", href: "https://firebase.google.com" },

  { src: langchain.src, alt: "LangChain", title: "LangChain", href: "https://www.langchain.com" },

  { src: github.src, alt: "GitHub", title: "GitHub", href: "https://github.com" },
  { src: vscode.src, alt: "VS Code", title: "VS Code", href: "https://code.visualstudio.com" },
  { src: vercel.src, alt: "Vercel", title: "Vercel", href: "https://vercel.com" },
  { src: typescript.src, alt: "TypeScript", title: "TypeScript", href: "https://www.typescriptlang.org" },
{ src: figma.src, alt: "Figma", title: "Figma", href: "https://www.figma.com" },
{ src: canva.src, alt: "Canva", title: "Canva", href: "https://www.canva.com" },

];


const skillSections = [
  {
  icon: Globe,
  title: "Frontend & Web",
  skills: [
    { image: html, label: "HTML" },
    { image: css, label: "CSS" },
    { image: js, label: "JavaScript" },
    { image: typescript, label: "TypeScript" }, // ✅ ADD
    { image: reactlogo, label: "React" },
    { image: nextjs, label: "Next.js" },
    { image: tailwindcss, label: "Tailwind CSS" },
  ],
},

  {
    icon: Smartphone,
    title: "Mobile & App Development",
    skills: [
      { image: java, label: "Java (Android)" },
      { image: androidstudio, label: "Android Studio" },
      { image: reactlogo, label: "React Native" },
      { image: expo, label: "Expo" },
      { image: firebase, label: "Firebase" },
    ],
  },
  {
  icon: Wrench,
  title: "Languages, Databases & Tools",
  skills: [
    { image: c, label: "C" },
    { image: cpp, label: "C++" },
    { image: python, label: "Python" },
    { image: java, label: "Java" },
    { image: sql, label: "Oracle SQL" },
    { image: mysql, label: "MySQL" },
    { image: mongo, label: "MongoDB" },
    { image: firebase, label: "Firestore" },
    { image: langchain, label: "LangChain" },
    { image: figma, label: "Figma" },   // ✅ ADD
    { image: canva, label: "Canva" },   // ✅ ADD
    { image: github, label: "GitHub" },
    { image: vscode, label: "VS Code" },
    { image: vercel, label: "Vercel" },
  ],
},

]


export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-start mb-16">
          <span className="inline-block leading-3.5 py-1 pl-1  text-sm md:text-lg uppercase font-medium rounded-full  text-pink-500 tracking-widest mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
            What I
            <span
              className="text-4xl font-medium sm:text-5xl bg-gradient-to-r from-[#ff4db8] to-pink-500 bg-clip-text text-transparent pb-4"
              style={{ fontFamily: "var(--font-cookie)" }}
            >
              {" "}
              Built with
            </span>
          </h2>
        </AnimatedSection>

        {/* Tech logo loop */}
        <AnimatedSection className="mb-12">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology stack"
          />
        </AnimatedSection>



        {/* Skills bento grid */}
        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 md:auto-rows-[minmax(0,1fr)]"
          staggerDelay={0.15}
        >
          {/* Featured: more content on the left (Languages & Tools) */}
          <StaggerItem className="md:row-span-2">
            <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-pink-200/50 border-2 border-dashed to-white border-pink-300  hover:border-pink-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff4db8]/15 to-[#f33aa6]/20 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-[#ff4db8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e]">{skillSections[2].title}</h3>
                  <p className="text-xs text-[#6b7280]">Core languages & everyday tools I rely on.</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-start py-12 items-center gap-3">
                {skillSections[2].skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white/90 border border-[#fce4f7] text-[#f33aa6] hover:bg-[#fce4f7] hover:text-[#5b21b6] transition-colors"
                  >
                    <span className="relative w-7 h-7 rounded-full bg-[#fdf2ff] flex items-center justify-center overflow-hidden shadow-sm">
                      <Image
                        src={skill.image}
                        alt={skill.label}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Top-right: Frontend & Web */}
          <StaggerItem>
            <div className="h-full p-6 rounded-3xl bg-gradient-to-bl from-pink-200/50 border-2 border-dashed to-white border-pink-300  hover:border-pink-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff4db8]/10 to-[#f33aa6]/15 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#ff4db8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e]">{skillSections[0].title}</h3>
                  <p className="text-xs text-[#6b7280]">Everything I use to build modern UIs.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillSections[0].skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-[#fce4f7]/60 border border-[#fce4f7] text-[#f33aa6] hover:bg-[#fce4f7] transition-colors"
                  >
                    <span className="relative w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Image
                        src={skill.image}
                        alt={skill.label}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Bottom-right: Mobile & Apps */}
          <StaggerItem>
            <div className="h-full p-6 rounded-3xl bg-gradient-to-tl from-pink-200/50 border-2 border-dashed to-white border-pink-300  hover:border-pink-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff4db8]/10 to-[#f33aa6]/15 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-[#ff4db8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e]">{skillSections[1].title}</h3>
                  <p className="text-xs text-[#6b7280]">Tools I use for mobile-first experiences.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillSections[1].skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-[#fce4f7]/60 border border-[#fce4f7] text-[#f33aa6] hover:bg-[#fce4f7] transition-colors"
                  >
                    <span className="relative w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Image
                        src={skill.image}
                        alt={skill.label}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
