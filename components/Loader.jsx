"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const svg = React.useRef(null);
  const container = React.useRef(null);
  const coverRef = React.useRef(null);
  const loaderLogo = React.useRef(null);
  const lowerLoader = React.useRef(null);

  useEffect(() => {
    gsap.set(svg.current, {
      scale: 0,
      transformBox: "fill-box",
      transformOrigin: "50% 50%",
    });

    const tl = gsap.timeline();

    tl.to(coverRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    })
      .to(
        svg.current,
        {
          scale: 0.3,
          duration: 1.5,
          ease: "power4.inOut",
        },
        "<",
      )
      .to(
        loaderLogo.current,
        {
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=0.25",
      )
      .to(
        lowerLoader.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=0.5",
      )
      .to(
        svg.current,
        {
          scale: 5,
          duration: 1.5,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(container.current, { display: "none" });
          },
        },
        "<",
      );

    // tl.to(svg.current, {
    //   scale: 5,
    //   duration: 5,
    //   ease: "power4.inOut",
    // });
  }, []);

  return (
    <div ref={container} className="w-full h-full absolute top-0 left-0">
      <div
        ref={coverRef}
        className="fixed top-0 left-0 w-full h-full bg-secondary z-60 "
      />
      <div
        ref={lowerLoader}
        className="fixed top-0 left-0 w-full h-full bg-secondary z-40 flex items-center justify-center "
      >
        <img
          ref={loaderLogo}
          src="/images/logoImage.png"
          className=" w-[10vw] mt-[3.6vw] mr-[1vw] opacity-0"
        />
      </div>
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-50"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="customMask">
            <rect width="100" height="100" fill="white" />
            <g transform="translate(25 20)">
              <path
                ref={svg}
                d="M49.2262 37.6774V39.7551L49.0008 42.0014C47.5745 52.8206 38.7407 61.6537 27.8982 63.0248L25.3645 63.25C24.8654 63.2346 24.3591 63.2706 23.86 63.25C12.6871 62.78 3.02901 55.0546 0.607543 44.0534C-1.25204 35.6049 1.31041 29.121 6.2048 22.4273C11.4254 15.2892 18.7299 8.97915 20.7089 0C23.5101 1.94394 26.2187 4.04524 28.8058 6.26689C37.5161 13.7433 48.5954 25.6209 49.2262 37.6785V37.6774Z"
                fill="black"
              />
            </g>
          </mask>
        </defs>
        <rect
          width="100"
          height="100"
          className="fill-primary"
          mask="url(#customMask)"
        />
      </svg>
    </div>
  );
}
