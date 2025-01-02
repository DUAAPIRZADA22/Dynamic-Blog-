"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", icon: <FaFacebook />, link: "#" },
  { name: "Twitter", icon: <FaTwitter />, link: "#" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "#" },
  { name: "Instagram", icon: <FaInstagram />, link: "#" },
];

const servicesList = [
  "Travel Planning",
  "Custom Tours",
  "Hotel Bookings",
  "Travel Insurance",
];

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Journey Travels</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  href={social.link}
                  key={social.name}
                  className="text-black text-2xl hover:text-blue-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Services</h3>
            <ul className="space-y-2">
              {servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Subscribe Now</h3>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-md border border-gray-300"
              />
              <button className="bg-blue-500 text-white p-2 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-800">
          <p>&copy; 2024 Journey Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
