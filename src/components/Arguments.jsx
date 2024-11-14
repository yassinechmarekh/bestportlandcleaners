import React from "react";
import TopSection from "./TopSection";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

import argumentImg1 from "../assets/images/about/argument-1.webp";
import argumentImg2 from "../assets/images/about/argument-2.webp";
import argumentImg3 from "../assets/images/about/argument-3.webp";

export default function Arguments() {
  const argumentItems = [
    {
      id: 1,
      image: argumentImg1,
      subtitle: "argurment 1",
      title: "Reliable and Trustworthy Cleaning Service",
      description:
        "When you live a busy life, it is hard to find the time to organize and tidy your home or vacation rental. You can rely on us to take care of your property so that you can focus on the things that are important to you.",
    },
    {
      id: 2,
      image: argumentImg2,
      subtitle: "argurment 2",
      title: "We Care About the Details",
      description:
        "Our company pays special attention to the details of every project to ensure the complete satisfaction of each client. ​Our goal is to make sure that we leave your home with sparkling kitchen, bathrooms, and floors, organized and tidy living spaces, and refreshing aromas of cleanliness.",
    },
    {
      id: 3,
      image: argumentImg3,
      subtitle: "argurment 3",
      title: "Customer Satisfaction Guaranteed 24 hours Fixing Policy",
      description:
        "Your satisfaction is our priority and we strive to provide a service we are proud of. Please give us a call within the 24 hours of your service and we will fix any issues at no cost.",
    },
  ];
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <TopSection
          subtitle="What We Do"
          title="Providing the Best Services for Our Customers"
          intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laborum assumenda? Consequatur, consequuntur ipsam! Sequi maiores tenetur doloremque totam et?"
        />
        <div className={"flex flex-col gap-y-14"}>
          {argumentItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col-reverse ${item.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-4`}
            >
              <div className="w-full md:w-3/5">
                <h5
                  className={
                    "text-lg text-rose-bonbon font-semibold capitalize mb-1"
                  }
                >
                  {item.subtitle}
                </h5>
                <h1
                  className={
                    "text-2xl text-steel-blue font-bold capitalize mb-2"
                  }
                >
                  {item.title}
                </h1>
                <p className={"parag mb-6"}>
                  {item.description}
                </p>
                <motion.div whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>
                <Link to='/make-an-appointement' className={"main-btn"}>make an appointement</Link>
                </motion.div>
              </div>
              <div className="w-full md:w-2/5">
                <motion.img whileHover={{ scale: 0.9, rotate: 1 }} transition={{ duration: 0.3 }}
                  src={item.image}
                  alt={item.title}
                  className={
                    `w-full max-w-96 mx-auto md:mx-0 ${item.id % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} rounded-tl-3xl rounded-br-3xl`
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
