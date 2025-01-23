import React from "react";
import accomodationImg from "../assets/accomodation-main.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Provides = () => {
  return (
    <div>
      <div className="p-5">
        <h1 className="lg:text-3xl lg:font-medium text-2xl  tracking-tighter">
          We <span className="text-emerald-800">Provides</span>
        </h1>
        <hr className="mt-2 mb-5 w-3/4" />

        {/* CARDS CONTAINER */}
        <div className="flex flex-wrap justify-center">
          {/*ACCOMODATION CARD */}
          {/* CARD */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="md:w-max p-3 hover:scale-105 transition-all"
          >
            <Link to={"/gallery-ac"}>
              <img src={accomodationImg} alt="" className="h-72 shadow-xl" />
              <p className="text-sm  font-bold mt-4 tracking-wide">
                Accomodation
              </p>
            </Link>
          </motion.div>

          {/* ACTIVITES CARD */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="md:w-max p-3 hover:scale-105 transition-all"
          >
            <Link to={"/activities"}>
              <img src={accomodationImg} alt="" className="h-72 shadow-xl" />
              <p className="text-sm  font-bold mt-4 tracking-wide">
                Activities
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Provides;
