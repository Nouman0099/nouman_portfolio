import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/herosection.jpeg";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-32"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Frontend Developer with 2 years of experience specializing in
            building responsive and user-friendly web applications. My expertise
            lies in using modern technologies such as React, JavaScript, and CSS
            to create intuitive interfaces and enhance user experiences. I am
            passionate about writing clean, maintainable code and continuously
            learning new tools and techniques to stay updated with industry
            trends.
          </p>
          <div className="mb-3">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit flex items-center px-6 py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer"
            >
              portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl w-2/3 md:w-full mx-auto md:my-0 my-5"
          />
        </div>
      </div>
    </div>
  );
}
