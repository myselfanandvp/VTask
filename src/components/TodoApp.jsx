import TodoForm from "./TodoForm"
import TodoItem from "./TodoList"

const TodoApp = ()=>{
    return (
        <div className="flex flex-col gap-3 w-full">
           <TodoForm/>
           <TodoItem/>
        </div>
    )
}

export default TodoApp