import React, { useState } from "react";

function Dropdown({ DropdownData, name, onchange }) {
  return (
    <div className="">
      <select
        onChange={onchange}
        name={name}
        className="text-black w-full rounded-lg border shadow  placeholder:text-gray-400 border-gray-300  focus:border-blue-400 focus:outline-3 ease-in-out hover:border-blue-300 hover:border transition-all duration-200 focus:outline-blue-200 px-4 py-1.5"
      >
        <option>Select Client</option>
        {DropdownData.map((item, idx) => (
          <option  value={item} id={idx} key={idx}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
