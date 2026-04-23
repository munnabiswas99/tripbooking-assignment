import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <button className="btn btn-primary bg-[#FAB326] rounded-2xl">
            <FaEarthAmericas />
            Explore the world
          </button>
          <h1 className="mb-5 text-3xl font-bold">
            Your Gateway to Extraordinary Adventures
          </h1>
          <p className="mb-5">
            Pack your bags and let Travila redefine your travel experience.
            Where<br></br>every journey is a story waiting to be told
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
