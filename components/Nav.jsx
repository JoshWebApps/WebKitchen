"use client";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Nav() {
  const navItems = [
    "Mission",
    "History",
    "Services",
    "Products",
    "Downloads & Polciies",
    "Careers",
  ];

  const navRef = React.useRef(null);
  const logoRef = React.useRef(null);

  useGSAP(() => {
    const vh = window.innerHeight;

    gsap.to(navRef.current, {
      y: 0,
      scrollTrigger: {
        trigger: document.body,
        start: () => 0.2 * vh,
        end: () => 0.5 * vh,
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div ref={logoRef} className="fixed top-[3svh] left-[5vw] z-10 w-[3vw]">
        <img
          src="/images/logo.png"
          alt="Logo Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        ref={navRef}
        className="w-fit h-fit fixed top-[3svh] left-1/2 -translate-x-1/2 z-10 translate-y-[-200%]"
      >
        <div className="flex">
          {navItems.map((item, index) => {
            return (
              <div
                className={`${index === 0 ? "rounded-l-sm" : ""} px-[2vw] border-r border-black/20 whitespace-nowrap bg-secondary/80 py-[0.9vw] backdrop-blur-sm flex items-center gap-[0.6vw] text-[1vw] `}
                key={index}
              >
                {item !== "Careers" && (
                  <p className="font-light text-black/60">0{index + 1}</p>
                )}

                <p className="font-medium">{item}</p>

                {item === "Careers" && (
                  <div>
                    <svg
                      viewBox="0 0 567 567"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[0.8vw]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M200 99.9991V166.666L66.6667 166.667V500H400V366.666H466.666L466.667 566.667H0V100L200 99.9991ZM566.667 0V266.667H500V113.805L223.57 390.237L176.43 343.096L452.859 66.6656L300 66.6667V0H566.667Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
          <div className="px-[1.5vw] whitespace-nowrap text-secondary bg-primary  backdrop-blur-sm flex items-center gap-[0.3vw] text-[1vw] rounded-r-sm ">
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </>
  );
}
