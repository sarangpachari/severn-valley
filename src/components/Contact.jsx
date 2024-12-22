import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-green-50 py-10">
      <div className="p-5">
        {/* MAP */}
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="">
            <h1 className="text-3xl font-bold text-green-600">Contact Us</h1>
            <hr className="mt-2" />

            {/* LOCATION */}
            <div className="flex items-center gap-4 mt-5">
              <FaLocationDot className="text-xl mb-2" />
              <p className="text-wrap">
                Odathode, Chundale P.O, Wayanad, Kerala 673123, INDIA
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 mt-3">
              <MdEmail className="text-xl" />
              <a href="mailto:rplmath2@gmail.com"><p className="">rplmath2@gmail.com</p></a>
            </div>

            {/* PHONE CALL */}
            <div className="flex items-center gap-4 mt-5">
              <FaPhoneAlt className="text-xl" />
              <div className="flex flex-col gap-2">
                <a href="tel:+917902700324">
                  <p className="">+91 7902 700 324 </p>
                </a>
                <a href="tel:+919562152795">
                  <p>+91 9562 152 795</p>
                </a>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP LOCATION */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.7109925970344!2d76.07817507969125!3d11.572563959308827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM0JzIxLjIiTiA3NsKwMDQnNTkuMCJF!5e0!3m2!1sen!2sin!4v1734877666365!5m2!1sen!2sin"
            height="250"
            style={{ border: "0" }}
            className="w-full md:px-10 md:w-1/2"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
