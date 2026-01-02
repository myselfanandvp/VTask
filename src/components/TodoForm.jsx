import { useState } from "react";
import { Button } from "./Button";
import {TodoItem} from "./TodoItem";
import {SearchBar} from "./Searchbar";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const [task_list, setTask_list] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    setTask_list(prev => [...prev, task]);
    setTask("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-6 rounded-xl shadow-xl/35 border border-gray-100 mx-auto mt-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full pl-4 pr-10 py-3 border-2 border-gray-100 rounded-lg"
          />
          <Button type="submit" text="AddTask" color="green" />
        </div>
      </form>

      <div className="mt-4">
        <div className="flex justify-center pb-2 flex-col items-center gap-4">
          <h2 className="text-5xl font-bold text-gray-100 text-shadow-lg/30 ">Todo List</h2>
          <SearchBar />
        </div>

<div className="max-h-64 mt-5 overflow-y-auto space-y-4 bg-gray-300 p-2">
 {task_list.map((t, index) => (
          
          <TodoItem
            key={index}
            id={`todo-${index}`}
            task={t}
            onDelete={() => {
              setTask_list(prev =>
                prev.filter((_,i) => i !== index)
              );
            }}
          />
        ))}
  </div>
       
      </div>
    </>
  );
}
