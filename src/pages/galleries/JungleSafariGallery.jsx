import React from "react";
import js1 from "../../assets/jungle-safari/js-1.webp";
import js2 from "../../assets/jungle-safari/js-2.webp";
import js3 from "../../assets/jungle-safari/js-3.webp";
import js4 from "../../assets/jungle-safari/js-4.webp";
import js5 from "../../assets/jungle-safari/js-5.webp";
import js6 from "../../assets/jungle-safari/js-6.png";
import js7 from "../../assets/jungle-safari/js-7.webp";
import js8 from "../../assets/jungle-safari/js-8.webp";
import js9 from "../../assets/jungle-safari/js-9.webp";
import js10 from "../../assets/jungle-safari/js-10.webp";

const JungleSafariGallery = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="p-5">
      <div className="md:mt-5">
        <h1 className="text-blue-950 text-xl lg:text-3xl tracking-tight">
          Jungle <span className=" text-green-600">Safari</span>
        </h1>
        <hr className="mt-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap">
          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img src={js1} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js2} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js3} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js4} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js5} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js6} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js7} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js8} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js9} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={js10} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JungleSafariGallery;
