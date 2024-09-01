import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full pt-20"
    >
      <div className="flex flex-col justify-center p-4 w-full h-full max-w-screen-lg mx-auto ">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-500 font-bold">
            Portfolio
          </p>
          <p className="py-4">Check out some of my work right here</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 sm:px-0 px-6  ">
          {portfolio.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt="portfolio"
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 m-4">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 m-4">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
