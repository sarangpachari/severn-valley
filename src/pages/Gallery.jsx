import React from "react";

// TREKKING
import banasuraHill from "../assets/trekking/banasura-hill.webp";
import chembraPeak from "../assets/trekking/chembra-peak.webp";
import edakkal from "../assets/trekking/edakkal.webp";
import kurumbalakotta from "../assets/trekking/kurumbalakotta.webp";
import meenmutty from "../assets/trekking/meenmutty.webp";
import pakshipathalam from "../assets/trekking/pakshipathalam.webp";
import thirunelli from "../assets/trekking/thirunelli-trek.webp";
import thusharagiri from "../assets/trekking/thusharagiri-waterfalls.webp";

// SIGHT SEEING IMPORTS
import lakkidi from "../assets/sightSeeing/lakkidi.webp";
import kandi from "../assets/sightSeeing/900kandi.webp";
import arippara from "../assets/sightSeeing/arippara.webp";
import banasura from "../assets/sightSeeing/banasura.webp";
import edakkal2 from "../assets/sightSeeing/edakkal.webp";
import kanthanpara from "../assets/sightSeeing/kanthanpara.webp";
import kuruvadweep from "../assets/sightSeeing/kuruvadweep.webp";
import makkiyad from "../assets/sightSeeing/makkiyad.webp";
import phantom from "../assets/sightSeeing/phantom.webp";
import pookode from "../assets/sightSeeing/pookode.webp";
import thirunelli2 from "../assets/sightSeeing/thirunelli.webp";

// JUNGLE SAFARI
import js1 from "../assets/jungle-safari/js-1.webp";
import js2 from "../assets/jungle-safari/js-2.webp";
import js3 from "../assets/jungle-safari/js-3.webp";
import js4 from "../assets/jungle-safari/js-4.webp";
import js5 from "../assets/jungle-safari/js-5.webp";
import js6 from "../assets/jungle-safari/js-6.png";
import js7 from "../assets/jungle-safari/js-7.webp";
import js8 from "../assets/jungle-safari/js-8.webp";
import js9 from "../assets/jungle-safari/js-9.webp";
import js10 from "../assets/jungle-safari/js-10.webp";

const Gallery = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="p-5">
      {/* TREKKING */}
      <div className="mt-10">
        <h1 className="text-blue-950 text-xl lg:text-3xl tracking-tight">
          Trekking <span className=" text-green-600">&</span>{" "}
          <span className="text-red-600">Adventures</span>
        </h1>
        <hr className="mt-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap">
          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img
              src={banasuraHill}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Banasura Hill</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={chembraPeak}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Chembra Peak</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={edakkal}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Edakkal Caves</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={kurumbalakotta}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Kurumbalakotta Trek</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={meenmutty}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Meenmutty Trek</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={pakshipathalam}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Pakshipathalam Trek</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={thirunelli}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Thirunelli Trek</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={thusharagiri}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Thusharagiri Trek</p>
          </div>
        </div>
      </div>

      {/* SIGHT SEEING */}
      <div className="mt-10">
        <h1 className="text-blue-950 text-xl lg:text-3xl tracking-tight">
          Sight <span className=" text-green-600">See</span>{" "}
          <span className="text-red-600">Tours</span>
        </h1>
        <hr className="mt-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap ">
          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img
              src={lakkidi}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Lakkidi View Point</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={kandi} alt="" className="md:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">900 Kandi</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={edakkal2}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Edakkal Caves</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={arippara}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Arippara Waterfalls</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={banasura}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Banasura Sagar Dam</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={kanthanpara}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Kanthanpara Waterfalls</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={thirunelli2}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">
              Thirunelli Mahavishnu Temple
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={kuruvadweep}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Kuruvadweep</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={makkiyad}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">
              Makkiyad Meenmutty Waterfalls
            </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={phantom}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Phantom Rock</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img
              src={pookode}
              alt=""
              className="md:h-52 shadow-xl rounded-md"
            />
            <p className="text-md mt-4 tracking-wide">Pookode Lake</p>
          </div>
        </div>
      </div>

      {/* JUNGLE SAFARI */}
      <div className="mt-10">
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

export default Gallery;
