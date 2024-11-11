import BannerStats from "@/components/BannerStats";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import OurWorks from "@/components/OurWorks";
import Services from "@/components/Services";
import ServicesType from "@/components/ServicesType";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

export default function Home() {
  return <>
  <Hero/>
  <WhyChooseUs/>
  <ServicesType/>
  <Services/>
  <BannerStats/>
  <OurWorks/>
  <HowItWork/>
  <Testimonials/>
  </>;
}
