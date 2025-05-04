import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns";

export const AttendanceCalendar = ({ selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });
  const firstDayOfMonth = startOfMonth(currentMonth).getDay();
  const emptyCellsBefore = Array.from(
    {
      length: firstDayOfMonth,
    },
    (_, i) => i
  );
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">출결 달력</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevMonth}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600"
          >
            <ChevronLeftIcon size={18} />
          </button>
          <h3 className="text-md font-medium text-gray-700">
            {format(currentMonth, "yyyy년 MM월")}
          </h3>
          <button
            onClick={nextMonth}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600"
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day} className="text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        {emptyCellsBefore.map((i) => (
          <div key={`empty-before-${i}`} className="h-9"></div>
        ))}
        {daysInMonth.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isTodayDate = isToday(day);
          const dayNumber = day.getDate();
          let attendanceClass = "";
          if (dayNumber % 10 === 0) {
            attendanceClass = "bg-red-100";
          } else if (dayNumber % 5 === 0) {
            attendanceClass = "bg-orange-100";
          } else {
            attendanceClass = "bg-green-50";
          }
          return (
            <button
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
              className={`
                h-9 w-full rounded-full flex items-center justify-center text-sm
                ${!isCurrentMonth ? "text-gray-300" : ""}
                ${
                  isSelected
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : attendanceClass
                }
                ${isTodayDate && !isSelected ? "border border-blue-500" : ""}
                hover:bg-gray-100
              `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
      <div className="pt-4 border-t">
        <div className="flex flex-wrap gap-3 justify-center text-xs">
          <div className="flex items-center px-2 py-1 rounded-full bg-gray-50">
            <div className="w-2 h-2 rounded-full bg-green-50 mr-2"></div>
            <span>정상 출근</span>
          </div>
          <div className="flex items-center px-2 py-1 rounded-full bg-gray-50">
            <div className="w-2 h-2 rounded-full bg-orange-100 mr-2"></div>
            <span>지각</span>
          </div>
          <div className="flex items-center px-2 py-1 rounded-full bg-gray-50">
            <div className="w-2 h-2 rounded-full bg-red-100 mr-2"></div>
            <span>결근</span>
          </div>
          <div className="flex items-center px-2 py-1 rounded-full bg-gray-50">
            <div className="w-2 h-2 rounded-full bg-blue-100 mr-2"></div>
            <span>선택된 날짜</span>
          </div>
        </div>
      </div>
    </div>
  );
};
