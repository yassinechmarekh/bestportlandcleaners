import HeroServices from "@/components/HeroServices";
import TopPage from "@/components/TopPage";
import OurServices from "@/components/OurServices";
import React from "react";

export default function Services() {
  return (
    <>
      <TopPage page="Our Services" />
      <HeroServices />
      <OurServices />
    </>
  );
}
