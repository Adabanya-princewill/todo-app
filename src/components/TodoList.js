import Todo from "./Todo";

export default function TodoList({todoList, setTodoList}){
  return(
    <div>
      {todoList.map((todoitem) => (
      <Todo key={todoitem.id} todoitem={todoitem} todoList={todoList} setTodoList={setTodoList}
      >

      </Todo>))}     
    </div>
  )
}