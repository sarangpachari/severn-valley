import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper ">
        {/* copy svg image and past it here */}

        <div className="loading-text text-center w-full">
          <span className="text-3xl animate-pulse">SEVERN</span> <span className="animate-pulse">VALLEY</span>
        </div>
        
      </div>
    </div>
  );
};

export default Loader;
