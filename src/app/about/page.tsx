import React from "react";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center mb-14 mt-6">
      <h1 className="text-5xl font-bold underline underline-offset-8 text-white z-20 animate-color-change mt-8">
        About Us
      </h1>

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/aboutus.jpeg')" }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center mt-48 px-4">
        <p className="max-w-3xl text-center text-white text-lg leading-relaxed mb-16">
          Traveling is not just a passion, it’s a way of life. From the
          hustle and bustle of the city to the calm of nature, explore
          everything with curiosity and excitement. Each place has its own
          story. Join us on this journey as to travel to hidden gems, try local cuisines, and capture
          moments that tell a unique story. We believe that every travel
          experience has the potential to change the way we see the world, and
          I’m here to take you along on this unforgettable adventure.
        </p>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-xl shadow-lg transform transition-all hover:scale-105 duration-300">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Page;

