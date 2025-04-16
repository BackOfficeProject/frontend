import React from "react";
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} [props.action]
 */
export function Card({ title, children, action }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-700">{title}</h3>
        {action && action}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
