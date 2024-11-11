import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  nihil voluptatum facilis eius ut expedita aperiam eligendi quo
                  aut suscipit?
                </p>
                <ul className="grid grid-cols-1 xs:grid-cols-2 xs:gap-4 mb-6 text-zinc-50 leading-8">
                  <div>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Kitchen</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Bedrooms Living Rooms</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Extra Services</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Seasonal</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Post construction</span>
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
                      <span>Carpet</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Move in/out</span>
                    </li>
                    <li className={"flex items-center gap-2"}>
                      <FaCheck size={16} />
                      <span>Еxpress</span>
                    </li>
                  </div>
                </ul>
                <Link className={"main-btn py-3"}>make an appointement</Link>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <img
                  src={ImageType1}
                  alt=""
                  className={
                    "w-full max-w-[450px] mx-auto lg:ml-auto lg:mr-6 rounded-sm shadow-xl"
                  }
                />
                <img
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  nihil voluptatum facilis eius ut expedita aperiam eligendi quo
                  aut suscipit?
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
                <Link className={"main-btn py-3"}>make an appointement</Link>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <img
                  src={ImageType2}
                  alt=""
                  className={
                    "w-full max-w-[450px] mx-auto lg:ml-auto lg:mr-6 rounded-sm shadow-xl"
                  }
                />
                <img
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
