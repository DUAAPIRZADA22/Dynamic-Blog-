import React from "react";

const Guide = () => {
  const guideItems = [
    {
      title: "Packing List",
      description: "Everything you need to pack for your trip.",
    },
    {
      title: "Budgeting Tips",
      description: "Save money without compromising on fun!",
    },
    {
      title: "Itinerary Template",
      description: "A customizable plan for every day of your trip.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100 mt-28">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-color-change">
          Plan Your Perfect Trip
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Download our free trip planning guide to make your travel experience
          unforgettable.
        </p>
        <div className="flex justify-center mb-6">
          <button className="bg-orange-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-orange-800 transition-colors">
            Download Your Free Guide
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-6 justify-center items-center gap-6 sm:gap-0">
          {guideItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md w-full sm:w-60"
            >
              <h3 className="font-bold text-xl text-orange-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;
