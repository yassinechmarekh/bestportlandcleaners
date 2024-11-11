import React from "react";

import step1 from '../assets/images/process/1.webp'
import step2 from '../assets/images/process/2.webp'
import step3 from '../assets/images/process/3.webp'

export default function HowItWork() {
    const process = [
        {
            id: 1,
            image: step1,
            title:  'Book Online Form',
        },
        {
            id: 2,
            image: step2,
            title:  'Get Expert Cleaner',
        },
        {
            id: 3,
            image: step3,
            title:  'Relax & enjoy cleanin',
        },
    ]
  return (
    <section className={"py-10 bg-rose-bonbon"}>
      <div className="container">
        <div className={"w-full lg:w-2/3 md:mx-auto text-center mb-8"}>
          <h5
            className={"text-xl font-semibold text-steel-blue uppercase mb-1"}
          >
            WORK PROCESS
          </h5>
          <h1 className={"text-4xl font-bold font-title text-white mb-4"}>
            How it Works
          </h1>
          <hr className={"w-28 h-1 mx-auto bg-steel-blue"} />
          <p className={"mt-4 text-zinc-50 leading-6"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            reprehenderit culpa iure quia repellat est eligendi nihil quo
            repudiandae tempore.
          </p>
        </div>
        <div className={'grid grid-cols-1 space-y-6 md:grid-cols-3 items-center'}>
            {process.map((item) => (
                <div key={item.id} className={`flex flex-col gap-2 items-center ${item.id % 2 === 0 ? '' : 'hover:scale-110'} transition-all duration-300 ease-in-out`}>
                    <div className={`${item.id % 2 === 0 ? 'w-60' : 'w-48'}  relative`}>
                        <img src={item.image} alt="" className={`w-full rounded-full border-8 ${item.id % 2 === 0 ? 'border-pink-200' : 'border-steel-blue'}`}/>
                        <span className={`${item.id % 2 === 0 ? 'w-12 h-12 top-2 bg-steel-blue text-pink-100' : 'w-10 h-10 bottom-0 bg-pink-100 text-steel-blue'}  flex justify-center items-center rounded-full font-bold text-lg absolute right-4`}>{item.id}</span>
                    </div>
                    <h3 className={`text-xl ${item.id % 2 === 0 ? 'text-steel-blue' : 'text-white'} font-bold capitalize`}>{item.title}</h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
