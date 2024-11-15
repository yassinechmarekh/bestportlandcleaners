import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ModalVideo from "./ModalVideo";
import BgOverlay from "./BgOverlay";
import { motion } from "framer-motion";

import Image1 from "../assets/images/hero/1.webp";
import Image2 from "../assets/images/hero/2.webp";
import Image3 from "../assets/images/hero/3.webp";
import bgElement from "../assets/images/hero/bg-element.svg";

import { FaCirclePlay } from "react-icons/fa6";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <section className={"py-10 bg-rose-bonbon relative"}>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, transition: { duration: 1, delay: 0.5 } }}
        src={bgElement}
        alt="bg elemnt"
        className={"absolute bottom-0 left-0 opacity-0 xl:opacity-50 w-52"}
      />
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className={"w-full lg:w-1/2"}>
            <motion.h5
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ transition: 5, delay: 0.3 }}
              className={"text-2xl text-steel-blue font-semibold capitalize"}
            >
              Your Trusted Cleaning Partner
            </motion.h5>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ transition: 5, delay: 0.5 }}
              className={
                "text-6xl 2xl:text-8xl text-white font-title font-bold leading-tight 2xl:leading-snug mb-4"
              }
            >
              Professional Cleaning for a Healthier
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ transition: 5, delay: 0.7 }}
              className={"text-zinc-50 mb-6"}
            >
              Discover top-tier cleaning services designed to create a
              healthier, more welcoming environment in your home. With our
              attention to detail and commitment to quality, we ensure spotless
              spaces that bring peace of mind. Experience the difference of a
              truly clean home with our expert team.
            </motion.p>
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.9 },
                }}
                whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
              >
                <Link to="/about" className={"main-btn"}>
                Learn More
                </Link>
              </motion.div>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.3, delay: 1 } }}
                whileTap={{ scale: 0.8, transition: { duration: 0.3 } }}
                className="bg-white rounded-full animate-pulse"
                onClick={() => setPlayVideo(true)}
              >
                <FaCirclePlay
                  size={40}
                  className={
                    "text-sky-900 hover:text-steel-blue cursor-pointer transition-colors duration-300 ease-in-out"
                  }
                />
              </motion.button>
            </div>
          </div>
          <div className={"w-full lg:w-1/2"}>
            <div
              className={
                "hidden xl:grid  grid-cols-1 xl:grid-cols-2 gap-6 xl:min-h-[500px]"
              }
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3 },
                }}
                whileHover={{
                  scale: 0.9,
                  rotate: 3,
                  transition: { duration: 0.3 },
                }}
                className={
                  "rounded-t-full border-8 border-steel-blue overflow-hidden"
                }
              >
                <img
                  src={Image1}
                  alt="hero img"
                  className={"object-cover w-full h-full"}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3 },
                }}
                whileHover={{
                  scale: 0.9,
                  rotate: 3,
                  transition: { duration: 0.3 },
                }}
                className={
                  "row-span-2 rounded-2xl border-8 border-steel-blue overflow-hidden"
                }
              >
                <img
                  src={Image3}
                  alt="hero img"
                  className={"object-cover h-full"}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3 },
                }}
                whileHover={{
                  scale: 0.9,
                  rotate: -3,
                  transition: { duration: 0.3 },
                }}
                className={
                  "rounded-2xl border-8 border-steel-blue overflow-hidden"
                }
              >
                <img
                  src={Image2}
                  alt="hero img"
                  className={"object-cover w-full h-full"}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className={"block xl:hidden relative"}
            >
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={Image1}
                      alt=""
                      className="border-8 border-steel-blue"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={Image2}
                      alt=""
                      className="border-8 border-steel-blue"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={Image3}
                      alt=""
                      className="border-8 border-steel-blue"
                    />
                  </CarouselItem>
                </CarouselContent>
                <div className="absolute bottom-10 right-16">
                  <CarouselPrevious className="text-steel-blue" />
                  <CarouselNext className="text-steel-blue" />
                </div>
              </Carousel>
            </motion.div>
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
              "https://www.youtube.com/embed/u1vHdFJW1wA?si=EaGXFHDXFd8bipnw"
            }
          />
        </>
      )}
    </section>
  );
}
