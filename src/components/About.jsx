import React from "react";

const About = () => {
  return (
    <div className="container p-8 mx-8">
      <div id="about" className="flex justify-center items-center space-x-8">
        <div className="w-1/2">
          <img
            src="../public/images/children.png"
            alt="books"
            className="object-cover"
          />
        </div>
        <div className="w-1/2">
          <h1 className="font-bold mb-2">Know More About Us</h1>
          <p className="font-medium dark:text-slate-100">
            Ganj Educational Center (GEC) is providing service over <br />
            10 year with expert teachers in Afghanistan
          </p>
          <button className="bg-buttonColor mt-2 p-2 rounded-full hover:text-white">
            Email Us!
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
