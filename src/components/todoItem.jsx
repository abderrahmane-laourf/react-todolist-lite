import React from "react";

export default function TodoItem({ text, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-md shadow-sm">
      <span>{text}</span>
      
    </li>
  );
}
