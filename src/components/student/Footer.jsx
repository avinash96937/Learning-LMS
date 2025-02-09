import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-6 md:px-20 lg:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 lg:gap-32 py-10 border-b border-white/30">

        {/* Logo & Description */}
        <div className="flex flex-col md:items-start items-center w-full md:w-1/3">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col md:items-start items-center w-full md:w-1/3">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription - Now Visible on All Screens */}
        <div className=" hidden md:flex flex-col items-center md:items-start w-full md:w-1/3 ">
          <h2 className="font-semibold text-white mb-5 text-center md:text-left">
            Subscribe to our Newsletter
          </h2>
          <p className="text-sm text-white/80 text-center md:text-left">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 pt-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-full md:w-64 h-10 rounded px-3 text-sm"
            />
            <button className="bg-blue-600 w-full md:w-24 h-10 text-white rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2024 © Edemy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
