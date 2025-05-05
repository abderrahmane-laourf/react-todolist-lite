import React from "react";

export default function TodoInput({ todo, onChange, onAdd, onClear }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <input
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="Write your task here"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-2">
        <button
          onClick={onAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          ➕ Add
        </button>

        <button
          onClick={onClear}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          🗑️ Clear All
        </button>
      </div>
    </div>
  );
}
