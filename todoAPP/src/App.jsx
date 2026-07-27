import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todolist from './component/Todolist'
function App() {
  const [count, setCount] = useState([])
  const [todo,setTodo] =useState("")
  const [todoCount,setTodoCount]=useState(0)
  const handleSubmit = ()=>{
     const todoObj={
      id:todoCount,
      content:todo
     }
     setTodoCount((prev)=>(prev+1))
     setCount((prev)=>[...prev,todoObj])
  }
  console.log(todo);
  
  return (
    
      <>
      <h1>Todo App</h1>
      
       <label htmlFor="">Enter Your task :- <input type="text" onChange={(e)=>(setTodo(e.target.value))}/></label>
       <br />
       <button onClick={handleSubmit}>Submit</button>
       <div>
        <h3>Your Recent Task</h3>
        {count && count.map((item)=>(
          <Todolist content={item.content} todoid={item.id} setCount={setCount}/>
        ))}
       </div>
      </>
  )
}

export default App
