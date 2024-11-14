import React from "react";
import { Link } from "react-router-dom";

import bannerImg from "../assets/images/banner/2.webp";

export default function BannerAbout() {
  return (
    <div
      className={
        "bg-cover bg-bottom relative after:absolute after:inset-0 after:bg-[#ee3e969b] z-0"
      }
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container">
        <div className={'py-20 w-full md:w-2/3 mx-auto text-center relative z-10'}>
          <h5 className={'text-lg text-steel-blue font-semibold capitalize mb-2'}>We Clean, You Relax</h5>
          <h1 className={'text-3xl text-white font-bold capitalize'}>Where Cleanliness Is Next To Godliness</h1>
          <p className={'text-zinc-50 text-sm my-6'}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
          <Link to='/ourworks' className="main-btn">discover more</Link>
        </div>
      </div>
    </div>
  );
}
