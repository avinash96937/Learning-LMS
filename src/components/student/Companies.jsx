import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className=" flex flex-col items-center justify-center pt-16 px-3">
      <p className=" text-base text-gray-500">Trusted by learners from</p>
      <div className=" flex flex-wrap items-center justify-center gap-6 md:gap-12 md:mt-10 mt-5">
        <img
          src={assets.microsoft_logo}
          alt="Microsoft"
          className=" w-20 md:w-28"
        />
        <img
          src={assets.walmart_logo}
          alt="Microsoft"
          className=" w-20 md:w-28"
        />
        <img
          src={assets.accenture_logo}
          alt="Microsoft"
          className=" w-20 md:w-28"
        />
        <img
          src={assets.adobe_logo}
          alt="Microsoft"
          className=" w-20 md:w-28"
        />
        <img
          src={assets.paypal_logo}
          alt="Microsoft"
          className=" w-20 md:w-28"
        />
      </div>
    </div>
  );
};

export default Companies;
