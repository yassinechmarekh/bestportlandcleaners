import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={"py-2 bg-rose-bonbon"}>
      <div className="container">
        <p className={"text-zinc-50 text-sm text-center"}>
          &copy; 2024{" "}
          <Link to="/" className={"text-white hover:text-pink-100 font-bold"}>
            Best Portland Cleaners
          </Link>
          , All Right Reserved. Designed By{" "}
          <Link to='https://yassine-chmarekh.vercel.app/' target="_blank" className={"text-white hover:text-pink-100 font-bold"}>
            Yassine_ChM
          </Link>
        </p>
      </div>
    </div>
  );
}
