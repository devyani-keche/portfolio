"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin once in the client
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollProviderProps {
    children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            duration: 1.2,
        });

        let rafId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            ScrollTrigger.update();
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        const onScroll = () => {
            ScrollTrigger.update();
        };

        lenis.on("scroll", onScroll);

        return () => {
            cancelAnimationFrame(rafId);
            (lenis as any).off("scroll", onScroll);
            lenis.destroy();
            // Kill all ScrollTrigger instances since ScrollTrigger.kill() doesn't exist
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return <>{children}</>;
}
