import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import main1 from "../assets/images/about/main-1.webp";
import main2 from "../assets/images/about/main-2.webp";

import { FaPhoneAlt } from "react-icons/fa";

export default function AboutHero() {
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="w-full lg:w-1/2">
            <div className={"w-full relative"}>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={main1}
                alt=""
                className={"w-full max-w-96 mx-auto rounded-l-3xl"}
              />
              <motion.img
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src={main2}
                alt=""
                className={
                  "w-52 xl:w-64 hidden lg:block rounded-full border-[18px] border-pink-100 absolute top-[70%] xl:top-[60%] right-0 -translate-x-0"
                }
              />
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-0 -right-4 hidden xl:flex flex-col items-center gap-y-14"
              >
                <span className={"text-6xl text-steel-blue font-bold"}>25</span>
                <span
                  className={
                    "text-3xl font-bold text-rose-bonbon -rotate-90 capitalize"
                  }
                >
                  years of <br /> experience
                </span>
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h5 className="subtitle mb-1">Who We Are</h5>
            <h1 className={"big-title"}>
              Committed to Delivering Our Best Services
            </h1>
            <p className={"text-steel-blue font-semibold leading-6 mb-2"}>
              We take pride in offering exceptional services tailored to meet
              your needs. Our dedicated team ensures high-quality results every
              time.
            </p>
            <p className={"parag mb-4"}>
              With years of experience, we focus on delivering reliable,
              efficient, and personalized solutions. Whether it’s a one-time
              service or ongoing support, our commitment to excellence remains
              the same.
            </p>
            <div className={"flex flex-col xs:flex-row items-center gap-8"}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to="/contact" className={"second-btn"}>
                  contact us
                </Link>
              </motion.div>
              <Link to="tel:+15034655331" className={"flex items-center gap-2"}>
                <span className="p-3 bg-steel-blue rounded-full animate-pulse">
                  <FaPhoneAlt size={20} className={"text-white"} />
                </span>
                <span className={"text-lg text-steel-blue font-semibold"}>
                  +1 503-465-5331
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
