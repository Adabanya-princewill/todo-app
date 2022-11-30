import shortId from 'shortid';
import Todo from './Todo';

export default function Form({ todo, setTodo, todoList, setTodoList }) {

  const handleChange = (event) => {
    setTodo(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(todo.length == 0){
      alert('Pls Enter a task')
    } else {
      setTodoList([...todoList, {name:todo, id:shortId.generate()}])
       setTodo('')
    }
    
    console.log(todoList)
  }

  return (
    <div className='mt-6 text-center max-w-screen-xl'>
      <form onSubmit={handleSubmit}>

        <input
         className='border p-3 rounded-lg w-[80%] focus:outline-none focus:ring focus:ring-blue-500'
          value={todo}
          onChange={handleChange}
          placeholder='Add Todo Item...' />

        <button
        className='text-white bg-blue-500 rounded-lg py-3 px-6 ml-3 hover:bg-blue-700'
          type='submit'
          >
          Add
        </button>
      </form>
    </div>
  )
}
