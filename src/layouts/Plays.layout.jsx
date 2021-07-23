import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar.Components";
import Carousel from "../Components/Carousel/Carousel.Components";

const Playslayout = (props) => {
  return (
    <>
      <Navbar />
      <Carousel />
      {props.children}
    </>
  );
};

export default Playslayout;