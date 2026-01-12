import { Github, Linkedin, MapPin, Twitter, Dribbble, Heart } from "lucide-react"
import CurvedLoop from './CurvedLoop';
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/devyani-keche", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/devyani-keche/", label: "LinkedIn" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  // { icon: Dribbble, href: "#", label: "Dribbble" },
]

export function Footer() {
  return (
    <footer className="pt-10 border-t-2 rounded-t-3xl border-pink-200 max-w-6xl mx-auto px-6">



      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-2">
          {/* Logo */}
          <Link
            style={{ fontFamily: "var(--font-cookie)" }}
            href="/"
            className="text-5xl py-1 font-medium bg-gradient-to-r from-[#ff4db8] to-[#f33aa6] bg-clip-text text-transparent"
          >
            Devyani Keche
          </Link>

          {/* Short intro */}
          <p className="text-base text-muted-foreground text-center max-w-md">
            Full-stack developer crafting thoughtful, modern web and app experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white border border-[#fce4f7] flex items-center justify-center text-[#6b7280] hover:text-[#ff4db8] hover:border-[#ff4db8]/30 hover:shadow-lg transition-all"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground text-sm pb-6">devyanik2006@gmail.com</p>

          {/* Nav Links */}
          <div className="text-accent/65">
            <Link className="hover:text-pink-600" href={"#about"}>About |</Link>
            <Link className="hover:text-pink-600" href={"#skills"}> Skills |</Link>
            <Link className="hover:text-pink-600" href={"#projects"}> Projects |</Link>
            <Link className="hover:text-pink-600" href={"#experience"}> Experiences </Link>
          </div>

          {/* Based in  */}
          <div className="text-sm flex gap-3 justify-center items-center">

            <MapPin /> <p>Nagpur, Maharashtra, India</p>
          </div>




          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-6">
            All rights reserved - Devyani Keche ©{" "}
            {new Date().getFullYear()}
          </p>

          <CurvedLoop
            marqueeText="Design ✦ Build  ✦ Thoughtful ✦ Web ✦ & ✦ App ✦ Experiences ✦"
            speed={1}
            curveAmount={0}
            direction="right"
            interactive={true}
            className="custom-text-style"
          />
        </div>
      </div>
    </footer>
  )
}
