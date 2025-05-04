// This file contains mock data for the attendance management system
import { format, isWeekend, differenceInHours, parse } from "date-fns";
// Generate mock statistics for a single employee based on the selected date
export const getMockStats = (date) => {
  const totalDays = 22;
  return {
    totalDays,
    present: 19,
    absent: 2,
    late: 1,
  };
};
// Generate mock daily attendance data
export const getDailyAttendance = (date) => {
  const dayOfWeek = date.getDay();
  const isWeekendDay = isWeekend(date);
  const dayOfMonth = date.getDate();
  if (isWeekendDay) {
    return {
      status: "absent",
      checkIn: null,
      checkOut: null,
      note: "주말",
    };
  }
  // Generate different scenarios based on the day of the month
  if (dayOfMonth % 10 === 0) {
    return {
      status: "absent",
      checkIn: null,
      checkOut: null,
      note: "연차 사용",
    };
  }
  if (dayOfMonth % 5 === 0) {
    return {
      status: "late",
      checkIn: "09:45 AM",
      checkOut: "06:30 PM",
      workingHours: "8시간 45분",
      note: "지각 사유: 교통 체증",
    };
  }
  // Regular working day
  return {
    status: "present",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    workingHours: "9시간",
    note: "",
  };
};
