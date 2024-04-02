import React from "react";

const Courses = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-lg font-bold mb-7">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col items-center shadow-lg">
          <div className="relative">
            <img
              src="../public/images/englishOra.jpg"
              alt="Image 1"
              className="max-w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-80 rounded-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white font-medium">
                  We are using the american system for this coures and
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-black text-lg font-bold">English</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We are using the combridge system in teaching english.
          </p>
          <p className="text-buttonColor">300AF</p>
        </div>
        <div className="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
          <div className="relative">
            <img
              src="../public/images/Math.jpg"
              alt="Image 2"
              className="max-w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-80 rounded-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white font-medium">
                  We are using the american system for this coures and
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-black text-lg font-bold">Mathematic</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The newest version of math and formula is used.
          </p>
          <p className="text-buttonColor">300AF</p>
        </div>
        <div className="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
          <div className="relative">
            <img
              src="../public/images/ganjpc.jpg"
              alt="Image 3"
              className="max-w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-80 rounded-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white font-medium">
                  We are using the american system for this coures and
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-black text-lg font-bold">Computer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We dicover the new technologies and versions for.
          </p>
          <p className="text-buttonColor mb-2">300AF</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
