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

import Image1 from "../assets/images/hero/1.webp";
import Image2 from "../assets/images/hero/2.webp";
import Image3 from "../assets/images/hero/3.webp";
import bgElement from "../assets/images/hero/bg-element.svg";

import { FaCirclePlay } from "react-icons/fa6";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <section className={"py-10 bg-rose-bonbon relative"}>
      <img
        src={bgElement}
        alt="bg elemnt"
        className={"absolute bottom-0 left-0 opacity-0 xl:opacity-50 w-52"}
      />
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className={"w-full lg:w-1/2"}>
            <h5 className={"text-2xl text-steel-blue font-semibold capitalize"}>
              We Keep All Clean
            </h5>
            <h1
              className={
                "text-6xl 2xl:text-8xl text-white font-title font-bold leading-tight 2xl:leading-snug mb-4"
              }
            >
              Cleaning For A Healthier Home
            </h1>
            <p className={"text-zinc-50 mb-6"}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected If you are going to use a passage of Lorem Ipsum, you
            </p>
            <div className="flex items-center gap-6">
              <Link
                to='/services'
                className={
                  "main-btn"
                }
              >
                explore more
              </Link>
              <button
                className="bg-white rounded-full animate-pulse"
                onClick={() => setPlayVideo(true)}
              >
                <FaCirclePlay
                  size={40}
                  className={
                    "text-sky-900 hover:text-steel-blue cursor-pointer transition-colors duration-300 ease-in-out"
                  }
                />
              </button>
            </div>
          </div>
          <div className={"w-full lg:w-1/2"}>
            <div
              className={
                "hidden xl:grid  grid-cols-1 xl:grid-cols-2 gap-6 xl:min-h-[500px]"
              }
            >
              <div
                className={
                  "rounded-t-full border-8 border-steel-blue overflow-hidden"
                }
              >
                <img
                  src={Image1}
                  alt="hero img"
                  className={"object-cover w-full h-full"}
                />
              </div>
              <div
                className={
                  "row-span-2 rounded-2xl border-8 border-steel-blue overflow-hidden"
                }
              >
                <img
                  src={Image3}
                  alt="hero img"
                  className={"object-cover h-full"}
                />
              </div>
              <div
                className={
                  "rounded-2xl border-8 border-steel-blue overflow-hidden"
                }
              >
                <img
                  src={Image2}
                  alt="hero img"
                  className={"object-cover w-full h-full"}
                />
              </div>
            </div>
            <div className={"block xl:hidden relative"}>
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
            </div>
          </div>
        </div>
      </div>
      {playVideo && (
        <>
          <div onClick={() => setPlayVideo(false)}>
            <BgOverlay />
          </div>
          <ModalVideo link={'https://www.youtube.com/embed/u1vHdFJW1wA?si=EaGXFHDXFd8bipnw'}/>
        </>
      )}
    </section>
  );
}
