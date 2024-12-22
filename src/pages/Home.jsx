import React from "react";
import Slider from "../components/HomeSlider";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div style={{ paddingTop: "" }} className="">
      <Slider />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
