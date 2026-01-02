import { Button } from "./Button";


export default function TodoItem({ task, id, onDelete }) {
  return (
    <div className="w-full bg-gray-300 px-2 flex flex-col gap-4 rounded-xl shadow-xl/35 border border-gray-100 mt-4">
      
      <div className="flex md:flex-row flex-col items-center md:py-2 py-4 md:justify-between gap-1">
        
        <div className="flex items-center grow">
          <input 
            id={id}
            type="checkbox"
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor={id} className="ms-3 cursor-pointer">
            <span className="text-lg font-medium capitalize">
              {task}
            </span>
          </label>
        </div>

        <Button
          type="button"
          text="Delete"
          color="red"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
