import React from "react";
import TopSection from "./TopSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import person1 from "../assets/images/testimonials/01.jpg";
import person2 from "../assets/images/testimonials/02.jpg";
import person3 from "../assets/images/testimonials/03.jpg";
import person4 from "../assets/images/testimonials/04.jpg";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      image: person1,
      name: "Rai Raksa Muhamad",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas numquam officiis doloremque non, consequatur dolor possimus vero fugiat, repudiandae obcaecati facilis cupiditate illo. Ad voluptatibus amet.",
      rate: 5,
    },
    {
      image: person2,
      name: "Rai Raksa Muhamad",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas numquam officiis doloremque non, consequatur dolor possimus vero fugiat, repudiandae obcaecati facilis cupiditate illo. Ad voluptatibus amet.",
      rate: 5,
    },
    {
      image: person3,
      name: "Rai Raksa Muhamad",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas numquam officiis doloremque non, consequatur dolor possimus vero fugiat, repudiandae obcaecati facilis cupiditate illo. Ad voluptatibus amet.",
      rate: 4,
    },
    {
      image: person4,
      name: "Rai Raksa Muhamad",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas numquam officiis doloremque non, consequatur dolor possimus vero fugiat, repudiandae obcaecati facilis cupiditate illo. Ad voluptatibus amet.",
      rate: 5,
    },
  ];
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <TopSection
          subtitle="What We’re Offering"
          title="Providing the Best Services for Our Customers"
          intro=""
        />
        <div className="">
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination, Autoplay]}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            className="mySwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={
                    "w-full md:w-2/3 mx-auto flex flex-col items-center gap-4 pb-10"
                  }
                >
                  <p className={"text-sm text-center text-slate-600"}>
                    " {item.comment} "
                  </p>
                  <div className={"flex items-center gap-2"}>
                    <img
                      src={item.image}
                      alt=""
                      className={
                        "w-16 h-16 rounded-full border-2 border-steel-blue"
                      }
                    />
                    <div>
                      <h4 className="text-steel-blue font-semibold capitalize mb-1">
                        {item.name}
                      </h4>
                      <div className={"flex gap-1 text-yellow-500"}>
                        <FaStar size={16} />
                        <FaStar size={16} />
                        <FaStar size={16} />
                        <FaStar size={16} />
                        <FaStar size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
