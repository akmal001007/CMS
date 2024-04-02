import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Teachers = () => {
  return (
    // <div className="container mx-auto px-4 py-16 border-b-2 dark:border-gray-500">
    //   <h1 className="text-center text-bold mb-7">Our Teachers</h1>
    //   <div className="flex flex-col md:flex-row md:items-center">
    //     <div className="md:w-1/3">
    //       <img
    //         src="../public/images/cover.jpg"
    //         alt="Image 1"
    //         className="rounded-lg"
    //       />
    //     </div>
    //     <div className="md:w-1/3 mt-8 md:mt-0 mx-2">
    //       <img
    //         src="../public/images/computer.jpg"
    //         alt="Image 2"
    //         className="rounded-lg"
    //       />
    //     </div>
    //     <div className="md:w-1/3 mt-8 md:mt-0">
    //       <img
    //         src="../public/images/children.png"
    //         alt="Image 3"
    //         className="rounded-lg"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-lg font-bold mb-7">Our Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col items-center shadow-lg">
          <div className="relative">
            <img
              src="../public/images/avatar.png"
              alt="Image 1"
              className="max-w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-70 rounded-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white font-medium">
                  We are using the american system for this coures and
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-black text-lg font-bold">Akmal Nawabi</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We are using the combridge system in teaching english.
          </p>
          <p className="text-buttonColor">Master</p>
        </div>
        <div className="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
          <div className="relative">
            <img
              src="../public/images/avatar.png"
              alt="Image 2"
              className="max-w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-70 rounded-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white font-medium">
                  We are using the american system for this coures and
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-black text-lg font-bold">Najmudin</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The newest version of math and formula is used.
          </p>
          <p className="text-buttonColor">Bachelor</p>
        </div>
        <div className="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
          <div className="relative">
            <img
              src="../public/images/avatar.png"
              alt="Image 3"
              className="max-w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-70 rounded-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white font-medium">
                  We are using the american system for this coures and
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-black text-lg font-bold">Ahmady</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We dicover the new technologies and versions for.
          </p>
          <p className="text-buttonColor mb-2">PHD</p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
