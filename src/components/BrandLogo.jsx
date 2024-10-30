import React from "react";
import { BRAND_LOGOS_ARRAY } from "../constants/data.js";

const LogosDisplay = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-20">
      {BRAND_LOGOS_ARRAY.map((logo) => (
        <div key={logo.name} className="flex justify-center w-full lg:w-auto">
          <img src={logo.url} alt={`${logo.name} logo`} className="h-10" />
        </div>
      ))}
    </div>
  );
};

export default LogosDisplay;
