import React from "react";
import trekkingImg from "../assets/trekking-main-img.webp";
import sightSeeingImg from "../assets/sight-seeing-main.webp";
import jungleSafariImg from "../assets/jungle-safari-main.webp";

const Services = () => {
  return (
    <div>
      <div className="p-5">
        <h1 className="lg:text-3xl lg:font-medium text-2xl  tracking-tighter">
          We <span className="text-emerald-800">Provides</span>
        </h1>
        <hr className="mt-2 mb-5 w-3/4" />
        {/* CARDS CONTAINER */}
        <div className="flex flex-wrap justify-center">
          {/* CARD */}
          <div className="w-1/2 p-3">
            <img src={trekkingImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Trekking & Adventures
            </p>
          </div>
          {/* CARD */}
          <div className="w-1/2 p-3">
            <img src={sightSeeingImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Sight Seeing Tour
            </p>
          </div>
          {/* CARD */}
          <div className="w-1/2 p-3">
            <img src={jungleSafariImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Sight Seeing Tour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
