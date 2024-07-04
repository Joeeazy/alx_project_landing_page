import React from "react";

//import contents
import { pricing } from "../constants";

//import component
import PlanList from "./PlanList";

export default function Pricing() {
  //destructre constants
  const { icon, title, plans } = pricing;
  return (
    <section className="section">
      {/* section title */}
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <img src={icon} alt="Pricing icon" />
        <h2 className="h2">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* PlanList component */}
      <PlanList plans={plans} />
    </section>
  );
}
