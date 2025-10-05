import React from "react";
import { FaTruckPickup, FaMoneyBillWave, FaTruckMoving, FaBuilding } from "react-icons/fa";

const steps = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaTruckPickup className="text-4xl text-[#02353c]" />,
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaMoneyBillWave className="text-4xl text-[#02353c]" />,
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaTruckMoving className="text-4xl text-[#02353c]" />,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaBuilding className="text-4xl text-[#02353c]" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 rounded-3xl">
      <div className=" mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#02353c] mb-3">
          How it Works
        </h2>
   
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-[#02353c] mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
