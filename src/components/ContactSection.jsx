import React from "react";
import TopSection from "./TopSection";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYelp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <TopSection
          subtitle="Let's talk?"
          title="Get In Touch"
          intro="We’re here to help with any questions or inquiries. Feel free to reach out, and we’ll respond promptly to assist you."
        />
        <div className={"flex flex-col lg:flex-row shadow-xl border"}>
          <div className="w-full lg:w-3/5">
            <ContactForm/>
          </div>
          <div className="w-full lg:w-2/5 px-8 py-6 bg-rose-bonbon">
            <div className={'flex flex-col gap-y-8'}>
              <h2 className={"text-2xl text-white font-bold capitalize"}>
                Contact Info
              </h2>
              <ul className={"text-zinc-50 leading-8"}>
                <li>
                  <Link
                    to="tel:+15034655331"
                    className={"flex items-center gap-2"}
                  >
                    <FaPhoneAlt size={18} />
                    <span>+1 503-465-5331</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="mailto:office@bestportlandcleaners.com"
                    className={"flex items-center gap-2"}
                  >
                    <MdEmail size={18} />
                    <span>office@bestportlandcleaners.com</span>
                  </Link>
                </li>
              </ul>
              <ul className={"flex gap-3 text-zinc-50"}>
                <Link className={'social-list-card-contact'}>
                  <li>
                    <FaFacebookF size={20} />
                  </li>
                </Link>
                <Link className={'social-list-card-contact'}>
                  <li>
                    <FaInstagram size={20} />
                  </li>
                </Link>
                <Link className={'social-list-card-contact'}>
                  <li>
                    <FaYelp size={20} />
                  </li>
                </Link>
                <Link className={'social-list-card-contact'}>
                  <li>
                    <FaYoutube size={20} />
                  </li>
                </Link>
              </ul>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1447820.7851352096!2d-124.0423852!3d44.8668757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54956fec147e9247%3A0x7b18a28c0115aca0!2sBest%20Portland%20Cleaners!5e0!3m2!1sfr!2sma!4v1731412542200!5m2!1sfr!2sma"
                className={"w-full min-h-60"}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
