import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../assets/slider-1.webp";
import slider2 from "../assets/slider-2.webp";
import slider3 from "../assets/slider-3.webp";
import slider4 from "../assets/slider-4.webp";
import slider5 from "../assets/slider-5.webp";
import { FaWhatsapp } from "react-icons/fa";

const HomeSlider = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <div className="relative">
          <img src={slider1} className="lg:h-screen" />
          <div className=" absolute top-1/3 w-full">
          <p className="lg:text-lg text-sm text-white m-5 tracking-widest">Discover the charm of Severn Valley—where every stay feels like home and every journey becomes an adventure.</p>
            <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full inline-flex items-center gap-2">
             <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={slider2} className="lg:h-screen" />
          <div className=" absolute top-1/3 w-full">
          <p className="lg:text-lg text-sm text-white m-5 tracking-widest">Discover the charm of Severn Valley—where every stay feels like home and every journey becomes an adventure.</p>
            <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full inline-flex items-center gap-2">
             <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={slider3} className="lg:h-screen" />
          <div className=" absolute top-1/3 w-full">
          <p className="lg:text-lg text-sm text-white m-5 tracking-widest">Discover the charm of Severn Valley—where every stay feels like home and every journey becomes an adventure.</p>
            <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full inline-flex items-center gap-2">
             <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={slider4} className="lg:h-screen" />
          <div className=" absolute top-1/3 w-full">
          <p className="lg:text-lg text-sm text-white m-5 tracking-widest">Discover the charm of Severn Valley—where every stay feels like home and every journey becomes an adventure.</p>
            <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full inline-flex items-center gap-2">
             <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={slider5} className="lg:h-screen" />
          <div className=" absolute top-1/3 w-full">
          <p className="lg:text-lg text-sm text-white m-5 tracking-widest">Discover the charm of Severn Valley—where every stay feels like home and every journey becomes an adventure.</p>
            <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full inline-flex items-center gap-2">
             <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
