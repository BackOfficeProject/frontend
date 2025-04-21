import React from "react";
import {
  SearchIcon,
  FilterIcon,
  XIcon,
  UsersIcon,
  MonitorIcon,
  UserIcon,
  BriefcaseIcon,
  LineChartIcon,
  CalendarIcon,
} from "lucide-react";
import { Checkbox } from "../../components/common/Checkbox";
import { Dropdown } from "../../components/common/Dropdown";
import { FilterBadge } from "../../components/common/FilterBadge";

export function EmployeeFilters({ filters, onFilterChange }) {
  const departments = [
    { id: "개발팀", label: "개발팀", icon: <MonitorIcon size={18} /> },
    { id: "디자인팀", label: "디자인팀", icon: <BriefcaseIcon size={18} /> },
    { id: "인사팀", label: "인사팀", icon: <UsersIcon size={18} /> },
    { id: "마케팅팀", label: "마케팅팀", icon: <LineChartIcon size={18} /> },
    { id: "재무팀", label: "재무팀", icon: <UserIcon size={18} /> },
  ];
  const statuses = ["재직", "휴가", "휴직"];

  const handleSearch = (e) => {
    onFilterChange({ search: e.target.value });
  };

  const handleDepartmentChange = (deptId) => {
    const newDepartments = filters.department.includes(deptId)
      ? filters.department.filter((d) => d !== deptId)
      : [...filters.department, deptId];
    onFilterChange({ department: newDepartments });
  };

  const handleDateChange = (field, value) => {
    onFilterChange({
      joinDateRange: { ...filters.joinDateRange, [field]: value },
    });
  };

  const clearFilters = () => {
    onFilterChange({
      search: "",
      department: [],
      position: [],
      status: [],
      joinDateRange: { from: null, to: null },
    });
  };

  const removeFilter = (type, value) => {
    if (type === "department") {
      onFilterChange({
        department: filters.department.filter((d) => d !== value),
      });
    } else if (type === "status") {
      onFilterChange({
        status: filters.status.filter((s) => s !== value),
      });
    } else if (type === "date") {
      onFilterChange({
        joinDateRange: { ...filters.joinDateRange, [value]: null },
      });
    }
  };

  const hasActiveFilters =
    filters.department.length > 0 ||
    filters.status.length > 0 ||
    filters.joinDateRange.from ||
    filters.joinDateRange.to;

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-700 flex items-center">
          <FilterIcon size={20} className="mr-2" />
          필터
        </h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
          >
            <XIcon size={16} className="mr-1" />
            필터 초기화
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3 relative">
          <input
            type="text"
            placeholder="이름 또는 이메일로 검색"
            value={filters.search}
            onChange={handleSearch}
            className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
        <div className="lg:col-span-3">
          <Dropdown label="부서" badge={filters.department.length || null}>
            {departments.map((dept) => (
              <div key={dept.id} className="px-1 h-11">
                <Checkbox
                  label={dept.label}
                  icon={dept.icon}
                  checked={filters.department.includes(dept.id)}
                  onChange={() => handleDepartmentChange(dept.id)}
                />
              </div>
            ))}
          </Dropdown>
        </div>
        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              value={filters.joinDateRange.from || ""}
              onChange={(e) => handleDateChange("from", e.target.value)}
              className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="입사일"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              value={filters.joinDateRange.to || ""}
              onChange={(e) => handleDateChange("to", e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="퇴사일"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => {
                  const newStatuses = filters.status.includes(status)
                    ? filters.status.filter((s) => s !== status)
                    : [...filters.status, status];
                  onFilterChange({ status: newStatuses });
                }}
                className={`h-11 px-4 rounded-lg text-sm font-medium transition-colors flex items-center ${
                  filters.status.includes(status)
                    ? "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.department.map((dept) => (
            <FilterBadge
              key={dept}
              label={dept}
              onRemove={() => removeFilter("department", dept)}
            />
          ))}
          {filters.status.map((status) => (
            <FilterBadge
              key={status}
              label={status}
              onRemove={() => removeFilter("status", status)}
            />
          ))}
          {filters.joinDateRange.from && (
            <FilterBadge
              label={`입사일: ${filters.joinDateRange.from}`}
              onRemove={() => removeFilter("date", "from")}
            />
          )}
          {filters.joinDateRange.to && (
            <FilterBadge
              label={`퇴사일: ${filters.joinDateRange.to}`}
              onRemove={() => removeFilter("date", "to")}
            />
          )}
        </div>
      )}
    </div>
  );
}
