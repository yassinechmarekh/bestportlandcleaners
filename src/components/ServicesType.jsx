import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import ImageType1 from "../assets/images/services/1.webp";
import ImageType2 from "../assets/images/services/2.webp";
import discount from "../assets/images/services/discount.svg";

export default function ServicesType() {
  return (
    <section className={"py-10 bg-rose-bonbon"}>
      <div className="container">
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4 pb-10">
              <div className="w-full lg:w-1/2">
                <h5
                  className={"text-white text-xl font-semibold uppercase mb-1"}
                >
                  One Time / Recurring
                </h5>
                <h2 className={"text-4xl font-bold font-title text-steel-blue"}>
                  Residential Cleaning
                </h2>
                <p className={"my-3 text-zinc-50 leading-6"}>
                  Transform your living spaces with professional cleaning
                  tailored to your needs. From deep cleans to regular upkeep, we
                  ensure spotless results every time.
                </p>
                <ul className="grid grid-cols-1 xs:grid-cols-2 xs:gap-4 mb-6 text-zinc-50 leading-8">
                  <div>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Kitchen</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Bedrooms & Living Rooms</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Extra Services</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Seasonal Cleaning</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Post-Construction</span>
                    </li>
                  </div>
                  <div>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Bathrooms</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Windows</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Carpet Cleaning</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Move in/out</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Express Cleaning</span>
                    </li>
                  </div>
                </ul>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/make-an-appointement" className={"main-btn py-3"}>
                    make an appointement
                  </Link>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  src={ImageType1}
                  alt=""
                  className={
                    "w-full max-w-[450px] mx-auto lg:ml-auto lg:mr-6 rounded-sm shadow-xl"
                  }
                />
                <motion.img
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  src={discount}
                  alt=""
                  className={
                    "hidden sm:block w-44 xl:w-52 absolute top-0 xl:top-10 left-0 lg:-left-10 xl:left-4"
                  }
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4 pb-10">
              <div className="w-full lg:w-1/2">
                <h5
                  className={"text-white text-xl font-semibold uppercase mb-1"}
                >
                  One Time / Recurring
                </h5>
                <h2 className={"text-4xl font-bold font-title text-steel-blue"}>
                  Commercial Cleaning
                </h2>
                <p className={"my-3 text-zinc-50 leading-6"}>
                  Keep your business spaces spotless and welcoming with our
                  expert cleaning services. Designed for offices, shops, and
                  more, we ensure a professional and hygienic environment.
                </p>
                <ul className="grid grid-cols-1 xs:grid-cols-2 xs:gap-4 mb-6 text-zinc-50 leading-8">
                  <div>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Office</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Medical facilities</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Restaurants</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Airports</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Government facilities</span>
                    </li>
                  </div>
                  <div>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Shops</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Factories</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Warehouses</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Move in/out</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Showrooms</span>
                    </li>
                  </div>
                </ul>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/make-an-appointement" className={"main-btn py-3"}>
                    make an appointement
                  </Link>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  src={ImageType2}
                  alt=""
                  className={
                    "w-full max-w-[450px] mx-auto lg:ml-auto lg:mr-6 rounded-sm shadow-xl"
                  }
                />
                <motion.img
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  src={discount}
                  alt=""
                  className={
                    "hidden sm:block w-44 xl:w-52 absolute top-0 xl:top-10 left-0 lg:-left-10 xl:left-4"
                  }
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
