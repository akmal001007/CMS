import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="container mx-10 p-8">
      <div className="flex items-center border-b-2 dark:border-gray-500">
        <div className="w-1/2 flex flex-col items-center">
          <div className="ml-0">
            <p className="text-xl text-buttonColor">Ganj Educational Center</p>
            <p className="font-bold text-4xl mt-1">
              Accessible Online Courses <br /> For Ganj(GEC) Students
            </p>
            <p className="text-gray-900 font-bold mt-2 dark:text-slate-100">
              Build Your Future With New Learnings
            </p>
          </div>
          <div className="flex mt-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mt-2 text-buttonColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
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
        <div className="w-1/2 ml-2">
          <img src="../public/images/books.png" alt="books" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
