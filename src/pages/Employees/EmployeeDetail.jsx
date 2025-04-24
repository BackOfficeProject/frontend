import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // 실제 API 호출이 들어가야 하는 부분 (예시는 더미 데이터로 대체)
    const fetchEmployee = async () => {
      const res = await fetch(`/api/employees/${id}`);
      const data = await res.json();
      setEmployee(data);
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div className="p-4 text-gray-600">직원 정보를 불러오는 중...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{employee.name} 님 정보</h2>
      <div className="space-y-2">
        <div>
          <strong>이메일:</strong> {employee.email}
        </div>
        <div>
          <strong>전화번호:</strong> {employee.phone}
        </div>
        <div>
          <strong>부서:</strong> {employee.department}
        </div>
        <div>
          <strong>직책:</strong> {employee.position}
        </div>
        <div>
          <strong>입사일:</strong>{" "}
          {new Date(employee.joinDate).toLocaleDateString()}
        </div>
        <div>
          <strong>상태:</strong> {employee.status}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
