import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

import logo from "../assets/images/logo/logo.png";
import BgOverlay from "./BgOverlay";

export default function Header() {
  const menu = [
    {
      link: "/",
      name: "home",
    },
    {
      link: "/about",
      name: "about us",
    },
    {
      link: "/services",
      name: "our services",
    },
    {
      link: "/ourworks",
      name: "our works",
    },
    {
      link: "/contact",
      name: "contact",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="block xl:hidden bg-rose-bonbon py-1 border-b border-slate-200">
        <div className="container">
          <p className={"text-center text-xs sm:text-sm text-slate-100"}>
            Welcome to{" "}
            <Link
              to="/"
              className="text-white hover:text-pink-100 font-semibold transition-colors duration-300 ease-in-out"
            >
              Best Portland Cleaners
            </Link>
            , your trusted cleaning partner!
          </p>
        </div>
      </div>
      <div
        className={"hidden xl:flex justify-between border-b border-slate-200"}
      >
        <div className={"pl-4 pr-8 py-2 bg-rose-bonbon rounded-br-full"}>
          <ul className={"flex gap-6"}>
            <li className={"list-contact-info-header"}>
              <FaPhoneVolume size={14} />
              <a href="tel:+15034655331">+1 503-465-5331</a>
            </li>
            <li className={"list-contact-info-header"}>
              <IoMail size={16} />
              <a href="mailto:office@bestportlandcleaners.com">
                office@bestportlandcleaners.com
              </a>
            </li>
            <li className={"list-contact-info-header"}>
              <FaMapMarkerAlt size={16} />
              <a
                href="https://maps.app.goo.gl/j136Y3jeNHUXodJ9A"
                target="_blank"
              >
                1409 Southwest Broadway, Portland, OR, United States, Oregon
              </a>
            </li>
          </ul>
        </div>
        <div className={"flex items-center gap-4 pr-4"}>
          <div
            className={
              "flex items-center gap-1 text-sm text-slate-900 px-3 border-r border-slate-300"
            }
          >
            <IoTimeOutline size={16} />
            <span>Sunday-Friday / 8AM-5PM</span>
          </div>
          <ul className={"flex gap-3"}>
            <li className={"list-social-link-header"}>
              <Link to="#" target="_blank">
                <FaFacebookF size={16} />
              </Link>
            </li>
            <li className={"list-social-link-header"}>
              <Link to="#" target="_blank">
                <FaInstagram size={16} />
              </Link>
            </li>
            <li className={"list-social-link-header"}>
              <Link to="#" target="_blank">
                <FaYelp size={16} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          "py-2 bg-white sticky top-0 left-0 right-0 border-b border-slate-200 shadow-xl z-40"
        }
      >
        <div className="container">
          <div className={"flex justify-between items-center"}>
            <Link to="/">
              <img src={logo} alt="" className={"w-28"} />
            </Link>
            <div className={"hidden lg:flex items-center gap-20"}>
              <nav className={"flex gap-6"}>
                {menu.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    className={({ isActive }) =>
                      `capitalize ${
                        isActive
                          ? "text-rose-bonbon font-semibold"
                          : "text-slate-900 hover:text-rose-bonbon transition-colors duration-300 ease-in-out"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              <NavLink
                className={
                  "px-4 py-2 bg-rose-bonbon hover:bg-pink-600 text-white transition-colors duration-300 ease-in-out"
                }
              >
                Make an Appointment
              </NavLink>
            </div>
            <span
              onClick={() => setOpenMenu(true)}
              className={
                "block lg:hidden hover:text-rose-bonbon cursor-pointer transition-colors duration-300 ease-in-out"
              }
            >
              <RiMenu3Fill size={28} />
            </span>
          </div>
        </div>
      </div>
      <div
        className={`bg-white p-6 fixed top-0 ${
          openMenu ? "left-0" : "left-[-150%]"
        } bottom-0 w-80 border-r border-slate-200 flex flex-col justify-between transition-all duration-500  ease-in-out z-50`}
      >
        <div className={"flex flex-col items-center gap-6"}>
          <span
            onClick={() => setOpenMenu(false)}
            className={
              "self-end text-rose-bonbon hover:text-steel-blue hover:rotate-90 cursor-pointer transition-all duration-300 ease-in-out"
            }
          >
            <MdOutlineClose size={24} />
          </span>
          <Link to="/">
            <img src={logo} alt="" className="w-40" />
          </Link>
          <div className={"flex flex-col gap-4 text-center"}>
            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `capitalize ${
                    isActive
                      ? "text-rose-bonbon font-semibold"
                      : "text-slate-900 hover:text-rose-bonbon transition-colors duration-300 ease-in-out"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <Link
            className={
              "px-4 py-2 bg-rose-bonbon hover:bg-pink-600 text-white transition-colors duration-300 ease-in-out"
            }
          >
            Make an Appointment
          </Link>
        </div>
        <ul className={"flex justify-center gap-4"}>
          <li className={"list-social-link-menuheader"}>
            <Link to="#" target="_blank">
              <FaFacebookF size={16} />
            </Link>
          </li>
          <li className={"list-social-link-menuheader"}>
            <Link to="#" target="_blank">
              <FaInstagram size={16} />
            </Link>
          </li>
          <li className={"list-social-link-menuheader"}>
            <Link to="#" target="_blank">
              <FaYelp size={16} />
            </Link>
          </li>
        </ul>
      </div>
      {openMenu && (
        <div onClick={() => setOpenMenu(false)}>
          <BgOverlay />
        </div>
      )}
    </>
  );
}
