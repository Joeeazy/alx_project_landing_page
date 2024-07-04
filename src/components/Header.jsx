import React, { useState, useEffect } from "react";

//import header contents
import { header } from "../constants";

//import header components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

//import Icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

export default function Header() {
  //destructure header contents
  const { logo, btnLoginText, btnSignupText } = header;

  // header state change
  const [isActive, setIsActive] = useState(false);

  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px=[20px] lg:px-[80px] transition-all duration-300`}
    >
      {/* logo */}
      <a href="">
        <img className="h-[30px]" src={logo} alt="Logo" />
      </a>
      {/* Nav hidden in Mobile phones - show on lg screens */}
      <Nav />
      {/* buttons hidden in Mobile phones - show on lg screens */}
      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm text-white hover:text-primary-200 transition">
          {btnLoginText}
        </button>
        <button className="btn btn-sm btn-primary">{btnSignupText}</button>
      </div>
      {/* Nav hidden in lg screens visible in sm screens */}
      <div
        className="lg:hidden absolute right-4"
        onClick={() => setNavMobile(!navMobile)}
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl cursor-pointer" />
        )}
      </div>
      {/* Nav items on sm hidden on lg */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
}
