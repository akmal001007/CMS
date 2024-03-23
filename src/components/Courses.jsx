import React from "react";

const Courses = () => {
  return (
    // <div className="container mx-auto px-4 py-16 border-b-2 dark:border-gray-500">

    //   <div className="flex flex-col md:flex-row md:items-center">
    //     <div className="md:w-1/3">
    //       <img
    //
    //         alt="Image 1"
    //         className="rounded-lg"
    //       />
    //       <div>
    //         <h3>english</h3>
    //         <p>this is englstih</p>
    //       </div>
    //     </div>

    //     <div className="md:w-1/3 mt-8 md:mt-0 mx-2">
    //       <img
    //
    //         alt="Image 2"
    //         className="rounded-lg"
    //       />
    //       <h3>asdfasdf</h3>
    //       <p>this compyter</p>
    //     </div>
    //     <div className="md:w-1/3 mt-8 md:mt-0">
    //       <img
    //         src="../public/images/ganjpc.jpg"
    //         alt="Image 3"
    //         className="rounded-lg"
    //       />
    //       <h3>asdfasdf</h3>
    //       <p>this compyter</p>
    //     </div>
    //   </div>
    // </div>
    <div class="">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center text-lg font-bold mb-7">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center shadow-lg">
            <img
              src="../public/images/englishOra.jpg"
              alt="Image 1"
              className="max-w-full rounded-lg mb-4"
            />
            <h2 className="text-black text-lg font-bold">English</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-buttonColor">300AF</p>
          </div>
          <div class="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
            <img
              src="../public/images/Math.jpg"
              alt="Image 2"
              class="max-w-full rounded-lg mb-4"
            />
            <h2 class="text-black text-lg font-bold">Mathematic</h2>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-buttonColor">300AF</p>
          </div>
          <div class="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
            <img
              src="../public/images/ganjpc.jpg"
              alt="Image 3"
              class="max-w-full rounded-lg mb-4"
            />
            <h2 class="text-black text-lg font-bold">Computer</h2>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-buttonColor">300AF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
