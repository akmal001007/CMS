import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="dark:bg-gray-700 border-2 dark:border-gray-500">
      <div className="flex justify-between items-center">
        <div className="w-1/2 flex flex-col items-center">
          <div className="">
            <p className="text-xl text-buttonColor">Ganj Educational Center</p>
            <p className="font-bold text-4xl mt-1">
              Accessible Online Courses <br /> For Ganj(GEC) Students
            </p>
            <p className="text-gray-900 font-bold mt-2 dark:text-slate-100">
              Build Your Future With New Learnings
            </p>
          </div>
          <div className="flex mt-6">
            <input
              className="border border-buttonColor rounded-full focus:ring-buttonColor focus:outline-none p-2"
              type="search"
              placeholder="Search"
            />
            <button className="bg-buttonColor hover:text-white text-black font-bold py-2 px-4 rounded-full">
              Button
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="../public/images/books.png" alt="books" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
