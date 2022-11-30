
export default function Todo({ todoitem, todoList, setTodoList }) {

  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoitem.id))
  }


  return (
    <div>
      <div class="flex mx-auto max-w-screen-xl text-center">
        <h3 className="bg-blue-100 w-[80%] py-4 mx-5 px-4 mt-8 rounded-lg">{todoitem.name}</h3>


        <div>
          <button
            className="bg-red-400 rounded-lg mt-12 px-4 py-2"
            onClick={deleteTodo}>
            Delete
          </button>
        </div>

      </div>







    </div>
  )
}
