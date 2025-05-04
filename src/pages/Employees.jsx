import React, { useState } from "react";
import { PlusIcon, DownloadIcon } from "lucide-react";
import { EmployeeFilters } from "./employees/EmployeeFilters";
import { EmployeeTable } from "./employees/EmployeeTable";
import { EmployeeForm } from "../components/employees/EmployeeForm";
function Employees() {
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    department: [],
    position: [],
    status: [],
    joinDateRange: {
      from: null,
      to: null,
    },
  });
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "김민준",
      position: "수석 개발자",
      department: "개발팀",
      status: "휴가",
      email: "minjun.kim@company.com",
      joinDate: "2022-03-15",
      phone: "010-1234-5678",
    },
    {
      id: 2,
      name: "이서윤",
      position: "UX 디자이너",
      department: "디자인팀",
      status: "휴가",
      email: "seoyoon.lee@company.com",
      joinDate: "2021-06-10",
      phone: "010-2345-6789",
    },
    {
      id: 3,
      name: "박지훈",
      position: "프론트엔드 개발자",
      department: "개발팀",
      status: "재직",
      email: "jihoon.park@company.com",
      joinDate: "2023-01-20",
      phone: "010-3456-7890",
    },
    {
      id: 4,
      name: "최유진",
      position: "HR 매니저",
      department: "인사팀",
      status: "재직",
      email: "yujin.choi@company.com",
      joinDate: "2020-09-01",
      phone: "010-4567-8901",
    },
    {
      id: 5,
      name: "정하늘",
      position: "백엔드 개발자",
      department: "개발팀",
      status: "휴직",
      email: "haneul.jung@company.com",
      joinDate: "2022-11-18",
      phone: "010-5678-9012",
    },
    {
      id: 6,
      name: "김도윤",
      position: "데이터 분석가",
      department: "기획팀",
      status: "재직",
      email: "doyoon.kim@company.com",
      joinDate: "2019-07-05",
      phone: "010-6789-0123",
    },
    {
      id: 7,
      name: "서하람",
      position: "마케팅 매니저",
      department: "마케팅팀",
      status: "휴직",
      email: "haram.seo@company.com",
      joinDate: "2021-04-22",
      phone: "010-7890-1234",
    },
    {
      id: 8,
      name: "장지우",
      position: "QA 엔지니어",
      department: "품질관리팀",
      status: "재직",
      email: "jiwoo.jang@company.com",
      joinDate: "2022-02-14",
      phone: "010-8901-2345",
    },
    {
      id: 9,
      name: "한수빈",
      position: "재무 담당자",
      department: "재무팀",
      status: "재직",
      email: "soobin.han@company.com",
      joinDate: "2020-12-01",
      phone: "010-9012-3456",
    },
    {
      id: 10,
      name: "오예린",
      position: "CS 매니저",
      department: "고객지원팀",
      status: "재직",
      email: "yerin.oh@company.com",
      joinDate: "2023-05-09",
      phone: "010-0123-4567",
    },
  ]);
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };
  const handleAddEmployee = (newEmployee) => {
    const newId = employees.length ? employees[employees.length - 1].id + 1 : 1;
    setEmployees((prev) => [
      ...prev,
      { ...newEmployee, id: newId, status: "재직" },
    ]);
  };
  const employeeExport = () => {
    alert("개발 대기 중");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">임직원 관리</h1>
        <div className="space-x-4 flex">
          <button
            onClick={() => employeeExport(true)}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center"
          >
            <DownloadIcon size={20} className="mr-2" />
            내보내기
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center"
          >
            <PlusIcon size={20} className="mr-2" />
            임직원 추가
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <EmployeeFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <EmployeeTable filters={filters} employees={employees} />
      </div>
      {showForm && (
        <EmployeeForm
          onClose={() => setShowForm(false)}
          onSubmit={handleAddEmployee}
        />
      )}
    </div>
  );
}

export default Employees;
