import React from "react";
import {motion} from "framer-motion"

export default function ServiceCard({image, title, description}) {
  return (
    <motion.div initial={{ y: 0 }} whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className={"py-8 px-6 bg-pink-50 rounded-sm border border-rose-bonbon shadow-xl"}>
      <img src={image} alt="" className={"w-24"} />
      <h3 className={"text-xl text-rose-bonbon font-bold mb-1"}>
        {title}
      </h3>
      <p className={'text-slate-600 text-sm'}>
        {description}
      </p>
    </motion.div>
  );
}
