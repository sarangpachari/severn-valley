import React from "react";
import trekkingImg from "../assets/trekking-main-img.webp";
import sightSeeingImg from "../assets/sight-seeing-main.webp";
import jungleSafariImg from "../assets/jungle-safari-main.webp";
import teaGardenImg from "../assets/tea-garden-main.webp";
import accomodationImg from "../assets/accomodation-main.webp"
import yogaMeditationImg from "../assets/yoga-meditation-main.webp"


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
          <div className="w-1/2 md:w-max p-3">
            <img src={trekkingImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Trekking & Adventures
            </p>
          </div>
          {/* CARD */}
          <div className="w-1/2 md:w-max p-3">
            <img src={sightSeeingImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Sight Seeing Tour
            </p>
          </div>
          {/* CARD */}
          <div className="w-1/2 md:w-max p-3">
            <img src={jungleSafariImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Jungle Safari
            </p>
          </div>
          {/* CARD */}
          <div className="w-1/2 md:w-max p-3">
            <img src={teaGardenImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Tea Garden Visit
            </p>
          </div>
          {/* CARD */}
          <div className="w-1/2 md:w-max p-3">
            <img src={accomodationImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Accomodation
            </p>
          </div>
          {/* CARD */}
          <div className="w-1/2 md:w-max p-3">
            <img src={yogaMeditationImg} alt="" className="h-52 shadow-xl" />
            <p className="text-sm  font-bold mt-4 tracking-wide">
              Yoga and Meditation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
