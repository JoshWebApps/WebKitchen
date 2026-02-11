import React from "react";
import AnimatedCopy from "./Text/AnimatedCopy";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function History() {
  const years = [
    {
      year: 1949,
      paragraph:
        "Foundation of the company Orm Bergold Chemie by Mr. Orm Bergold; start of solvent recycling at the Langlau plant in the Nuremberg areal",
    },
    {
      year: 1958,
      paragraph: "Start of production in Bochum",
    },
    {
      year: 1991,
      paragraph: "Takeover of Orm Bergold Chemie by Safetykleen Corp. USA",
    },
    {
      year: 1992,
      paragraph:
        "Start of the processing of solvent-containing waste for Safetykleen",
    },
    {
      year: 1995,
      paragraph: "Start of distillation of mineral spirit for Safetykleen",
    },
    {
      year: 1996,
      paragraph:
        "Establishment of the drum factory for processing containers different sizes",
    },
    {
      year: 1997,
      paragraph:
        "Expansion to a European general disposal center for Safetykleen",
    },
    {
      year: 1998,
      paragraph: "Management buyout of Safetykleen Europe",
    },
    {
      year: 1999,
      paragraph: "Additional focus on the sale of regenerated solvents",
    },
    {
      year: 2001,
      paragraph: "Expansion of the clean product tanks at the Bochum site",
    },
    {
      year: 2001,
      paragraph:
        "Introduction of water-based cleaning agents (hydro-rinsing agents)",
    },
    {
      year: 2004,
      paragraph:
        "Launch of the rectification column for the regeneration and fractionation of high-quality solvents (purity > 99.5)",
    },
    {
      year: 2007,
      paragraph:
        "General disposal company for the Safetykleen companies in France, Italy & England",
    },
    {
      year: 2023,
      paragraph:
        "Leading supplier and general disposer of regenerated solvents and waste for Safetykleen International",
    },
    {
      year: "Today",
      paragraph:
        "Leading supplier and general disposer of regenerated solvents and waste for Safetykleen International",
    },
  ];

  const lines = React.useRef([]);

  useGSAP(() => {
    lines.current.forEach((line) => {
      gsap.to(line, {
        scaleX: 1,
        transformOrigin: "left",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: line,
          start: `top bottom+=20%`,
        },
      });
    });
  }, []);

  return (
    <div className="w-full h-fit bg-secondary  text-primary  ">
      <div className="w-fit mainXPadding">
        <div className="w-full h-px bg-primary" />
        <div className="flex mediumText tracking-tight gap-[1vw] mt-[1vw] ">
          <h2 className="font-light">02</h2>
          <p>Our History</p>
        </div>
      </div>

      <div className="w-full mt-[7svh]  ">
        {years.map((item, index) => {
          return (
            <div key={index}>
              <div
                key={index}
                className={`w-full h-fit -my-px hover:bg-primary hover:text-secondary duration-500 ease-in-out text-primary flex gap-[20vw] items-center py-[2vw] hover:opacity-100 opacity-70 `}
              >
                <div className="pl-[5vw]">
                  <h3 className="text-[5vw]">{item.year}</h3>
                </div>
                <div className="pr-[5vw]">
                  {" "}
                  <AnimatedCopy duration={1} className="mediumText">
                    {item.paragraph}
                  </AnimatedCopy>
                </div>
              </div>
              {index !== years.length - 1 && (
                <div className="w-full">
                  <div
                    ref={(el) => (lines.current[index] = el)}
                    className="h-px bg-primary scale-x-0 origin-left mx-[5vw]"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
