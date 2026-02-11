import React from "react";
import AnimatedCopy from "./Text/AnimatedCopy";

export default function Mission() {
  return (
    <div className="w-full h-fit relative mainXPadding bg-secondary mt-[10svh] text-primary">
      <div className="absolute top-1/2 -translate-y-1/2 right-[5vw] ">
        <svg
          viewBox="0 0 888 1141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[28vw]"
        >
          <path
            opacity="0.2"
            d="M373.821 0.835571C424.111 35.7668 472.742 73.5097 519.202 113.406C597.733 180.813 686.931 268.049 757.914 365.6C828.898 463.151 881.634 570.971 887.32 679.56V716.982L883.26 757.452C857.565 952.355 698.425 1111.48 503.104 1136.19L457.447 1140.25C452.942 1140.11 448.405 1140.2 443.886 1140.28C439.351 1140.36 434.832 1140.43 430.349 1140.25C229.056 1131.78 55.067 992.6 11.4456 794.418C-21.7894 643.425 23.3711 527.267 110.25 407.61L112.311 404.783C135.839 372.613 161.718 341.374 187.867 310.069C214.014 278.769 240.432 247.403 265.023 214.998C314.06 150.382 355.863 81.5952 373.821 0.835571Z"
            stroke="#009129"
          />
        </svg>
      </div>
      <div className="w-fit">
        <div className="w-full h-px bg-primary" />
        <div className="flex mediumText tracking-tight gap-[1vw] mt-[1vw] ">
          <h2 className="font-light">01</h2>
          <p>Our Mission</p>
        </div>
      </div>

      <div className="w-full mt-[7svh] ">
        <AnimatedCopy className="largeText">
          Through our commitment to{" "}
          <span className="bg-primary/40 rounded-sm px-[1vw] ">
            sustainability
          </span>{" "}
          and{" "}
          <span className="bg-primary/40 rounded-sm px-[1vw]">
            leading technical expertise
          </span>{" "}
          we turn your solvent-containing waste into valuable resources
          supporting a{" "}
          <span className="bg-primary/40 rounded-sm px-[1vw]">
            sustainable economic cycle.
          </span>{" "}
          With 2 highly specialised toll distillation plants in Bochum and
          Pfofeld, we work with you to realise your individual needs, whether it
          is simple disposal or
          <span className="bg-primary/40 rounded-sm px-[1vw]">
            transform
          </span>{" "}
          your used solvents into{" "}
          <span className="bg-primary/40 rounded-sm px-[1vw]">
            first class products
          </span>
          delivered according to your specific formulations and requirements.
        </AnimatedCopy>
      </div>
    </div>
  );
}
