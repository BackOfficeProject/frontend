import React, { useState } from "react";
import { Stats } from "../../components/common/Stats";
import { AttendanceCalendar } from "../../components/attendance/AttendanceCalendar";
import { AttendanceDetails } from "../../components/attendance/AttendanceDetails";
import {
  UserIcon,
  MailIcon,
  BuildingIcon,
  ClockIcon,
  UserXIcon,
  CalendarIcon,
  UserCheckIcon,
} from "lucide-react";

export default function AttendanceDetail() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const employee = {
    id: "EMP001",
    name: "김민수",
    email: "mskim@company.com",
    department: "개발팀",
    position: "선임 개발자",
    joinDate: "2022-03-15",
  };

  const stats = {
    totalDays: {
      value: 22,
      change: "2일 증가",
      trend: "up",
      timeframe: "전월 대비",
    },
    present: {
      value: 19,
      change: "1일 증가",
      trend: "up",
      timeframe: "전월 대비",
    },
    absent: {
      value: 2,
      change: "1일 감소",
      trend: "down",
      timeframe: "전월 대비",
    },
    late: {
      value: 1,
      change: "변동없음",
      trend: "up",
      timeframe: "전월 대비",
    },
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">근태 정보</h1>
        <div className="text-sm text-gray-500">사원번호: {employee.id}</div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-start space-x-4">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <UserIcon size={32} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {employee.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center text-gray-600">
                <MailIcon size={16} className="mr-2" />
                <span>{employee.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BuildingIcon size={16} className="mr-2" />
                <span>{employee.department}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ClockIcon size={16} className="mr-2" />
                <span>입사일: {employee.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stats
          title="총 근무일"
          value={stats.totalDays.value.toString()}
          change={stats.totalDays.change}
          timeframe={stats.totalDays.timeframe}
          trend={stats.totalDays.trend}
          icon={<CalendarIcon className="text-blue-600" size={24} />}
        />
        <Stats
          title="출근"
          value={stats.present.value.toString()}
          change={stats.present.change}
          timeframe={stats.present.timeframe}
          trend={stats.present.trend}
          icon={<UserCheckIcon className="text-green-600" size={24} />}
        />
        <Stats
          title="결근"
          value={stats.absent.value.toString()}
          change={stats.absent.change}
          timeframe={stats.absent.timeframe}
          trend={stats.absent.trend}
          icon={<UserXIcon className="text-red-600" size={24} />}
        />
        <Stats
          title="지각"
          value={stats.late.value.toString()}
          change={stats.late.change}
          timeframe={stats.late.timeframe}
          trend={stats.late.trend}
          icon={<ClockIcon className="text-orange-600" size={24} />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <AttendanceCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <AttendanceDetails selectedDate={selectedDate} />
      </div>
    </div>
  );
}
