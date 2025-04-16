import React from "react";
import { Card } from "../common/Card";
import { MoreHorizontalIcon, SearchIcon } from "lucide-react";
export function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "김민준",
      position: "수석 개발자",
      department: "개발팀",
      status: "재직",
    },
    {
      id: 2,
      name: "이서연",
      position: "UX 디자이너",
      department: "디자인팀",
      status: "재직",
    },
    {
      id: 3,
      name: "박지현",
      position: "인사 담당자",
      department: "인사팀",
      status: "휴가",
    },
    {
      id: 4,
      name: "정도윤",
      position: "마케팅 매니저",
      department: "마케팅팀",
      status: "재직",
    },
    {
      id: 5,
      name: "최수현",
      position: "재무 분석가",
      department: "재무팀",
      status: "재직",
    },
  ];
  return (
    <Card
      title="임직원 목록"
      action={
        <button className="text-sm text-indigo-600 hover:text-indigo-800">
          전체보기
        </button>
      }
    >
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="임직원 검색..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                임직원
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                직책
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                부서
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                관리
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      {employee.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        {employee.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.position}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {employee.department}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      employee.status === "재직"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreHorizontalIcon size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
