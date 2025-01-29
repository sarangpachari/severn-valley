import React from "react";
import ac1 from "../../assets/accomodation/accomodation-1.webp";
import ac2 from "../../assets/accomodation/accomodation-2.webp";
import ac3 from "../../assets/accomodation/accomodation-3.jpeg";
import ac4 from "../../assets/accomodation/accomodation-4.jpeg";
import sightSeeingBalcony1 from "../../assets/accomodation/sightSeeingFromBalcony/sightSeeingBalcony1.jpeg";
import sightSeeingBalcony2 from "../../assets/accomodation/sightSeeingFromBalcony/sightSeeingBalcony2.jpeg";
import sightSeeingBalcony3 from "../../assets/accomodation/sightSeeingFromBalcony/sightSeeingBalcony3.jpeg";
import sightSeeingBalcony4 from "../../assets/accomodation/sightSeeingFromBalcony/sightSeeingBalcony4.jpeg";



const Accomodation = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="p-5">
      <div className="md:mt-5">
        <h1 className="text-blue-950 text-xl font-semibold lg:text-3xl tracking-tight">
          <span className=" text-green-600">Accommodation</span>
        </h1>
        <hr className="mt-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap ">
          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={ac1} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">Bedroom 1</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={ac2} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">Bedroom 2</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img src={ac3} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">Bedroom 3</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={ac4} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">Bedroom 4</p>
          </div>
        </div>

        {/* BALCONY SIGHTS */}
        <h1 className="text-blue-950 text-xl font-semibold lg:text-3xl tracking-tight mt-10">
          <span className=" text-green-600">Sight <span className="text-red-600">From</span> Balcony</span>
        </h1>
        <hr className="mt-2 mb-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap ">
          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={sightSeeingBalcony1} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">Balcony View 1</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={sightSeeingBalcony2} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">Balcony View 2</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img src={sightSeeingBalcony3} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">Balcony View 3</p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={sightSeeingBalcony4} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">Balcony View 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
