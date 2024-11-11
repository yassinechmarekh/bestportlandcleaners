import React from "react";
import TopSection from "./TopSection";
import ServiceCard from "./ServiceCard";

import serviceImg1 from '../assets/icons/HouseCleaning.svg'
import serviceImg2 from '../assets/icons/KitchenCleaning.svg'
import serviceImg3 from '../assets/icons/OfficeCleaning.svg'
import serviceImg4 from '../assets/icons/WindowCleaning.svg'
import serviceImg5 from '../assets/icons/ResidentialCleaning.svg'
import serviceImg6 from '../assets/icons/CarpetCleaning.svg'

export default function Services() {
    const services = [
        {
            img: serviceImg1,
            title: 'House Cleaning',
            description: 'Buscipit tincidunt duis antino gravidia tellusy nascetur neque vulpuits pointings scelerisque ultrces muscle mass pers order commounication pointing.'
        },
        {
            img: serviceImg2,
            title: 'Kitchen Cleaning',
            description: 'Buscipit tincidunt duis antino gravidia tellusy nascetur neque vulpuits pointings scelerisque ultrces muscle mass pers order commounication pointing.'
        },
        {
            img: serviceImg3,
            title: 'Office Cleaning',
            description: 'Buscipit tincidunt duis antino gravidia tellusy nascetur neque vulpuits pointings scelerisque ultrces muscle mass pers order commounication pointing.'
        },
        {
            img: serviceImg4,
            title: 'Window Cleaning',
            description: 'Buscipit tincidunt duis antino gravidia tellusy nascetur neque vulpuits pointings scelerisque ultrces muscle mass pers order commounication pointing.'
        },
        {
            img: serviceImg5,
            title: 'Residential Cleaning',
            description: 'Buscipit tincidunt duis antino gravidia tellusy nascetur neque vulpuits pointings scelerisque ultrces muscle mass pers order commounication pointing.'
        },
        {
            img: serviceImg6,
            title: 'Carpet Cleaning',
            description: 'Buscipit tincidunt duis antino gravidia tellusy nascetur neque vulpuits pointings scelerisque ultrces muscle mass pers order commounication pointing.'
        },
    ];
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <TopSection subtitle='What We Do' title='Cleaning Services For You' intro='Our office cleaning division prides itself on delivering exceptionally high standards in all our cleaning contracts and we understand all our customer needs.'/>
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {services.map((service, index) => (
                <ServiceCard key={index} image={service.img} title={service.title} description={service.description} />
            ))}
        </div>
      </div>
    </section>
  );
}
