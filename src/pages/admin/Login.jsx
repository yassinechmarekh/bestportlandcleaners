import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/Form/user-auth-form";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/white-logo.png";
import bannerImg from "../../assets/images/team/all.webp";

export default function Login() {
  return (
    <section className={"bg-pink-100"}>
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/"
          className={
            "absolute right-4 top-4 md:right-8 md:top-8 text-rose-bonbon hover:font-semibold hover:text-steel-blue transition-all duration-300 ease-in-out"
          }
        >
          Home
        </Link>
        <div
          className="relative hidden h-full flex-col bg-cover object-left p-10 text-white lg:flex"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute inset-0 bg-[#ee3e96e4]" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img src={logo} alt="" className={"w-36"} />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis voluptas beatae soluta eligendi nesciunt
                adipisci.&rdquo;
              </p>
              <footer className="text-sm">&copy; Best Portland Cleaners</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl text-rose-bonbon font-semibold tracking-tight">
                Admin Account
              </h1>
              <p className="text-sm parag">
                Enter your email and password to login
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-rose-bonbon"
              >
                Forget your password
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
