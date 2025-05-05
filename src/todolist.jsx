import { useState } from "react";
import React from "react";
import Todoinput from "./components/todoinput"
import TodoList from "./components/todolist";

export default function Todolist(){
    const [Todo,setTodolist] = useState("");
    const [listTodo, setlistTodo] = useState([]);

    const handlechange = (e) => {
        setTodolist(e.target.value);
    }

    const Addtodo = () => {
        if(Todo.trim() !== ""){
            setlistTodo([...listTodo,Todo])
            setTodolist("")
        }
    }
    const clear = () => {
    setlistTodo([]);
    setTodolist("");
}


return(
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Liste des tâches</h1>

    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <TodoList todoList={listTodo}  />
      <Todoinput todo={Todo} onChange={handlechange} onAdd={Addtodo} onClear={clear} />
    </div>
  </div>
    
)
}