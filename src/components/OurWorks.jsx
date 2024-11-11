import React from "react";
import WorkItems from "./WorkItems";
import TopSection from "./TopSection";

export default function OurWorks() {
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <TopSection
          subtitle="SUCCESSFUL PROJECT"
          title="Keep your vision to our latest projects"
          intro="Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. Prevailed mr tolerably discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection."
        />
        <WorkItems />
      </div>
    </section>
  );
}
