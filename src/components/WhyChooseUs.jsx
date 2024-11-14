import { React, useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "./ModalVideo";
import BgOverlay from "./BgOverlay";
import { motion } from "framer-motion";

import { FaCheckCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import mainImage from "../assets/images/why-choose-us/1.webp";
import secondImage from "../assets/images/why-choose-us/2.webp";

export default function WhyChooseUs() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <section className="py-10 bg-pink-100">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="hidden lg:block w-2/5 xl:w-1/2 relative">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              src={secondImage}
              alt=""
              className={
                "hidden xl:block w-48 h-48 absolute top-0 left-0 rounded-full border-[14px] border-steel-blue z-10"
              }
            />
            <motion.img
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={mainImage}
              alt=""
              className={
                "w-full rounded-full border-[14px] border-rose-bonbon z-0"
              }
            />
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-full absolute bottom-0 right-10 xl:right-24 animate-pulse cursor-pointer z-10"
              onClick={() => setPlayVideo(true)}
            >
              <FaCirclePlay
                size={80}
                className={
                  "text-steel-blue hover:text-sky-900 transition-colors duration-300 ease-in-out"
                }
              />
            </motion.span>
          </div>
          <div className="w-full lg:w-3/5 xl:w-1/2">
            <h5 className={"subtitle"}>Our Introduction</h5>
            <h1 className="big-title">Welcome to Best Cleaning Company</h1>
            <p className={"text-steel-blue font-semibold leading-6 mb-2"}>
              Lorem ipsum dolor sit amet consectetur suspendisse nulla aliquam.
              Risus rutrum tellus ultrices amet facilisis.
            </p>
            <p className="parag">
              Commodo dictum iaculis eget mas phasellus ultrices nunc dignissim.
              Id nulla amet tincidunt urna sed massa the sed massa ultrices amet
              a egetristique maecenas condimentum dolor. dictum iaculis eget
              more amet tincidunt urna massa done.
            </p>
            <ul
              className={
                "my-4 py-6 border-y border-slate-400 grid grid-cols-1 xs:grid-cols-2 leading-8"
              }
            >
              <div>
                <li className={"list-why-choose-us"}>
                  <FaCheckCircle size={16} />
                  <span>We are Committed</span>
                </li>
                <li className={"list-why-choose-us"}>
                  <FaCheckCircle size={16} />
                  <span>Insured & Bonded</span>
                </li>
                <li className={"list-why-choose-us"}>
                  <FaCheckCircle size={16} />
                  <span>Residential Cleaning</span>
                </li>
              </div>
              <div>
                <li className={"list-why-choose-us"}>
                  <FaCheckCircle size={16} />
                  <span>Highly Rated Cleaning</span>
                </li>
                <li className={"list-why-choose-us"}>
                  <FaCheckCircle size={16} />
                  <span>Trusted Professionals</span>
                </li>
                <li className={"list-why-choose-us"}>
                  <FaCheckCircle size={16} />
                  <span>Commercial Cleaning</span>
                </li>
              </div>
            </ul>
            <div className={"flex flex-col xs:flex-row items-center gap-8"}>
              <motion.div whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>
                <Link to="/about" className={"second-btn"}>
                  discover more
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
      {playVideo && (
        <>
          <div onClick={() => setPlayVideo(false)}>
            <BgOverlay />
          </div>
          <ModalVideo
            link={
              "https://www.youtube.com/embed/67XAib2TzAg?si=mp3hN_KhBIFKz4NL"
            }
          />
        </>
      )}
    </section>
  );
}
