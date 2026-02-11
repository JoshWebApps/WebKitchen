"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Mission from "@/components/Mission";
import Nav from "@/components/Nav";
import History from "@/components/History";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const heroContainer = React.useRef(null);
  const secondaryContainer = React.useRef(null);

  useEffect(() => {
    gsap.to(secondaryContainer.current, {
      translateY: "-30svh",
      scrollTrigger: {
        trigger: heroContainer.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-screen h-full overscroll-none overflow-hidden">
      <Loader />
      <Nav />

      <div className="relative" ref={heroContainer}>
        <Hero />
      </div>
      <div className="relative z-4 bg-secondary" ref={secondaryContainer}>
        <Mission />
        <History />
      </div>
    </div>
  );
}
