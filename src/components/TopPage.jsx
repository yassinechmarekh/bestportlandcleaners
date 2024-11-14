import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { IoIosArrowForward } from "react-icons/io";

import bannerImg from "../assets/images/banner/1.webp";

export default function TopPage({ page }) {
  return (
    <div
      className={
        "h-32 sm:h-48 bg-cover bg-bottom relative after:absolute after:inset-0 after:bg-[#ee3e9699] z-0"
      }
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={"absolute top-1/2 -translate-y-1/2 z-10"}
        >
          <h1
            className={
              "text-2xl sm:text-3xl text-white font-bold capitalize mb-2"
            }
          >
            {page}
          </h1>
          <div
            className={
              "flex items-center gap-2 text-zinc-50 text-lg sm:text-xl font-semibold capitalize"
            }
          >
            <Link
              to="/"
              className={
                "hover:text-steel-blue hover:underline transition-all duration-300 ease-in-out"
              }
            >
              Home
            </Link>
            <IoIosArrowForward size={20} />
            <span>{page}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
