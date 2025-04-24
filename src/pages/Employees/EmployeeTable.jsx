import React, { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export function EmployeeTable({ filters, employees }) {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };
  const filteredEmployees = employees
    .filter((employee) => {
      // Apply filters
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        if (
          !employee.name.toLowerCase().includes(searchLower) &&
          !employee.email.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }
      if (filters.department.length > 0) {
        if (!filters.department.includes(employee.department)) {
          return false;
        }
      }
      if (filters.status.length > 0) {
        if (!filters.status.includes(employee.status)) {
          return false;
        }
      }
      if (filters.joinDateRange.from) {
        if (
          new Date(employee.joinDate) < new Date(filters.joinDateRange.from)
        ) {
          return false;
        }
      }
      if (filters.joinDateRange.to) {
        if (new Date(employee.joinDate) > new Date(filters.joinDateRange.to)) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return null;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUpIcon size={16} />
    ) : (
      <ChevronDownIcon size={16} />
    );
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("name")}
            >
              <div className="flex items-center space-x-1">
                <span>임직원</span>
                <SortIcon columnKey="name" />
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              연락처
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("department")}
            >
              <div className="flex items-center space-x-1">
                <span>부서</span>
                <SortIcon columnKey="department" />
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("position")}
            >
              <div className="flex items-center space-x-1">
                <span>직책</span>
                <SortIcon columnKey="position" />
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("joinDate")}
            >
              <div className="flex items-center space-x-1">
                <span>입사일</span>
                <SortIcon columnKey="joinDate" />
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("status")}
            >
              <div className="flex items-center space-x-1">
                <span>상태</span>
                <SortIcon columnKey="status" />
              </div>
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              관리
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredEmployees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    {employee.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      <Link to={`/employees/${employee.id}`}>
                        {employee.name}
                      </Link>
                    </div>
                    <div className="text-sm text-gray-500">
                      {employee.email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.position}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(employee.joinDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    employee.status === "재직"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {employee.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => alert(employee.name)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <MoreHorizontalIcon size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
