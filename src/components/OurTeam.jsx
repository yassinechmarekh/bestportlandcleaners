import React from "react";
import TopSection from "./TopSection";

import allTeam from "../assets/images/team/all.webp";
import member1 from "../assets/images/team/1.webp";
import member2 from "../assets/images/team/2.webp";
import member3 from "../assets/images/team/3.webp";
import member4 from "../assets/images/team/4.webp";
import member5 from "../assets/images/team/5.webp";
import member6 from "../assets/images/team/6.webp";
import member7 from "../assets/images/team/7.webp";

export default function OurTeam() {
  const team = [
    {
      name: "Anna Green",
      imageUrl: member1,
      role: "CEO Founder, Cleaner",
    },
    {
      name: "Anna Green",
      imageUrl: member2,
      role: "Cleaner",
    },
    {
      name: "Anna Green",
      imageUrl: member3,
      role: "Cleaner",
    },
    {
      name: "Anna Green",
      imageUrl: member4,
      role: "Cleaner",
    },
    {
      name: "Anna Green",
      imageUrl: member5,
      role: "Cleaner",
    },
    {
      name: "Anna Green",
      imageUrl: member6,
      role: "Cleaner",
    },
    {
      name: "Anna Green",
      imageUrl: member7,
      role: "Cleaner",
    },
  ];
  return (
    <section className={"py-10 bg-pink-100"}>
      <div className="container">
        <TopSection
          subtitle="We’ve Team Members"
          title="Meet Our Experienced & Professional Team"
          intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laborum assumenda? Consequatur, consequuntur ipsam! Sequi maiores tenetur doloremque totam et?"
        />
        <div>
          <img src={allTeam} alt="" className={"w-full mb-4"} />
          <h3 className={"subtitle mb-1"}>
            The best team to clean your surrounding area :
          </h3>
          <p className={"parag mb-1"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur tenetur molestiae deserunt accusantium consequatur
            temporibus voluptatem eligendi obcaecati voluptate pariatur.
          </p>
          <p className={"parag mb-1"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sed odit quis quibusdam repellendus provident quidem dicta
            voluptates dolorem quasi amet voluptas commodi asperiores, facilis
            at nisi beatae dolorum! Fugit sapiente non animi optio cupiditate
            quibusdam amet iusto deserunt qui. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequuntur tenetur molestiae
            deserunt accusantium consequatur temporibus voluptatem eligendi
            obcaecati voluptate pariatur.
          </p>
        </div>
        <div className={"mt-6"}>
          <div className="max-w-xl">
            <h2 className="subtitle">Meet our leadership</h2>
            <p className="parag">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2"
          >
            {team.map((team, index) => (
              <li key={index}>
                <div className="flex items-center gap-x-4">
                  <img
                    alt=""
                    src={team.imageUrl}
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {team.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-steel-blue">
                      {team.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
