import React, { useState } from "react";
import {
  SearchIcon,
  FilterIcon,
  DownloadIcon,
  ChevronDownIcon,
  UserCheckIcon,
  UserXIcon,
  ClockIcon,
} from "lucide-react";
import { Dropdown } from "../components/common/Dropdown";

const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const departments = [
  "개발팀",
  "디자인팀",
  "인사팀",
  "기획팀",
  "마케팅팀",
  "재무팀",
  "고객지원팀",
  "품질관리팀",
];
const statuses = ["정상 출근", "지각", "결근", "휴가"];

function Attendance() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDepartment, setSelectedDepartment] = useState("부서");
  const [selectedStatus, setSelectedStatus] = useState("상태");

  // 임시 데이터
  const employees = [
    {
      id: "EMP001",
      name: "김민수",
      department: "개발팀",
      position: "선임 개발자",
      attendance: {
        present: 19,
        absent: 2,
        late: 1,
        totalDays: 22,
      },
    },
    {
      id: "EMP002",
      name: "이지은",
      department: "디자인팀",
      position: "UI 디자이너",
      attendance: {
        present: 20,
        absent: 1,
        late: 0,
        totalDays: 21,
      },
    },
    // ... 더 많은 직원 데이터
  ];

  return (
    <div className="space-y-6">
      {/* 헤더 섹션 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">근태 관리</h1>
          <p className="text-sm text-gray-500 mt-1">
            {selectedYear}년 {selectedMonth}월 근태 현황
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-24">
              <Dropdown
                label={`${selectedYear}`}
                onSelect={(value) => setSelectedYear(parseInt(value))}
              >
                {years.map((year) => (
                  <button
                    key={year}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {year}
                  </button>
                ))}
              </Dropdown>
            </div>
            <div className="w-20">
              <Dropdown
                label={`${selectedMonth}`}
                onSelect={(value) => setSelectedMonth(parseInt(value))}
              >
                {months.map((month) => (
                  <button
                    key={month}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {month}
                  </button>
                ))}
              </Dropdown>
            </div>
          </div>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FilterIcon className="h-4 w-4 mr-2" />
            필터
          </button>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <DownloadIcon className="h-4 w-4 mr-2" />
            엑셀 다운로드
          </button>
        </div>
      </div>

      {/* 검색 및 필터 섹션 */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="직원 검색..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-32">
            <Dropdown
              label={selectedDepartment}
              onSelect={setSelectedDepartment}
            >
              {departments.map((dept) => (
                <button
                  key={dept}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {dept}
                </button>
              ))}
            </Dropdown>
          </div>
          <div className="w-32">
            <Dropdown label={selectedStatus} onSelect={setSelectedStatus}>
              {statuses.map((status) => (
                <button
                  key={status}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {status}
                </button>
              ))}
            </Dropdown>
          </div>
        </div>
      </div>

      {/* 근태 현황 테이블 */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  직원 정보
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  부서
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  직급
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center justify-center space-x-1">
                    <UserCheckIcon className="h-4 w-4 text-green-600" />
                    <span>출근</span>
                  </div>
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center justify-center space-x-1">
                    <UserXIcon className="h-4 w-4 text-red-600" />
                    <span>결근</span>
                  </div>
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center justify-center space-x-1">
                    <ClockIcon className="h-4 w-4 text-orange-600" />
                    <span>지각</span>
                  </div>
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  총 근무일
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        {employee.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {employee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-green-600 font-medium">
                      {employee.attendance.present}일
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-red-600 font-medium">
                      {employee.attendance.absent}일
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="text-orange-600 font-medium">
                      {employee.attendance.late}일
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {employee.attendance.totalDays}일
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
