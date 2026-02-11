"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedCopy = ({
  children,
  className = "",
  delay = 0,
  duration = 1.75,
  ease = "power4.out",
  stagger = 0.1,
  lineSelector = "",
  animateOnScroll = true,
  direction = "bottom",
  tag = "p",
  shouldAnimate = false,
  visibilityAmount = "85%",
}) => {
  const copyRef = useRef(null);
  const [copyId, setCopyId] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);
  const splitInstance = useRef(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    setCopyId(`copy-${Math.floor(Math.random() * 10000)}`);
  }, []);

  useEffect(() => {
    if (!copyId || !copyRef.current) return;

    const split = new SplitText(copyRef.current, {
      type: "lines",
      linesClass: `line-${copyId}`,
      autoSplit: true,
    });
    splitInstance.current = split;

    const selector = lineSelector || `.${split.linesClass}`;
    const lines = lineSelector
      ? document.querySelectorAll(selector)
      : split.lines;

    lines.forEach((line) => {
      const content = line.innerHTML;
      line.style.overflow = "hidden";
      line.innerHTML = `<span class="line-inner-${copyId}">${content}</span>`;
    });

    const initialY = direction === "top" ? "-100%" : "100%";
    gsap.set(`.line-inner-${copyId}`, {
      y: initialY,
      opacity: 0,
      display: "block",
    });
    gsap.set(copyRef.current, { opacity: 1, duration: 0 });

    setIsInitialized(true);

    return () => {
      split.revert();
    };
  }, [copyId, lineSelector, direction]);

  useGSAP(
    () => {
      if (!isInitialized || !copyRef.current) return;

      if (animateOnScroll) {
        if (hasPlayedRef.current) return;
        const tl = gsap.timeline({
          defaults: { ease, duration },
          scrollTrigger: {
            trigger: copyRef.current,
            start: `top ${visibilityAmount}`,
            toggleActions: "play none none none",
            once: true,
            onEnter: () => (hasPlayedRef.current = true),
          },
        });
        tl.to(`.line-inner-${copyId}`, { y: "0%", opacity: 1, stagger, delay });

        return () => {
          ScrollTrigger.getAll()
            .filter((st) => st.vars.trigger === copyRef.current)
            .forEach((st) => st.kill());
        };
      }

      if (shouldAnimate && !hasPlayedRef.current) {
        hasPlayedRef.current = true;
        gsap.to(`.line-inner-${copyId}`, {
          y: "0%",
          opacity: 1,
          stagger,
          delay,
          duration,
          ease,
        });
      }
    },
    {
      scope: copyRef,
      dependencies: [
        isInitialized,
        animateOnScroll,
        shouldAnimate,
        delay,
        duration,
        ease,
        stagger,
        direction,
      ],
    },
  );

  const Tag = tag;
  return (
    <Tag
      ref={copyRef}
      className={`animated-copy ${className} opacity-0`}
      data-copy-id={copyId}
    >
      {children}
    </Tag>
  );
};

export default AnimatedCopy;
