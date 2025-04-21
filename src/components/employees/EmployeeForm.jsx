import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { FormField } from "../common/FormField";
import { Dropdown } from "../common/Dropdown";

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
  "프론트엔드 개발자",
  "백엔드 개발자",
  "UX 디자이너",
  "HR 매니저",
  "데이터 분석가",
  "QA 엔지니어",
  "마케팅 매니저",
  "재무 담당자",
  "CS 매니저",
];

export function EmployeeForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    department: "",
    position: "",
    phone: "",
    status: "재직",
    joinDate: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    department: false,
    position: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullEmail = `${formData.emailId}@company.com`;
    onSubmit && onSubmit({ ...formData, email: fullEmail });
    onClose();
  };

  const handleDropdownSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsDropdownOpen((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <XIcon size={20} />
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          임직원 추가
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="이름"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="홍길동"
          />

          {/* 이메일 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <input
                type="text"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder="user"
                className="flex-1 focus:outline-none"
              />
              <span className="ml-2 text-gray-500">@company.com</span>
            </div>
          </div>

          {/* 전화번호 */}
          <FormField
            label="전화번호"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="01012345678"
          />

          {/* 부서 선택 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              부서
            </label>
            <Dropdown
              label={formData.department || "부서를 선택하세요"}
              onSelect={(value) => handleDropdownSelect("department", value)}
            >
              {departments.map((dept) => (
                <button
                  type="button"
                  key={dept}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {dept}
                </button>
              ))}
            </Dropdown>
          </div>

          {/* 직책 선택 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              직책
            </label>
            <Dropdown
              label={formData.position || "직책을 선택하세요"}
              onSelect={(value) => handleDropdownSelect("position", value)}
            >
              {positions.map((pos) => (
                <button
                  type="button"
                  key={pos}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {pos}
                </button>
              ))}
            </Dropdown>
          </div>

          <FormField
            label="입사일"
            name="joinDate"
            type="date"
            value={formData.joinDate}
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
