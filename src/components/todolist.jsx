import React from "react";
import TodoItem from "./todoItem";

export default function TodoList({ todoList }) {
  return (
    <ul className="space-y-2 mb-4">
      {todoList.map((item, index) => (
        <TodoItem key={index} text={item} />
      ))}
    </ul>
  );
}
