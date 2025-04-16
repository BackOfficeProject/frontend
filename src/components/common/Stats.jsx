import React from "react";
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {string} props.change
 * @param {string} props.timeframe
 * @param {'up' | 'down'} props.trend
 * @param {React.ReactNode} props.icon
 */
export function Stats({ title, value, change, timeframe, trend, icon }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex items-center mt-4">
        {trend === "up" ? (
          <TrendingUpIcon size={16} className="text-green-500 mr-1" />
        ) : (
          <TrendingDownIcon size={16} className="text-red-500 mr-1" />
        )}
        <span
          className={`text-sm ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
        <span className="text-xs text-gray-500 ml-1">{timeframe}</span>
      </div>
    </div>
  );
}
