import React from "react";
import Banner from "./Banner/Banner";
import InsideOxifit from "./Video/InsideOxifit";

const Oxifit = () => {
  return (
    <div className="grid grid-cols-1">
      <Banner />
      <InsideOxifit />
    </div>
  );
};

export default Oxifit;
