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
} from "lucide-react";
const EmployeeDetail = () => {
  // Mock employee data
  const employee = {
    id: "EMP-2023-0042",
    name: "박한경",
    position: "수석 개발자",
    department: "개발부",
    email: "gksrud.qkr@company.com",
    phone: "010-0000-0000",
    location: "경기도 안양시",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",

    startDate: "March 15, 2020",
    manager: "David Wilson",
    team: ["Alex Chen", "Priya Patel", "James Rodriguez"],
    skills: [
      "Product Strategy",
      "User Research",
      "Agile Methodology",
      "Data Analysis",
      "Team Leadership",
    ],
    education: "MBA, Stanford University",
    previousRole: "Product Manager at TechCorp",
    workSchedule: "Monday - Friday, 9:00 AM - 5:00 PM",
    performanceMetrics: [
      {
        month: "Jan",
        score: 92,
      },
      {
        month: "Feb",
        score: 88,
      },
      {
        month: "Mar",
        score: 95,
      },
      {
        month: "Apr",
        score: 90,
      },
      {
        month: "May",
        score: 94,
      },
      {
        month: "Jun",
        score: 97,
      },
    ],
  };
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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
          <DetailsSection title="직원 정보">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <span className="text-sm font-medium block">Manager</span>
                  <span className="text-sm text-gray-500">
                    {employee.manager}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <span className="text-sm font-medium block">Start Date</span>
                  <span className="text-sm text-gray-500">
                    {employee.startDate}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <span className="text-sm font-medium block">
                    Previous Role
                  </span>
                  <span className="text-sm text-gray-500">
                    {employee.previousRole}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCapIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <span className="text-sm font-medium block">Education</span>
                  <span className="text-sm text-gray-500">
                    {employee.education}
                  </span>
                </div>
              </div>
            </div>
          </DetailsSection>
          <DetailsSection title="성과평가">
            <div className="h-64">
              <PerformanceChart data={employee.performanceMetrics} />
            </div>
          </DetailsSection>
        </div>
        <div className="space-y-6">
          <DetailsSection title="부서 직원">
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
          <DetailsSection title="활용 기술">
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
          </DetailsSection>
          <DetailsSection title="더보기">
            <div className="space-y-3">
              <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Edit Employee Details
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View Performance History
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Schedule Meeting
              </button>
            </div>
          </DetailsSection>
        </div>
      </div>
    </div>
  );
};
export default EmployeeDetail;
