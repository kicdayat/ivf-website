/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[55vh] relative">
      <div className="absolute w-full h-full bg-primary-500 top-0 left-0 opacity-40"></div>
      <div className="absolute w-full h-full ">
        <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <h1
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}
            className="text-5xl max-w-3xl font-bold text-white"
          >{`We push the limits of what's possible for our patients`}</h1>
        </div>
      </div>
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1615766553246-9147b6d50e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
