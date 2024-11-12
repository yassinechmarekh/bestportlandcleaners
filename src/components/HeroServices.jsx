import { React, useState } from "react";
import ModalVideo from "./ModalVideo";
import BgOverlay from "./BgOverlay";
import { Link } from "react-router-dom";

import hero1 from "../assets/images/services/hero-1.webp";
import hero2 from "../assets/images/services/hero-2.webp";
import residentialIcon from "../assets/icons/Residential Cleaning Services.svg";
import commercialIcon from "../assets/icons/Commercial Cleaning Services.svg";

import { FaCirclePlay } from "react-icons/fa6";

export default function HeroServices() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h5 className={"subtitle mb-1"}>Best Experts in Cleaning</h5>
            <h1 className={"big-title"}>
              Your Happiness Is Our Frist Priority
            </h1>
            <p className={"parag"}>
              Commodo dictum iaculis eget mas phasellus ultrices nunc dignissim.
              Id nulla amet tincidunt urna sed massa the sed massa ultrices amet
              a dictum amet tincidunt massa done.
            </p>
            <div className={"my-6 grid grid-cols-1 xs:grid-cols-2 gap-4"}>
              <div
                className={
                  "py-8 px-4 flex flex-col gap-4 border border-steel-blue"
                }
              >
                <img src={residentialIcon} alt="" className={"w-24"} />
                <h2 className="text-xl text-steel-blue font-bold capitalize">
                  Residential Cleaning Services
                </h2>
              </div>
              <div
                className={
                  "py-8 px-4 flex flex-col gap-4 border border-steel-blue"
                }
              >
                <img src={commercialIcon} alt="" className={"w-24"} />
                <h2 className="text-xl text-steel-blue font-bold capitalize">
                  Residential Cleaning Services
                </h2>
              </div>
            </div>
            <Link className={"main-btn"}>discover more</Link>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <img
              src={hero1}
              alt=""
              className={"w-full max-w-[500px] mx-auto rounded-full"}
            />
            <img
              src={hero2}
              alt=""
              className={
                "w-44 sm:w-64 rounded-full border-[18px] border-pink-100 absolute left-0 top-[70%] sm:top-[60%]"
              }
            />
            <span
              onClick={() => setPlayVideo(true)}
              className={
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer animate-pulse"
              }
            >
              <FaCirclePlay size={100} className={"text-steel-blue"} />
            </span>
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
              "https://www.youtube.com/embed/p-fSbOtyizk?si=VUO_dBHZF3AAVlnj"
            }
          />
        </>
      )}
    </section>
  );
}
