import React from "react";

function FinanceCard({ color, Icon, title, stats, num }) {
  const colorMap = {
    blue: { text: "text-blue-500", bg: "bg-blue-100" },
    green: { text: "text-green-500", bg: "bg-green-100" },
    red: { text: "text-red-500", bg: "bg-red-100" },
  };
  const selectedColor = colorMap[color] || color.blue;
  return (
    <div className="rounded-2xl border border-gray-200 bg-white flex justify-between items-center px-6 py-5 shadow">
      <div className="space-y-1">
        <h6 className="text-gray-600 font-semibold text-sm">{title}</h6>
        <h4 className="text-black font-bold text-2xl">${num}</h4>
        <span className={`${selectedColor.text} text-sm font-semibold`}>
          {stats}% from last month
        </span>
      </div>
      <div>
        <div className={` ${selectedColor.bg}  p-3 rounded-lg`}>
          <Icon className={`${selectedColor.text} text-lg`} />
        </div>
      </div>
    </div>
  );
}

export default FinanceCard;
