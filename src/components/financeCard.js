import React from "react";

function FinanceCard({ color, Icon, title, stats, num }) {
  const colorMap = {
    blue: { text: "text-blue-500", bg: "bg-blue-100" },
    green: { text: "text-green-500", bg: "bg-green-100" },
    red: { text: "text-red-500", bg: "bg-red-100" },
  };
  const selectedColor = colorMap[color] || color.blue;
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-600 dark:bg-gray-800 bg-white flex justify-between items-center px-6 py-5 shadow">
      <div className="space-y-1 flex flex-col min-w-0">
        <h6 className="text-gray-600 dark:text-gray-400 font-semibold text-sm truncate" title={title}>{title}</h6>
        <h4 className="text-black dark:text-gray-200 font-bold text-2xl truncate" title={num}>${num}</h4>
        <span className={`${selectedColor.text} text-sm font-semibold`}>
          {stats} from last month
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
