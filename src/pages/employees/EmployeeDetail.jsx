import React from "react";
import ProfileHeader from "../../components/employees/ProfileHeader";
import DetailsSection from "../../components/employees/DetailsSection";
import PerformanceChart from "../../components/employees/PerformanceChart";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  BriefcaseIcon,
  CalendarIcon,
  GraduationCapIcon,
  ClockIcon,
  SunIcon,
  ClipboardListIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeDetail = () => {
  // Mock employee data
  const employee = {
    id: "1",
    name: "박한경",
    position: "수석 개발자",
    department: "개발부",
    email: "gksrud.qkr@company.com",
    phone: "010-0000-0000",
    location: "경기도 안양시",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    startDate: "2020년 3월 15일",
    manager: "David Wilson",
    team: ["Alex Chen", "Priya Patel", "James Rodriguez"],
    skills: [
      "제품 전략",
      "사용자 조사",
      "애자일 방법론",
      "데이터 분석",
      "팀 리더십",
    ],
    education: "스탠퍼드 대학교 MBA",
    previousRole: "TechCorp 제품 관리자",
    workSchedule: "월요일 - 금요일, 오전 9시 ~ 오후 5시",
    performanceMetrics: [
      { month: "1월", score: 92 },
      { month: "2월", score: 88 },
      { month: "3월", score: 95 },
      { month: "4월", score: 90 },
      { month: "5월", score: 94 },
      { month: "6월", score: 97 },
    ],
    remainingLeave: 12,
    attendance: {
      last30Days: "근태 양호",
      lateCount: 1,
      absentCount: 0,
    },
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">임직원 상세 정보</h1>
      <ProfileHeader
        name={employee.name}
        position={employee.position}
        department={employee.department}
        avatar={employee.avatar}
        employeeId={employee.id}
      />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DetailsSection title="개인 정보">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm">{employee.email}</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm">{employee.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm">{employee.location}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm">{employee.workSchedule}</span>
              </div>
            </div>
          </DetailsSection>
          <DetailsSection title="직무 정보">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <span className="text-sm font-medium block">관리자</span>
                  <span className="text-sm text-gray-500">
                    {employee.manager}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <span className="text-sm font-medium block">입사일</span>
                  <span className="text-sm text-gray-500">
                    {employee.startDate}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <span className="text-sm font-medium block">이전 직무</span>
                  <span className="text-sm text-gray-500">
                    {employee.previousRole}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCapIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <span className="text-sm font-medium block">학력</span>
                  <span className="text-sm text-gray-500">
                    {employee.education}
                  </span>
                </div>
              </div>
            </div>
          </DetailsSection>
          <DetailsSection title="성과 평가">
            <div className="h-64">
              <PerformanceChart data={employee.performanceMetrics} />
            </div>
          </DetailsSection>
        </div>
        <div className="space-y-6">
          <DetailsSection title="함께 일하는 팀원">
            <ul className="divide-y divide-gray-200">
              {employee.team.map((member, index) => (
                <li key={index} className="py-2 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                    {member
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="ml-3 text-sm">{member}</span>
                </li>
              ))}
            </ul>
          </DetailsSection>
          {/* <DetailsSection title="보유 기술">
            <div className="flex flex-wrap gap-2">
              {employee.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </DetailsSection> */}
          <DetailsSection title="휴가 및 근태">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <SunIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <div>
                    <span className="text-sm font-medium block">
                      휴가 잔여일수
                    </span>
                    <span className="text-sm text-gray-500">
                      {employee.remainingLeave}일
                    </span>
                  </div>
                </div>
                <a
                  href={`/employees/${employee.id}/leave`}
                  className="text-sm text-blue-500 hover:underline"
                >
                  자세히 보기
                </a>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ClipboardListIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <div>
                    <span className="text-sm font-medium block">
                      최근 30일 근태
                    </span>
                    <span className="text-sm text-gray-500">
                      {employee.attendance.last30Days} (지각{" "}
                      {employee.attendance.lateCount}회, 결근{" "}
                      {employee.attendance.absentCount}회)
                    </span>
                  </div>
                </div>
                <Link to={`/employees/${employee.id}/attendance`}>
                  자세히 보기
                </Link>
              </div>
            </div>
          </DetailsSection>
          <DetailsSection title="기타 작업">
            <div className="space-y-3">
              <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                임직원 정보 수정
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                성과 이력 보기
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                회의 일정 잡기
              </button>
            </div>
          </DetailsSection>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
