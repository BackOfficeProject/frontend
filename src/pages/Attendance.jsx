import React, { useState, useMemo } from "react";
import {
  DownloadIcon,
  UserCheckIcon,
  UserXIcon,
  ClockIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";
import { Dropdown } from "../components/common/Dropdown";
import { Stats } from "../components/common/Stats";

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
const positions = [
  "수석 개발자",
  "선임 개발자",
  "주니어 개발자",
  "UI 디자이너",
  "UX 디자이너",
  "HR 매니저",
  "마케팅 매니저",
  "재무 담당자",
  "CS 매니저",
  "QA 엔지니어",
];
const statuses = ["정상 출근", "지각", "결근", "휴가"];
const comparisonOptions = [
  { value: "monthly", label: "전월 대비" },
  { value: "daily", label: "전일 대비" },
];

function AssertionError(message) {
  this.name = "AssertionError";
  this.message = message || "";
  this.stack = new Error().stack;
}
AssertionError.prototype = Object.create(Error.prototype);
AssertionError.prototype.constructor = AssertionError;

function Attendance() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDepartment, setSelectedDepartment] = useState("부서");
  const [selectedPosition, setSelectedPosition] = useState("직급");
  const [selectedStatus, setSelectedStatus] = useState("근태");
  const [searchQuery, setSearchQuery] = useState("");
  const [comparisonType, setComparisonType] = useState("monthly"); // 전월 대비 기본값

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
    {
      id: "EMP003",
      name: "박한경",
      department: "개발팀",
      position: "주니어 개발자",
      attendance: {
        present: 20,
        absent: 1,
        late: 0,
        totalDays: 21,
      },
    },
  ];

  // 필터링된 직원 목록
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "부서" ||
      employee.department === selectedDepartment;
    const matchesPosition =
      selectedPosition === "직급" || employee.position === selectedPosition;
    const matchesStatus =
      selectedStatus === "근태" ||
      (selectedStatus === "정상 출근" && employee.attendance.present > 0) ||
      (selectedStatus === "지각" && employee.attendance.late > 0) ||
      (selectedStatus === "결근" && employee.attendance.absent > 0);

    return (
      matchesSearch && matchesDepartment && matchesPosition && matchesStatus
    );
  });

  // 현재 근태 요약 통계 계산
  const attendanceSummary = {
    totalEmployees: filteredEmployees.length,
    present: filteredEmployees.filter((emp) => emp.attendance.present > 0)
      .length,
    absent: filteredEmployees.filter((emp) => emp.attendance.absent > 0).length,
    late: filteredEmployees.filter((emp) => emp.attendance.late > 0).length,
    totalDays: filteredEmployees.reduce(
      (sum, emp) => sum + emp.attendance.totalDays,
      0
    ),
  };

  // 전월 근태 데이터 (임시: 실제로는 API나 DB에서 가져와야 함)
  const previousMonthSummary = {
    totalEmployees: filteredEmployees.length - 2,
    present:
      filteredEmployees.filter((emp) => emp.attendance.present > 0).length - 3,
    absent:
      filteredEmployees.filter((emp) => emp.attendance.absent > 0).length + 1,
    late: filteredEmployees.filter((emp) => emp.attendance.late > 0).length + 2,
    totalDays:
      filteredEmployees.reduce(
        (sum, emp) => sum + emp.attendance.totalDays,
        0
      ) - 5,
  };

  // 전일 근태 데이터 (임시: 실제로는 API나 DB에서 가져와야 함)
  const previousDaySummary = {
    totalEmployees: filteredEmployees.length,
    present:
      filteredEmployees.filter((emp) => emp.attendance.present > 0).length - 1,
    absent:
      filteredEmployees.filter((emp) => emp.attendance.absent > 0).length + 1,
    late: filteredEmployees.filter((emp) => emp.attendance.late > 0).length - 1,
    totalDays:
      filteredEmployees.reduce(
        (sum, emp) => sum + emp.attendance.totalDays,
        0
      ) - 10,
  };

  // 비교 기준에 따른 변화 계산 (useMemo로 최적화)
  const changeSummary = useMemo(() => {
    console.log(
      "Calculating changeSummary for comparisonType:",
      comparisonType
    ); // 디버깅용
    return comparisonType === "monthly"
      ? {
          totalEmployees:
            attendanceSummary.totalEmployees -
            previousMonthSummary.totalEmployees,
          present: attendanceSummary.present - previousMonthSummary.present,
          absent: attendanceSummary.absent - previousMonthSummary.absent,
          late: attendanceSummary.late - previousMonthSummary.late,
          totalDays:
            attendanceSummary.totalDays - previousMonthSummary.totalDays,
          timeframe: "전월 대비",
          unit: {
            totalEmployees: "명",
            present: "명",
            absent: "명",
            late: "명",
            totalDays: "일",
          },
        }
      : {
          totalEmployees:
            attendanceSummary.totalEmployees -
            previousDaySummary.totalEmployees,
          present: attendanceSummary.present - previousDaySummary.present,
          absent: attendanceSummary.absent - previousDaySummary.absent,
          late: attendanceSummary.late - previousDaySummary.late,
          totalDays: attendanceSummary.totalDays - previousDaySummary.totalDays,
          timeframe: "전일 대비",
          unit: {
            totalEmployees: "명",
            present: "명",
            absent: "명",
            late: "명",
            totalDays: "일",
          },
        };
  }, [
    comparisonType,
    attendanceSummary,
    previousMonthSummary,
    previousDaySummary,
  ]);

  return (
    <div className="space-y-6">
      {/* 헤더 섹션 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">근태 관리</h1>
        </div>
        <div className="space-x-4 flex items-center">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center">
            <DownloadIcon size={20} className="mr-2" />
            내보내기
          </button>
          <div className="flex space-x-2">
            {comparisonOptions.map((option) => (
              <button
                key={option.value}
                className={`px-4 py-2 rounded-lg ${
                  comparisonType === option.value
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => {
                  console.log("Selected comparison value:", option.value); // 디버깅용
                  setComparisonType(option.value);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 근태 요약 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Stats
          title="전체 직원"
          value={`${attendanceSummary.totalEmployees}명`}
          change={`${changeSummary.totalEmployees > 0 ? "+" : ""}${
            changeSummary.totalEmployees
          }${changeSummary.unit.totalEmployees}`}
          timeframe={changeSummary.timeframe}
          trend={changeSummary.totalEmployees >= 0 ? "up" : "down"}
          icon={<UsersIcon size={24} className="text-blue-600" />}
        />
        <Stats
          title="정상 출근"
          value={`${attendanceSummary.present}명`}
          change={`${changeSummary.present > 0 ? "+" : ""}${
            changeSummary.present
          }${changeSummary.unit.present}`}
          timeframe={changeSummary.timeframe}
          trend={changeSummary.present >= 0 ? "up" : "down"}
          icon={<UserCheckIcon size={24} className="text-green-600" />}
        />
        <Stats
          title="결근"
          value={`${attendanceSummary.absent}명`}
          change={`${changeSummary.absent > 0 ? "+" : ""}${
            changeSummary.absent
          }${changeSummary.unit.absent}`}
          timeframe={changeSummary.timeframe}
          trend={changeSummary.absent >= 0 ? "up" : "down"}
          icon={<UserXIcon size={24} className="text-red-600" />}
        />
        <Stats
          title="지각"
          value={`${attendanceSummary.late}명`}
          change={`${changeSummary.late > 0 ? "+" : ""}${changeSummary.late}${
            changeSummary.unit.late
          }`}
          timeframe={changeSummary.timeframe}
          trend={changeSummary.late >= 0 ? "up" : "down"}
          icon={<ClockIcon size={24} className="text-orange-600" />}
        />
        <Stats
          title="총 근무일"
          value={`${attendanceSummary.totalDays}일`}
          change={`${changeSummary.totalDays > 0 ? "+" : ""}${
            changeSummary.totalDays
          }${changeSummary.unit.totalDays}`}
          timeframe={changeSummary.timeframe}
          trend={changeSummary.totalDays >= 0 ? "up" : "down"}
          icon={<CalendarIcon size={24} className="text-purple-600" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* 검색 및 필터 섹션 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="이름 또는 이메일로 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-24">
                <Dropdown
                  label={`${selectedYear}`}
                  onSelect={(value) => setSelectedYear(parseInt(value))}
                >
                  {years.map((year) => (
                    <button
                      key={year}
                      value={year}
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
                      value={month}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {month}
                    </button>
                  ))}
                </Dropdown>
              </div>
            </div>
            <div className="w-32">
              <Dropdown label={selectedStatus} onSelect={setSelectedStatus}>
                {statuses.map((status) => (
                  <button
                    key={status}
                    value={status}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {status}
                  </button>
                ))}
              </Dropdown>
            </div>
            <div className="w-32">
              <Dropdown
                label={selectedDepartment}
                onSelect={setSelectedDepartment}
              >
                {departments.map((dept) => (
                  <button
                    key={dept}
                    value={dept}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {dept}
                  </button>
                ))}
              </Dropdown>
            </div>
            <div className="w-32">
              <Dropdown label={selectedPosition} onSelect={setSelectedPosition}>
                {positions.map((position) => (
                  <button
                    key={position}
                    value={position}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {position}
                  </button>
                ))}
              </Dropdown>
            </div>
          </div>
        </div>

        {/* 근태 현황 테이블 */}
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
              {filteredEmployees.map((employee) => (
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
