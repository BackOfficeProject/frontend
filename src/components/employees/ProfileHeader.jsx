import React from "react";

const ProfileHeader = ({ name, position, department, avatar, employeeId }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <img
            className="h-24 w-24 rounded-full object-cover border-4 border-white shadow"
            src={avatar}
            alt={`${name}'s profile photo`}
          />
        </div>
        <div className="sm:ml-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <span className="mt-1 sm:mt-0 sm:ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {employeeId}
            </span>
          </div>
          <p className="text-lg text-gray-500">{position}</p>
          <p className="text-sm text-gray-500">{department}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => alert("개발 대기 중")}
              className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            >
              메세지
            </button>
            <button
              onClick={() => alert("개발 대기 중")}
              className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            >
              일정 보기
            </button>
            <button
              onClick={() => alert("개발 대기 중")}
              className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            >
              문서 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
