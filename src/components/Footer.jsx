import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo/white-logo.png";

import { IoMdArrowDropright } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={"bg-rose-bonbon"}>
      <div className="container">
        <div
          className={
            "flex flex-col sm:flex-row justify-between items-center space-y-4 py-4 border-b border-neutral-50"
          }
        >
          <Link to="/">
            <img src={logo} alt="logo" className="w-40" />
          </Link>
          <ul className={"flex gap-6"}>
            <li className={"text-slate-100 hover:text-white capitalize"}>
              <Link to='https://www.facebook.com/BPDXCleaners' target="_blank" >facebook</Link>
            </li>
            <li className={"text-slate-100 hover:text-white capitalize"}>
              <Link to='https://www.instagram.com/best_portland_cleaners/' target="_blank" >instagram</Link>
            </li>
            <li className={"text-slate-100 hover:text-white capitalize"}>
              <Link to='https://www.youtube.com/@Bestportlandcleaners' target="_blank" >youtube</Link>
            </li>
            <li className={"text-slate-100 hover:text-white capitalize"}>
              <Link to='https://www.yelp.com/biz/best-portland-cleaners-portland' target="_blank" >yelp</Link>
            </li>
          </ul>
        </div>
        <div className={"py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"}>
          <div>
            <h1 className={"title-footer"}>about us</h1>
            <p className={"text-zinc-50"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              maxime dolorem doloribus numquam repellat cupiditate.
            </p>
            <div className={"mt-2"}>
              <h4 className={"text-white capitalize font-semibold mb-1"}>
                open hours :
              </h4>
              <ul className={"text-zinc-50"}>
                <li>Mon – Sat: 8 am – 5 pm,</li>
                <li>Sunday: CLOSED</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className={"title-footer"}>Quick Links</h1>
            <ul className={"leading-8"}>
              <li className={"list-footer-link"}>
                <Link to="/" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>home</span>
                </Link>
              </li>
              <li className={"list-footer-link"}>
                <Link to="/about" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>about us</span>
                </Link>
              </li>
              <li className={"list-footer-link"}>
                <Link to="/services" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>our services</span>
                </Link>
              </li>
              <li className={"list-footer-link"}>
                <Link to="/ourworks" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>our works</span>
                </Link>
              </li>
              <li className={"list-footer-link"}>
                <Link to="/contact" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className={"title-footer"}>what we do ?</h1>
            <ul className={"leading-8"}>
              <li className={"list-footer-link"}>
                <Link to="/services" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>Office Cleaning Service</span>
                </Link>
              </li>
              <li className={"list-footer-link"}>
                <Link to="/services" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>Move-in & Move-out</span>
                </Link>
              </li>
              <li className={"list-footer-link"}>
                <Link to="/services" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>Standard Home Cleaning</span>
                </Link>
              </li>
              <li className={"list-footer-link"}>
                <Link to="/services" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>Home Deep Cleaning</span>
                </Link>
              </li>
              <li className={"list-footer-link"}>
                <Link to="/services" className={"flex items-center gap-1"}>
                  <IoMdArrowDropright size={24} />
                  <span>Window Cleaning</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className={"title-footer"}>Contact info</h1>
            <ul className={"flex flex-col gap-3"}>
              <li className={"text-zinc-50"}>
                <div className={"flex items-center gap-1 mb-1"}>
                  <FaMapMarkerAlt size={16} />
                  <span className={"capitalize font-semibold"}>address :</span>
                </div>
                <Link
                  to="https://maps.app.goo.gl/j136Y3jeNHUXodJ9A"
                  target="_blank"
                  className={
                    "hover:text-white transition-all duration-300 ease-in-out"
                  }
                >
                  1409 Southwest Broadway, Portland, OR, United States, Oregon
                </Link>
              </li>
              <li className={"text-zinc-50"}>
                <div className={"flex items-center gap-1 mb-1"}>
                  <FaPhoneVolume size={16} />
                  <span className={"capitalize font-semibold"}>phone :</span>
                </div>
                <Link
                  to="tel:+15034655331"
                  target="_blank"
                  className={
                    "hover:text-white transition-all duration-300 ease-in-out"
                  }
                >
                  +1 503-465-5331
                </Link>
              </li>
              <li className={"text-zinc-50"}>
                <div className={"flex items-center gap-1 mb-1"}>
                  <FaMailBulk size={16} />
                  <span className={"capitalize font-semibold"}>
                    email address :
                  </span>
                </div>
                <Link
                  to="mailto:office@bestportlandcleaners.com"
                  target="_blank"
                  className={
                    "hover:text-white transition-all duration-300 ease-in-out"
                  }
                >
                  office@bestportlandcleaners.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={"py-3 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between space-y-2 border-t border-neutral-50"}>
          <p className={"text-zinc-50 text-center"}>
            &copy; 2024{" "}
            <Link to="/" className={"text-white hover:text-pink-100 font-bold"}>
              Best Portland Cleaners
            </Link>
            , All Right Reserved. Designed By <Link className={"text-white hover:text-pink-100 font-bold"}>Yassine_ChM</Link>
          </p>
          <div className={'flex items-center gap-x-2 justify-center'}>
            <Link
            to='/faq'
              className={
                "text-zinc-50 hover:text-white capitalize transition-colors duration-300 ease-in-out"
              }
            >
              FAQ's
            </Link>
            <span className={'text-zinc-50'}>-</span>
            <Link
              to='/privacy-policy'
              className={
                "text-zinc-50 hover:text-white capitalize transition-colors duration-300 ease-in-out"
              }
            >
              privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
