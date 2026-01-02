import { useState } from "react";
import { Button } from "./Button"; 

export default function TodoForm({ onAddTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // Don't add empty tasks
    
    onAddTodo(task); // Pass the data to the parent
    setTask(""); // Clear input
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-100 p-6 rounded-xl  shadow-md border border-gray-100 mx-auto mt-8"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative grow">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full  pl-4 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-gray-700"
          />
          {/* Optional Icon inside input */}
          <span className="absolute right-3 top-3.5 text-gray-400">
            📝
          </span>
        </div>

        <Button 
        type="submit"
          text="Add Task" 
          color="green" 
        />
      </div>
      
      <p className="mt-2 text-xs text-gray-400">
        Tip: Press Enter to quickly add a task.
      </p>
    </form>
  );
}