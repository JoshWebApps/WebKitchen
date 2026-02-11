"use client";

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCopy from "./Text/AnimatedCopy";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        scaleX: 1,
        transformOrigin: "left",
        duration: 2,
        ease: "power4.out",
        delay: 3.2,
      });

      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-screen h-[120svh] relative ">
      <HeroBackground bgRef={bgRef} />

      <div className="w-full h-screen relative z-[2]">
        <div className="text-secondary w-full h-fit absolute bottom-0 left-0 flex items-end mainXPadding">
          <div className="w-1/2 space-y-[1.5vw]">
            <HeadingText />
            <SubHeading />
          </div>

          <div className="w-1/2 h-fit space-y-[1.5vw]">
            <div ref={lineRef} className="w-full scale-x-0 h-px bg-secondary" />
            <AnimatedCopy delay={3.5} className="text-[1.5vw] w-[90%]">
              For over 75 years, we have been recycling used solvents and
              refining them into high-quality products - safely, efficiently,
              and sustainably.
            </AnimatedCopy>
          </div>
        </div>
      </div>
    </div>
  );
}

const SubHeading = () => {
  const container = useRef([]);

  useGSAP(() => {
    gsap.to(container.current, {
      opacity: 1,
      translateY: 0,
      duration: 2,
      ease: "power4.out",
      delay: 3.5,
    });
  }, []);

  return (
    <div
      ref={container}
      className="flex items-end gap-[1.5vw] text-[2.5vw] leading-none opacity-0 translate-y-[50%]"
    >
      <p>Sustainable</p>
      <div>
        <Svg />
      </div>
      <p>Pure</p>
      <div>
        <Svg />
      </div>
      <p>Valuable</p>
    </div>
  );
};

const HeadingText = () => {
  const text = useRef(null);

  useGSAP(() => {
    if (!text.current) return;

    const split = new SplitText(text.current, { type: "lines" });
    const lines = split.lines;

    gsap.set(lines, { y: "10%", opacity: 0, display: "block" });

    gsap.to(lines, {
      y: "0%",
      opacity: 1,
      duration: 1.75,
      ease: "power4.out",
      stagger: 0.1,
      delay: 3,
    });
  }, []);

  return (
    <h1
      ref={text}
      className="flex flex-col text-[11.5vw]  relative whitespace-nowrap leading-none tracking-tight"
    >
      <span className=" ">Orm Bergold</span>
      <span className=" ">Chemie</span>
    </h1>
  );
};

const Svg = () => {
  return (
    <svg
      viewBox="0 0 50 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[1.3vw]"
    >
      <path
        d="M49.2262 37.6774V39.7551L49.0008 42.0014C47.5745 52.8206 38.7407 61.6537 27.8982 63.0248L25.3645 63.25C24.8654 63.2346 24.3591 63.2706 23.86 63.25C12.6871 62.78 3.02901 55.0546 0.607543 44.0534C-1.25204 35.6049 1.31041 29.121 6.2048 22.4273C11.4254 15.2892 18.7299 8.97915 20.7089 0C23.5101 1.94394 26.2187 4.04524 28.8058 6.26689C37.5161 13.7433 48.5954 25.6209 49.2262 37.6785V37.6774Z"
        fill="white"
      />
    </svg>
  );
};

const HeroBackground = ({ bgRef }) => {
  const images = useRef([]);

  useEffect(() => {
    // Ensure first image is visible immediately
    if (images.current[0]) images.current[0].style.opacity = 1;

    const tl = gsap.timeline({ repeat: -1, delay: 5, repeatDelay: 2 });

    gsap.to(images.current[0], {
      scale: 1,
      duration: 2,
      ease: "power4.out",
      delay: 2.5,
    });

    tl.to(images.current[0], { opacity: 0, duration: 2 })
      .to(images.current[1], { opacity: 1, duration: 2 }, "-=2")
      .to(images.current[1], { opacity: 0, duration: 2, delay: 2 })
      .to(images.current[2], { opacity: 1, duration: 2 }, "-=2")
      .to(images.current[2], { opacity: 0, duration: 2, delay: 2 })
      .to(images.current[0], { opacity: 1, duration: 2 }, "-=2");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={bgRef} className="absolute inset-0 will-change-transform ">
      <div className="w-full h-full bg-black/55 absolute inset-0 z-[1]" />

      <img
        ref={(el) => (images.current[0] = el)}
        src="/images/clean-tank-farm.jpg"
        alt="Clean Tank Farm"
        className="w-full h-full object-cover absolute inset-0 scale-120"
      />
      <img
        ref={(el) => (images.current[1] = el)}
        src="/images/orm.jpg"
        alt="ORM Image"
        className="w-full h-full object-cover absolute inset-0 opacity-0"
      />
      <img
        ref={(el) => (images.current[2] = el)}
        src="/images/tank-farm.jpg"
        alt="Tank Farm Image"
        className="w-full h-full object-cover absolute inset-0 opacity-0"
      />
    </div>
  );
};
