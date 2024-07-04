import React from "react";

//import footer contents
import { footer } from "../constants";

export default function Footer() {
  //destrcuture footer
  const { logo, copyrightText } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px] px-[20px]">
      <div
        className="container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* logo */}
        <a href="#">
          <img src={logo} alt="footer logo" />
        </a>
        {/* copyrighttext */}
        <p className="text-neutral-300 text-sm">{copyrightText}</p>
      </div>
    </footer>
  );
}
