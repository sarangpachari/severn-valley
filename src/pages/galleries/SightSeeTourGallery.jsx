import React from 'react'
import lakkidi from '../../assets/sightSeeing/lakkidi.webp'
import kandi from '../../assets/sightSeeing/900kandi.webp'
import arippara from '../../assets/sightSeeing/arippara.webp'
import banasura from '../../assets/sightSeeing/banasura.webp'
import edakkal from '../../assets/sightSeeing/edakkal.webp'
import kanthanpara from '../../assets/sightSeeing/kanthanpara.webp'
import kuruvadweep from '../../assets/sightSeeing/kuruvadweep.webp'
import makkiyad from '../../assets/sightSeeing/makkiyad.webp'
import phantom from '../../assets/sightSeeing/phantom.webp'
import pookode from '../../assets/sightSeeing/pookode.webp'
import thirunelli from '../../assets/sightSeeing/thirunelli.webp'


const SightSeeTourGallery = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="p-5">
          <div className="md:mt-5">
            <h1 className="text-blue-950 text-xl lg:text-3xl tracking-tight">
              Sight <span className=" text-green-600">See</span>{" "}
              <span className="text-red-600">Tours</span>
            </h1>
            <hr className="mt-2" />
    
            {/* GALLERY */}
            <div className="flex flex-wrap ">
              {/* CARD */}
              <div className="w-max flex flex-col items-center p-3 hover:scale-105 transition-all">
                <img src={lakkidi} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                  Lakkidi View Point
                </p>
              </div>
    
              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={kandi} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                  900 Kandi
                </p>
              </div>
    
              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={edakkal} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                  Edakkal Caves
                </p>
              </div>
    
              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={arippara} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                  Arippara Waterfalls
                </p>
              </div>
    
              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={banasura} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                  Banasura Sagar Dam
                </p>
              </div>
    
              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={kanthanpara} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                Kanthanpara Waterfalls
                </p>
              </div>
    
              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={thirunelli} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                Thirunelli Mahavishnu Temple
                </p>
              </div>
    
              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={kuruvadweep} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                Kuruvadweep
                </p>
              </div>

              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={makkiyad} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                Makkiyad Meenmutty Waterfalls
                </p>
              </div>

              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={phantom} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                Phantom Rock
                </p>
              </div>

              {/* CARD */}
              <div className="w-max flex flex-col justify-center items-center p-3 hover:scale-105 transition-all">
                <img src={pookode} alt="" className="md:h-52 shadow-xl rounded-md" />
                <p className="text-md mt-4 tracking-wide">
                Pookode Lake
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SightSeeTourGallery