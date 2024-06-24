import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  //Above todo should go inside todos array 

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  //prevTodo = Individual todo from the todos

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

 //filter isliye use kr rhe hai ki jo purane array me se bss ek hi value ko hatana hai jiski id deleted id se match ho jaegi

 const toggleCompleted = (id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
 }

 //...prevTodo isliye likha hai taki pehle to saari values le lo fir usme se completed vali value ko overright kr do


 useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length > 0){
    setTodos(todos)
  }
 }, [])

 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
 }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleCompleted}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'> 
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
