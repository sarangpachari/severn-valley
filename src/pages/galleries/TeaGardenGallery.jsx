import React from "react";
import tg1 from "../../assets/teaGarden/tg-1.webp";
import tg2 from "../../assets/teaGarden/tg-2.webp";
import tg3 from "../../assets/teaGarden/tg-3.webp";
import tg4 from "../../assets/teaGarden/tg-4.webp";

const TeaGardenGallery = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="p-5">
      <div className="md:mt-5">
        <h1 className="text-blue-950 text-xl lg:text-3xl tracking-tight">
          Tea <span className=" text-green-600">Garden</span>
          <span className="text-red-600"> Visit</span>
        </h1>
        <hr className="mt-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap">
          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img src={tg1} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={tg2} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={tg3} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={tg4} alt="" className="md:h-52 shadow-xl rounded-md" />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default TeaGardenGallery;
