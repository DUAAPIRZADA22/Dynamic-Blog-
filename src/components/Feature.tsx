import React from "react";

const Feature = () => {
  return (
    <div className="relative h-screen mt-8">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/v1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex justify-center items-center w-full h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mt-32 md:mt-48 lg:mt-64 leading-tight">
          Travel is not just a{" "}
          <span className="font-extrabold font-serif text-indigo-900">Journey</span>, <br />
          It&apos;s a way of <span className="font-extrabold font-serif text-indigo-900">Life</span>
        </h1>
      </div>
    </div>
  );
};

export default Feature;

