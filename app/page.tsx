"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

import StaggeredMenu from "@/components/StaggeredMenu";
import GradualBlurMemo from "@/components/GradualBlur";

// Menu items
const menuItems = [
  { label: "About", ariaLabel: "Go to about section", link: "#about" },
  { label: "Skills", ariaLabel: "Go to skills section", link: "#skills" },
  { label: "Experience", ariaLabel: "Go to experience section", link: "#experience" },
  { label: "Projects", ariaLabel: "Go to projects section", link: "#projects" },
  { label: "Contact", ariaLabel: "Go to contact section", link: "#contact" },
];

// Social links
const socialItems = [
  { label: "GitHub", link: "https://github.com/devyani-keche" },
  { label: "LinkedIn", link: "https://linkedin.com/devyani-keche" },
  { label: "Leetcode", link: "https://leetcode.com/u/devyani_k/" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  // FORCE loader to be visible
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // 👈 loader visible for 2.2s

    return () => clearTimeout(timer);
  }, []);

  // Show loader first
  if (loading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen relative">
      {/* Navigation Menu */}
      <StaggeredMenu
        isFixed={false}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#1a1a1a"
        changeMenuColorOnOpen={true}
        colors={["#EC4899", "#DB2777"]}
        accentColor="#EC4899"
      />

      {/* Sections */}
      <HeroSection />

      <div className="relative">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Gradual Blur Effects */}
      <GradualBlurMemo
        target="page"
        position="bottom"
        height="5rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />

      <GradualBlurMemo
        target="page"
        position="top"
        height="2rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </main>
  );
}
