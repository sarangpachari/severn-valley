import React from "react";
import Slider from "../components/HomeSlider";
import Services from "./Services";
import Contact from "../components/Contact";
import Provides from "../components/Provides";

const Home = () => {
  return (
    <div style={{ paddingTop: "" }} className="">
      <Slider />
      {/* <Services /> */}
      <Provides />
      <Contact />
    </div>
  );
};

export default Home;
