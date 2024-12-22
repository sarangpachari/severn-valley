import React from "react";
import banasuraHill from "../../assets/trekking/banasura-hill.webp"
import chembraPeak from "../../assets/trekking/chembra-peak.webp"
import edakkal from "../../assets/trekking/edakkal.webp"
import kurumbalakotta from "../../assets/trekking/kurumbalakotta.webp"
import meenmutty from "../../assets/trekking/meenmutty.webp"
import pakshipathalam from "../../assets/trekking/pakshipathalam.webp"
import thirunelli from "../../assets/trekking/thirunelli-trek.webp"
import thusharagiri from "../../assets/trekking/thusharagiri-waterfalls.webp"

const TrekkingGallery = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="p-5">
      <div className="md:mt-5">
        <h1 className="text-blue-950 text-xl lg:text-3xl tracking-tight">
          Trekking <span className=" text-green-600">&</span>{" "}
          <span className="text-red-600">Adventures</span>
        </h1>
        <hr className="mt-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap justify-center">
          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img src={banasuraHill} alt="" className="h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
              Banasura Hill
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={chembraPeak} alt="" className="h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
              Chembra Peak
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={edakkal} alt="" className="h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
              Edakkal Caves
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={kurumbalakotta} alt="" className="h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
              Kurumbalakotta Trek
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={meenmutty} alt="" className="h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
              Meenmutty Trek
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={pakshipathalam} alt="" className="h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
            Pakshipathalam Trek
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={thirunelli} alt="" className="h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
            Thirunelli Trek
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={thusharagiri} alt="" className="h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
            Thusharagiri Trek
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekkingGallery;
