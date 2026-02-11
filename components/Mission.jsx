import React from "react";

export default function Mission() {
  return (
    <div className="w-full h-fit mainXPadding bg-secondary mt-[10svh] text-primary">
      <div className="w-fit">
        <div className="w-full h-px bg-primary" />
        <div className="flex mediumText tracking-tight gap-[1vw] mt-[1vw] ">
          <h2 className="font-light">01</h2>
          <p>Our Mission</p>
        </div>
      </div>

      <div className="w-full mt-[7svh] ">
        <p className="largeText">
          Through our commitment to{" "}
          <span className="missionHighlight">sustainability</span> and{" "}
          <span className="missionHighlight">leading technical expertise</span>{" "}
          we turn your solvent-containing waste into valuable resources
          supporting a
          <span className="missionHighlight">sustainable economic cycle.</span>{" "}
          With 2 highly specialised toll distillation plants in Bochum and
          Pfofeld, we work with you to realise your individual needs, whether it
          is simple disposal or
          <span className="missionHighlight">transform</span> your used solvents
          into <span className="missionHighlight">first class products</span>
          delivered according to your specific formulations and requirements.
        </p>
      </div>
    </div>
  );
}
