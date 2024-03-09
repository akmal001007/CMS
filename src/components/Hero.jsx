import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex mt-10 justify-center">
        <div className="w-1/2 ml-10 mt-56">
          <div>
            <p className="text-xl text-buttonColor">Ganj Educational Center</p>
            <p className="font-bold text-4xl mt-1">
              Accessible Online Courses <br /> For Ganj EC Students
            </p>
            <p className="text-gray-800 mt-2">
              Build Your Future With New Learnings
            </p>
          </div>
          <div className="flex mt-8">
            <input
              className="border border-buttonColor rounded-full p-2"
              type="search"
              placeholder="Search"
            />
            <button className="bg-buttonColor hover:text-white text-black font-bold py-2 px-4 rounded-full">
              Button
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="../public/images/books.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
