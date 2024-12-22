import React from "react";
import trekkingImg from "../assets/trekking-main-img.webp";
import sightSeeingImg from "../assets/sight-seeing-main.webp";

const Services = () => {
  return (
    <div>
      <div className="p-5">
        <h1 className="lg:text-3xl lg:font-medium text-2xl  tracking-tighter">
          We <span className="text-emerald-800">Provides</span>
        </h1>
        <hr className="mt-2 mb-5 w-3/4" />
        {/* CARDS CONTAINER */}
        <div className="flex flex-wrap gap-5">
          {/* CARD */}
          <div className="w-60">
            <img src={trekkingImg} alt="" className="h-96 shadow-xl" />
            <p className="text-lg font-bold mt-4 tracking-wide">
              Trekking & Adventures
            </p>
          </div>
          {/* CARD */}
          <div className="w-60">
            <img src={sightSeeingImg} alt="" className="h-96 shadow-xl" />
            <p className="text-lg font-bold mt-4 tracking-wide">
              Sight Seeing Tour
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
