"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Launch from "./components/Launch";
import Waitlist from "./components/Waitlist";

export default function Home() {
  const containerRef = useRef<HTMLMainElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger inside useEffect to avoid SSR issues
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !sequenceRef.current) return;

    // Use gsap.context for React cleanup safety
    let ctx = gsap.context(() => {
      
      // 1. Initial Breathing Animation for Logo (Infinite)
      gsap.to(".logo-svg", {
        scale: 1.03,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.to(".logo-glow", {
        opacity: 0.8,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Master Scroll Sequence Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sequenceRef.current,
          start: "top top",
          end: "+=400%", // Requires scrolling 4x the viewport height to complete
          pin: true,     // Pins the container in place while animations run
          scrub: 1.5,    // Apple-style smooth scrubbing lag
        }
      });

      tl
        // Step 1: Shrink Logo and move it upwards
        .to(".logo-wrapper", {
          scale: 0.25,
          top: "12%",
          ease: "power2.inOut",
          duration: 2
        }, 0)
        
        // Step 2: "LUMN" fades in
        .fromTo(".brand-lumn", 
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 1.5 },
          1
        )
        
        // Step 3: Tagline fades in
        .fromTo(".brand-tagline",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 1.5 },
          2
        )
        
        // Step 4: Launch announcement fades in
        .fromTo(".launch-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 1.5 },
          3
        )
        
        // Buffer at the end of the timeline before unpinning
        .to({}, { duration: 1 });

    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="relative w-full bg-transparent">
      {/* Pinned Scroll Sequence */}
      <div ref={sequenceRef} className="relative w-full h-screen overflow-hidden">
        <Hero />
        <Brand />
        <Launch />
      </div>

      {/* Waitlist Section (Scrolls in naturally after sequence completes) */}
      <Waitlist />
    </main>
  );
}