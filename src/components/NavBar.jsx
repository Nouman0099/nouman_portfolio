import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex w-full h-20  bg-black px-4 justify-between items-center fixed">
      <div>
        <h1 className="font-signature text-5xl text-white ml-2">Nouman Ali</h1>
      </div>

      <ul className="md:flex hidden">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize text-gray-500 hover:scale-105 cursor-pointer duration-200 font-medium px-4"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="text-gray-500 pr-4 cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center h-screen w-full absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-gray-500 capitalize text-3xl px-4 py-6 cursor-pointer"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
