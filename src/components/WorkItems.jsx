import React from "react";

import WorkImg1 from "../assets/images/works/1.webp";
import WorkImg2 from "../assets/images/works/2.webp";
import WorkImg3 from "../assets/images/works/3.webp";
import WorkImg4 from "../assets/images/works/4.webp";
import WorkImg5 from "../assets/images/works/5.webp";
import WorkImg6 from "../assets/images/works/6.webp";
import WorkImg7 from "../assets/images/works/7.webp";
import WorkImg8 from "../assets/images/works/8.webp";
import WorkImg9 from "../assets/images/works/9.webp";
import WorkImg10 from "../assets/images/works/10.webp";
import WorkImg11 from "../assets/images/works/11.webp";
import WorkImg12 from "../assets/images/works/12.webp";

export default function WorkItems() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg1} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg3} alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg5} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg6} alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg7} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg8} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={WorkImg9} alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={WorkImg10}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={WorkImg11}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={WorkImg12}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
