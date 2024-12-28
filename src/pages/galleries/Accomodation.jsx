import React from 'react'
import ac1 from "../../assets/accomodation/accomodation-1.webp";
import ac2 from "../../assets/accomodation/accomodation-2.webp";
import ac3 from "../../assets/accomodation/accomodation-3.webp";
import ac4 from "../../assets/accomodation/accomodation-4.webp";

const Accomodation = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="p-5">
      <div className="md:mt-5">
        <h1 className="text-blue-950 text-xl lg:text-3xl tracking-tight">
         <span className=" text-green-600">Accommodation</span>
          
        </h1>
        <hr className="mt-2" />

        {/* GALLERY */}
        <div className="flex flex-wrap ">
          {/* CARD */}
          <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
            <img src={ac1} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
                  Cottage Full View
                </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={ac2} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
                  Deluxe Room
                </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={ac3} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
                  Premium Room
                </p>
          </div>

          {/* CARD */}
          <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
            <img src={ac4} alt="" className="lg:h-52 shadow-xl rounded-md" />
            <p className="text-md mt-4 tracking-wide">
                  View From Balcony
                </p>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Accomodation