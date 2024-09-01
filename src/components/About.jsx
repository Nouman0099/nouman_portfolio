import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full text-white bg-gradient-to-b from-gray-800 to-black pt-20"
    >
      <div className="flex flex-col justify-center mx-auto p-4 h-full w-full max-w-screen-lg">
        <div className="pb-6">
          <p className="capitalize text-4xl border-b-4 border-gray-500 inline">
            about
          </p>
        </div>
        <p className="text-xl mt-10">
          I am a dedicated Frontend Developer with 2 years of hands-on
          experience in crafting dynamic and responsive web applications. My
          journey in web development has equipped me with a strong foundation in
          JavaScript, React, and modern frontend technologies, enabling me to
          create visually appealing and highly functional user interfaces.
        </p>
        <br />
        <p className="text-xl">
          I thrive in environments that challenge me to push the boundaries of
          web development, whether it’s through learning new frameworks or
          enhancing existing applications with innovative solutions. My
          commitment to writing clean, maintainable code and staying updated
          with the latest industry trends allows me to contribute effectively to
          any development team.
        </p>
        <br />
        <p className="text-xl">
          When I’m not coding, I enjoy exploring new technologies, contributing
          to open-source projects, and sharing my knowledge with the community
          through blog posts and tutorials.
        </p>
      </div>
    </div>
  );
}
