import React from "react";
import { format } from "date-fns";
import { getDailyAttendance } from "../../utils/mockData";

export const AttendanceDetails = ({ selectedDate }) => {
  const attendance = getDailyAttendance(selectedDate);
  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "text-green-600 bg-green-50";
      case "late":
        return "text-orange-600 bg-orange-50";
      case "absent":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "present":
        return "정상 출근";
      case "late":
        return "지각";
      case "absent":
        return "결근";
      default:
        return "미확인";
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {format(selectedDate, "yyyy년 MM월 dd일")} 출결 정보
        </h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            attendance.status
          )}`}
        >
          {getStatusText(attendance.status)}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center p-4 rounded-lg bg-gray-50">
          <div>
            <p className="text-sm text-gray-500">출근 시간</p>
            <p className="text-lg font-semibold">{attendance.checkIn || "-"}</p>
          </div>
        </div>
        <div className="flex items-center p-4 rounded-lg bg-gray-50">
          <div>
            <p className="text-sm text-gray-500">퇴근 시간</p>
            <p className="text-lg font-semibold">
              {attendance.checkOut || "-"}
            </p>
          </div>
        </div>
      </div>
      {attendance.status !== "absent" &&
        attendance.checkIn &&
        attendance.checkOut && (
          <div className="mt-6 p-4 rounded-lg bg-blue-50">
            <div className="flex items-center">
              <span className="text-sm text-blue-600 font-medium">
                총 근무시간: {attendance.workingHours || "-"}
              </span>
            </div>
          </div>
        )}
      {attendance.note && (
        <div className="mt-4 text-sm text-gray-500">
          메모: {attendance.note}
        </div>
      )}
    </div>
  );
};
