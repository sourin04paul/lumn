"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Launch from "./components/Launch";
import Waitlist from "./components/Waitlist";

export default function Home() {
  // FIXED: Changed HTMLMainElement to HTMLElement to pass TypeScript verification
  const containerRef = useRef<HTMLElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current || !sequenceRef.current) return;

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
          end: "+=400%", 
          pin: true,     
          scrub: 1.5,    
        }
      });

      tl
        .to(".logo-wrapper", {
          scale: 0.25,
          top: "12%",
          ease: "power2.inOut",
          duration: 2
        }, 0)
        .to(".scroll-indicator", { 
          opacity: 0, 
          duration: 0.5 
        }, 0)
        
        .fromTo(".brand-lumn", 
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 1.5 },
          1
        )
        
        .fromTo(".brand-tagline",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 1.5 },
          2
        )
        
        .fromTo(".launch-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 1.5 },
          3
        )
        
        .to({}, { duration: 1 });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={containerRef} className="relative w-full bg-transparent">
      <div ref={sequenceRef} className="relative w-full h-screen overflow-hidden">
        <Hero />
        <Brand />
        <Launch />
      </div>
      <Waitlist />
    </main>
  );
}