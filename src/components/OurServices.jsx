import React from "react";
import TopSection from "./TopSection";
import ServiceCard from "./ServiceCard";

import serviceImg1 from '../assets/icons/HouseCleaning.svg'
import serviceImg2 from '../assets/icons/KitchenCleaning.svg'
import serviceImg3 from '../assets/icons/OfficeCleaning.svg'
import serviceImg4 from '../assets/icons/WindowCleaning.svg'
import serviceImg5 from '../assets/icons/ResidentialCleaning.svg'
import serviceImg6 from '../assets/icons/CarpetCleaning.svg'

export default function OurServices() {
    const services = [
        {
            img: serviceImg1,
            title: 'House Cleaning',
            description: 'Enjoy spotless living spaces with our thorough house cleaning services designed for comfort and cleanliness.'
        },
        {
            img: serviceImg2,
            title: 'Kitchen Cleaning',
            description: 'Keep your kitchen hygienic and sparkling with our detailed cleaning solutions.'
        },
        {
            img: serviceImg3,
            title: 'Office Cleaning',
            description: 'Maintain a professional environment with our reliable and efficient office cleaning services.'
        },
        {
            img: serviceImg4,
            title: 'Window Cleaning',
            description: 'Let natural light shine through with our streak-free window cleaning services.'
        },
        {
            img: serviceImg5,
            title: 'Residential Cleaning',
            description: 'Create a healthier, more inviting home with our expert residential cleaning solutions.'
        },
        {
            img: serviceImg6,
            title: 'Carpet Cleaning',
            description: 'Refresh and restore your carpets with deep cleaning that removes dirt and allergens.'
        },
    ];
  return (
    <section className={"py-10 bg-pink-100"} id="servicescards">
      <div className="container">
        <TopSection subtitle='What We Do' title='Professional Cleaning Services Tailored for You' intro='Our office cleaning team takes pride in delivering exceptional standards in every cleaning contract. We prioritize understanding and meeting our customers’ unique needs.'/>
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {services.map((service, index) => (
                <ServiceCard key={index} image={service.img} title={service.title} description={service.description} />
            ))}
        </div>
      </div>
    </section>
  );
}
