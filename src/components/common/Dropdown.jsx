import React, { useRef, useState, useEffect } from "react";
import { ChevronDownIcon } from "lucide-react";

export function Dropdown({ label, children, badge }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg flex items-center justify-between bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <div className="flex items-center">
          <span className="text-sm text-gray-700">{label}</span>
          {badge && (
            <span className="ml-2 bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <ChevronDownIcon
          size={16}
          className={`text-gray-400 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
}
