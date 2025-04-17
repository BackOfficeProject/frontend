import React from "react";
import { XIcon } from "lucide-react";
export function FilterBadge({ label, onRemove }) {
  return (
    <span className="inline-flex items-center bg-indigo-50 text-indigo-700 text-sm rounded-md px-2 py-1">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="ml-1 hover:text-indigo-900"
        aria-label="Remove filter"
      >
        <XIcon size={14} />
      </button>
    </span>
  );
}
