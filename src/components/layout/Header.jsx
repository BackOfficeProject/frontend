import React from "react";
import { BellIcon, MenuIcon, UserIcon, SearchIcon } from "lucide-react";

export function Header() {
  const reminder = () => {
    alert("개발 대기 중");
  };

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center md:hidden">
        <button className="text-gray-600 hover:text-gray-900">
          <MenuIcon size={24} />
        </button>
      </div>
      <div className="relative w-64 hidden md:block">
        <input
          type="text"
          placeholder="검색..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => reminder()}
          className="relative text-gray-600 hover:text-gray-900"
        >
          <BellIcon size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
            <UserIcon size={18} />
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
            관리자
          </span>
        </div>
      </div>
    </header>
  );
}
