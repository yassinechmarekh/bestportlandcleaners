import React from "react";

export default function TopSection({subtitle, title, intro}) {
  return (
    <div className={"w-full lg:w-2/3 md:mx-auto text-center mb-8"}>
      <h5 className={"text-xl font-semibold text-steel-blue uppercase mb-1"}>
        {subtitle}
      </h5>
      <h1 className={"text-4xl font-bold font-title text-rose-bonbon mb-4"}>
        {title}
      </h1>
      <hr className={"w-28 h-1 mx-auto bg-rose-bonbon"} />
      <p className={"mt-4 text-slate-600 leading-6"}>
        {intro}
      </p>
    </div>
  );
}
