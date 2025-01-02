import Link from "next/link";
import React from "react";

const cardData = [
  {
    id: 1,
    title: "Pakistan",
    description:
      "A land of diverse landscapes, from majestic mountains to vibrant cities, rich in culture and history.",
    image: "/images/pakistan.jpeg",
  },
  {
    id: 2,
    title: "Maldive",
    description:
      "A tropical paradise with crystal-clear waters, white sandy beaches, and luxurious resorts.",
    image: "/images/maldive.jpeg",
  },
  {
    id: 3,
    title: "China",
    description:
      "A vast country blending ancient traditions with modern innovation and iconic landmarks like the Great Wall.",
    image: "/images/china.jpeg",
  },
  {
    id: 4,
    title: "Switzerland",
    description:
      "A picturesque country famous for its Alps, chocolates, and serene lakes.",
    image: "/images/switzerland.jpeg",
  },
  {
    id: 5,
    title: "Japan",
    description:
      "A unique blend of tradition and technology, known for cherry blossoms, temples, and cutting-edge innovation.",
    image: "/images/japan.jpeg",
  },
  {
    id: 6,
    title: "Turkey",
    description:
      "A crossroads of cultures, offering a mix of historical treasures and scenic beauty.",
    image: "/images/turkey.jpeg",
  },
  {
    id: 7,
    title: "Dubai",
    description:
      "A futuristic city known for luxury, skyscrapers, and incredible shopping experiences.",
    image: "/images/dubai.jpeg",
  },
  {
    id: 8,
    title: "Paris",
    description:
      "The city of love and art, celebrated for its iconic Eiffel Tower, museums, and café culture.",
    image: "/images/paris.jpeg",
  },
];

const Main = () => {
  return (
    <div className="flex flex-col items-center mb-14 px-4">
      <h1 className="text-5xl font-bold font-sans text-black animate-color-change mb-16 mt-28 text-center">
        Adventures Without Limits
      </h1>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-6 md:gap-8 lg:gap-12">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative w-full sm:w-80 md:w-96 lg:w-80 xl:w-96 h-96 bg-white border rounded-lg shadow-md overflow-hidden opacity-80"
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform hover:scale-110"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white z-10">
              <h3 className="text-2xl font-semibold underline underline-offset-2">
                {card.title}
              </h3>
              <p className="mt-2 text-sm">{card.description}</p>
              <Link href={`/posts/${card.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
