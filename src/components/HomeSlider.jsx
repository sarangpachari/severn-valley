import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../assets/slider-1.webp";
import slider2 from "../assets/slider-2.webp";
import slider3 from "../assets/slider-3.webp";
import slider4 from "../assets/slider-4.webp";
import slider5 from "../assets/slider-5.webp";
import {  FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


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
          <div className=" absolute flex flex-col lg:gap-5 items-center top-1/3 w-full">
            <p className="lg:text-6xl lg:w-1/2 lg:text-center lg:tracking-tight text-sm text-white m-5 mb-3 tracking-widest">
              Discover the charm of Severn Valley—where every stay feels like
              home and every journey becomes an adventure.
            </p>

            <a href="https://wa.me/+919562152795" target="_blank">
              <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-700 to-green-500 text-white rounded-full inline-flex items-center gap-2">
                <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
              </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img src={slider2} className="lg:h-screen" />
          <div className=" absolute flex flex-col lg:gap-5 items-center top-1/3 w-full">
            <p className="lg:text-6xl lg:w-1/2 lg:text-center lg:tracking-tight text-sm text-white m-5 mb-3 tracking-widest">
              Discover the charm of Severn Valley—where every stay feels like
              home and every journey becomes an adventure.
            </p>

            <a href="https://wa.me/+919562152795" target="_blank">
              <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-700 to-green-500 text-white rounded-full inline-flex items-center gap-2">
                <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
              </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img src={slider3} className="lg:h-screen" />
          <div className=" absolute flex flex-col lg:gap-5 items-center top-1/3 w-full">
            <p className="lg:text-6xl lg:w-1/2 lg:text-center lg:tracking-tight text-sm text-white m-5 mb-3 tracking-widest">
              Discover the charm of Severn Valley—where every stay feels like
              home and every journey becomes an adventure.
            </p>

            <a href="https://wa.me/+919562152795" target="_blank">
              <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-700 to-green-500 text-white rounded-full inline-flex items-center gap-2">
                <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
              </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img src={slider4} className="lg:h-screen" />
          <div className=" absolute flex flex-col lg:gap-5 items-center top-1/3 w-full">
            <p className="lg:text-6xl lg:w-1/2 lg:text-center lg:tracking-tight text-sm text-white m-5 mb-3 tracking-widest">
              Discover the charm of Severn Valley—where every stay feels like
              home and every journey becomes an adventure.
            </p>

            <a href="https://wa.me/+919562152795" target="_blank">
              <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-700 to-green-500 text-white rounded-full inline-flex items-center gap-2">
                <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
              </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img src={slider5} className="lg:h-screen" />
          <div className=" absolute flex flex-col lg:gap-5 items-center top-1/3 w-full">
            <p className="lg:text-6xl lg:w-1/2 lg:text-center lg:tracking-tight text-sm text-white m-5 mb-3 tracking-widest">
              Discover the charm of Severn Valley—where every stay feels like
              home and every journey becomes an adventure.
            </p>

            <a href="https://wa.me/+919562152795" target="_blank">
              <button className="hover:bg-white hover:text-black px-4 py-3 lg:text-lg text-sm bg-gradient-to-r from-green-700 to-green-500 text-white rounded-full inline-flex items-center gap-2">
                <FaWhatsapp className="text-xl md:text-3xl" /> Chat with Us
              </button>
            </a>
          </div>
        </div>
      </Carousel>

      <div className="px-16 py-5 w-full">
        <a href="tel:+919562152795">
          <button className="text-red-600 animate-pulse flex gap-2 items-center justify-center border-red-600 border-2 px-4 w-full  lg:py-3 py-2 mb-2 rounded hover:bg-red-600 hover:text-white">
           <FaPhoneAlt  /> Call Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeSlider;
