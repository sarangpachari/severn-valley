import React from "react";
import trekkingImg from "../assets/trekking-main-img.webp";
import sightSeeingImg from "../assets/sight-seeing-main.webp";
import jungleSafariImg from "../assets/jungle-safari-main.webp";
import teaGardenImg from "../assets/tea-garden-main.webp";
import accomodationImg from "../assets/accomodation-main.webp";
import yogaMeditationImg from "../assets/yoga-meditation-main.webp";
import { Link } from "react-router-dom";

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
          {/*TREKKING CARD */}
          <div className="w-1/2 md:w-max p-3 hover:scale-105 transition-all">
            <Link to={"/gallery-tg"}>
              <img src={trekkingImg} alt="" className="h-52 shadow-xl" />
              <p className="text-sm  font-bold mt-4 tracking-wide">
                Trekking & Adventures
              </p>
            </Link>
          </div>

          {/* CARD */}
          <div className="w-1/2 md:w-max p-3 hover:scale-105 transition-all">
            <Link to={"/gallery-ss"}>
              <img src={sightSeeingImg} alt="" className="h-52 shadow-xl" />
              <p className="text-sm  font-bold mt-4 tracking-wide">
                Sight Seeing Tour
              </p>
            </Link>
          </div>

          {/* CARD */}
          <div className="w-1/2 md:w-max p-3 hover:scale-105 transition-all">
            <Link to={"/gallery-js"}>
              <img src={jungleSafariImg} alt="" className="h-52 shadow-xl" />
              <p className="text-sm  font-bold mt-4 tracking-wide">
                Jungle Safari
              </p>
            </Link>
          </div>

          {/* CARD */}
          <div className="w-1/2 md:w-max p-3 hover:scale-105 transition-all">
            <Link to={"/gallery-teag"}>
              <img src={teaGardenImg} alt="" className="h-52 shadow-xl" />
              <p className="text-sm  font-bold mt-4 tracking-wide">
                Tea Garden Visit
              </p>
            </Link>
          </div>

          {/* CARD */}
          <div className="w-1/2 md:w-max p-3 hover:scale-105 transition-all">
            <Link to={"/gallery-ac"}>
              <img src={accomodationImg} alt="" className="h-52 shadow-xl" />
              <p className="text-sm  font-bold mt-4 tracking-wide">
                Accomodation
              </p>
            </Link>
          </div>

          {/* CARD */}
          <div className="w-1/2 md:w-max p-3 hover:scale-105 transition-all">
            <Link to={"/gallery-ym"}>
              <img src={yogaMeditationImg} alt="" className="h-52 shadow-xl" />
              <p className="text-sm  font-bold mt-4 tracking-wide">
                Yoga and Meditation
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
