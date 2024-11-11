import React from "react";

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
  ];
  return (
    <div
      className={
        "min-h-72 bg-banner-1 bg-cover bg-center relative after:bg-[#ee3e969b] after:absolute after:inset-0"
      }
    >
      <div className="container">
        <div className="py-4 relative xs:absolute xs:top-1/2 xs:left-0 xs:-translate-y-1/2 w-full z-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <h2 className={"text-6xl text-white font-bold"}>
                  {item.value}
                </h2>
                <h5 className={"text-xl text-steel-blue font-semibold capitalize"}>
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
