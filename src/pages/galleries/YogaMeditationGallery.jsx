import React from "react";
import ym1 from "../../assets/yoga/ym-1.webp";
import ym2 from "../../assets/yoga/ym-2.webp";
import ym3 from "../../assets/yoga/ym-3.webp";
import ym4 from "../../assets/yoga/ym-4.webp";
import ym5 from "../../assets/yoga/ym-5.webp";

const YogaMeditationGallery = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="p-5">
      <div className="md:mt-5">
        <h1 className="text-blue-950 text-xl lg:text-3xl tracking-tight">
          Yoga<span className=" text-green-600"> &</span>
          <span className="text-red-600"> Meditation</span>
        </h1>
        <hr className="mt-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap ">
          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img
              src={ym1}
              alt=""
              className=" lg:h-52 shadow-xl rounded-md"
            />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={ym2}
              alt=""
              className=" lg:h-52 shadow-xl rounded-md"
            />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={ym3}
              alt=""
              className=" lg:h-52 shadow-xl rounded-md"
            />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={ym4}
              alt=""
              className=" lg:h-52 shadow-xl rounded-md"
            />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={ym5}
              alt=""
              className=" lg:h-52 shadow-xl rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaMeditationGallery;
