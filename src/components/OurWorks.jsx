import React from "react";
import WorkItems from "./WorkItems";
import TopSection from "./TopSection";

export default function OurWorks() {
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <TopSection
          subtitle="SUCCESSFUL PROJECT"
          title="Our Latest Projects"
          intro="Our projects are a testament to excellence and attention to detail. We consistently deliver results that exceed expectations, ensuring your vision is brought to life with precision and care."
        />
        <WorkItems />
      </div>
    </section>
  );
}
