import { Button } from "./Button";

export default function TodoItem({ task = "Buy groceries", id = "todo-1" }) {
  return (
    /* Matches Form: max-w-md, mx-auto, p-6, bg-white */
    <div className="w-full mx-auto bg-gray-300 px-2 flex flex-col gap-4 rounded-xl shadow-xl/35 border border-gray-100 mt-4">
      
      {/* Keeping the Title inside as you had it, but smaller to match the compact feel */}
      <div className="flex justify-center">
        <h4 className="text-2xl font-semibold text-shadow-lg/30  text-gray-50">Todo List</h4>
      </div>

      {/* Row Layout */}
      <div className="flex md:flex-row flex-col items-center md:justify-between gap-4">
        
        {/* Task Content */}
        <div className="flex items-center grow">
          <input 
            id={id} 
            type="checkbox" 
            className="w-4 h-4 border-gray-500 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <label 
            htmlFor={id} 
            className="ms-3 select-none cursor-pointer"
          >
            {/* Reduced text size to 1xl/lg to feel less "huge" */}
            <span className="text-lg font-medium text-black text-shadow-lg/5  capitalize">
              {task}
            </span>
          </label>
        </div>

        

        {/* Action Buttons */}
        <div className="shrink-0">
          <Button 
            type="button" 
            text="Delete" 
            color="red" 
          />
        </div>
      </div>


      
    </div>
  );
}