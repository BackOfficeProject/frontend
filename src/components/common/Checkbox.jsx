import React from "react";
import { CheckIcon } from "lucide-react";
export function Checkbox({ label, checked, onChange, icon }) {
  return (
    <label className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
      <div
        className={`w-5 h-5 rounded border mr-3 flex items-center justify-center transition-colors ${
          checked
            ? "bg-indigo-600 border-indigo-600"
            : "border-gray-300 bg-white"
        }`}
      >
        {checked && <CheckIcon size={14} className="text-white" />}
      </div>
      <div className="flex items-center">
        {icon && <span className="mr-2 text-gray-500">{icon}</span>}
        <span className="text-sm text-gray-700">{label}</span>
      </div>
    </label>
  );
}
