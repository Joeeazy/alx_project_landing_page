import React from "react";
//import nav items
import { nav } from "../constants";

export default function Nav() {
  return (
    <nav className="hidden lg:flex">
      <ul className=" flex text-white gap-x-10 text-">
        {nav.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:text-primary-200 transtion">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
