import React from "react";
import { TiTick } from "react-icons/ti";

function PlanCard({ title, price, features, highlight, current }) {
  return (
    <div className="relative font-sans">
      {(highlight || current) && (
        <div className="absolute  top-[-13] flex text-black w-full justify-center items-center gap-13  ml-2 sm:ml-5 md:ml-0 lg:ml-14 ">
          {highlight && (
            <p className="text-white bg-blue-500 rounded-4xl px-2 py-1 whitespace-nowrap text-sm shadow">
              Most Popular
            </p>
          )}
          {current && (
            <p className="text-white bg-green-500 whitespace-nowrap rounded-4xl px-2 py-1 shadow text-sm">
              Current Plan
            </p>
          )}
        </div>
      )}

      <div
        className={`rounded-2xl p-6 bg-white shadow-xs border h-[440px]
        ${highlight ? "border-blue-500 border-4" : "border-gray-200"}`}
      >
        <div className="flex justify-center">
          <h1 className="text-lg font-bold text-black pb-2">{title}</h1>
        </div>

        <div className="flex justify-center gap-1">
          <h1 className="text-3xl text-black font-bold">${price}</h1>
          <p className="text-sm text-gray-500 pt-3.5">/month</p>
        </div>

       
        <div className="text-black mt-4">
          {features.map((item, index) => (
            <div key={index} className="flex text-sm text-gray-500 ml-2 my-3">
              <TiTick className="text-green-400 text-lg mr-3" />
              {item}
            </div>
          ))}
        </div>

        <div
          className={`rounded-lg flex justify-center mx-5 my-6 p-1.5 
          ${
            current
              ? "bg-gray-200 text-gray-500 border-gray-200 font-bold"
              : "bg-gray-900 text-white border-gray-800"
          }`}
        >
          {current ? "Current Plan" : "Upgrade"}
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
