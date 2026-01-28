import React from "react";

function ReportsStatsPanel({ Icon, title, num, stats, color }) {
  const colorMap = {
    blue: { text: "text-blue-600", bg: "bg-blue-100" },
    green: { text: "text-green-600", bg: "bg-green-100" },
    orange: { text: "text-orange-600", bg: "bg-orange-100" },
    purple: { text: "text-purple-600", bg: "bg-purple-100" },
  };

  const selectedColor = colorMap[color] || colorMap.orange;
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl dark:bg-gray-800 bg-white flex justify-between items-center shadow-sm p-3 ps-6 ">
        <div className={`rounded-lg ${selectedColor.text} p-4 text-lg ${selectedColor.bg}`}>
          <Icon />
        </div>
      <div>
        <h5 className="text-gray-600  dark:text-gray-400">{title}</h5>
        <h3 className="font-bold text-2xl text-gray-900 dark:text-gray-200">{num}</h3>
        <span className={`text-sm font-semibold ${selectedColor.text}`}>{stats} vs last month</span>
      </div>
      <div>
      </div>
    </div>
  );
}

export default ReportsStatsPanel;
