import Image from "next/image";
import React from "react";

export default function AuthorCard() {
  return (
    <div className="flex justify-center items-center min-h-screen py-4 px-2">
      <div className="flex flex-col md:flex-row items-center bg-cyan-100 shadow-lg rounded-lg p-6 w-full max-w-lg md:w-3/4 lg:w-1/2 mt-2 ml-0 border border-indigo-700">
        <Image
          src="/images/profile.jpeg"
          alt="Duaa Pirzada"
          width={1000}
          height={1000}
          className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500"
        />

        <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 font-sans underline underline-offset-auto">
            Duaa Pirzada
          </h2>
          <p className="text-gray-600 mt-2">
            Hi! I&apos;m Duaa Pirzada, a passionate travel blogger and frontend web
            developer. I love sharing my journeys through vivid storytelling and
            creative visuals. When I&apos;m not exploring new destinations, I craft
            engaging web experiences with modern technologies like Next.js,
            Tailwind CSS, and JavaScript.
          </p>
          <p className="text-gray-600 mt-2">
            Join me as I uncover hidden gems, share travel tips, and inspire
            others to embark on their adventures. Let&apos;s make every journey
            unforgettable!
          </p>
          <div className="mt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/duaa-pirzada-52a1062aa/"
              className="bg-light-red-500 text-brown border-2 border-gray-600 hover:bg-gradient-to-r hover:from-light-red-500 hover:to-red-600 hover:shadow-lg hover:animate-pulse text-sm font-bold py-2 px-4 rounded text-center transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/DUAAPIRZADA22"
              className="bg-light-red-500 text-brown border-2 border-gray-600 hover:bg-gradient-to-r hover:from-light-red-500 hover:to-red-600 hover:shadow-lg hover:animate-pulse text-sm font-bold py-2 px-4 rounded text-center transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
