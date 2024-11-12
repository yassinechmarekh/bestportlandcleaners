import TopPage from "@/components/TopPage";
import Works from "@/components/OurWorks";
import React from "react";
import Testimonials from "@/components/Testimonials";

export default function OurWorks() {
  return (
    <>
      <TopPage page="our works" />
      <Works />
      <Testimonials/>
    </>
  );
}
