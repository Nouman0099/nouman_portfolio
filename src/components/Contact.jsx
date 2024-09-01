import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full"
    >
      <div className="flex flex-col max-w-screen-lg p-4 justify-center mx-auto h-full">
        <div className="pb-8">
          <p className="text-white text-4xl border-b-4 border-gray-500 inline">
            Contact
          </p>
          <p className="py-6 text-white">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex  justify-center items-center">
          <form
            action="https://getform.io/f/bgdyzmxa"
            method="POST"
            className="flex flex-col md:w-1/2 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border-2 rounded-md p-2 bg-transparent text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="border-2 rounded-md p-2 bg-transparent text-white focus:outline-none my-4"
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Enter messsage here"
              className="border-2 rounded-md p-2 bg-transparent text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300">
              let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
