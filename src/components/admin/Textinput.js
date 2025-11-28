import React from "react";

function Textinput({ type, placeholder, label,name,onchange,value }) {
  return (
    <div className="mt-5">
      <label htmlFor={name} className="text-gray-700 text-sm font-semibold block mb-2 ">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={onchange}
        value={value}
        className="rounded-lg text-black border shadow  w-full placeholder:text-gray-400 border-gray-300  focus:border-blue-400 focus:outline-3 ease-in-out hover:border-blue-300 hover:border transition-all duration-200 focus:outline-blue-200 px-4 py-1.5"
      />
    </div>
  );
}

export default Textinput;
