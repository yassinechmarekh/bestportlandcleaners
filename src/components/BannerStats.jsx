import React from "react";
import CountUp from 'react-countup';

import bannerImg from "../assets/images/banner/3.webp";

export default function BannerStats() {
  const stats = [
    {
      name: "Orders",
      value: "1267",
    },
    {
      name: "Trusted Clients",
      value: "846",
    },
    {
      name: "Years Of Experience",
      value: "32",
    },
    {
      name: "Customer Satisfaction Rate",
      value: "837",
    },
  ];
  return (
    <div
      className={
        "min-h-72 bg-cover bg-center relative after:bg-[#ee3e96cf] after:absolute after:inset-0"
      }
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container">
        <div className="py-8 sm:py-4 relative xs:absolute xs:top-1/2 xs:left-0 xs:-translate-y-1/2 w-full z-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <h2 className={"text-4xl text-white font-bold"}>
                  <CountUp start={0} end={item.value} duration={3} suffix="+" enableScrollSpy={true} scrollSpyOnce={true} />
                </h2>
                <h5
                  className={"text-xl text-steel-blue font-semibold capitalize"}
                >
                  {item.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
