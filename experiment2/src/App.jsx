import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useContext } from 'react'
import {StudentContext} from './Context/StudentContext.jsx'
import useUser from './hooks/useUser.js'
import TaskList from './component/TaskList.jsx'
import useTaskStats from './hooks/useTaskStats.js'
function App() {
  
 
 const {task,setTask,addTask,initialTasks}= useContext(StudentContext);
 const [content,setContent] = useState("")
 const {student} = useUser();
  useEffect(()=>{
  console.log(initialTasks);
   setTask(initialTasks)
  },[])
   
 const {total,remaning,completed}=useTaskStats(task)

  return (
    <>
      <div>
        STUDYHUB
      </div>
      <div>
        Welcome {student.name}  {student.year} 
      </div>
      <h6>
        Student Details
      </h6>
      <div>
        Name:{student.name} <br />
        Email:{student.email} <br />
        Year:{student.year} <br />
      </div>
      <div> 
        My Task :- {remaning}/{total}
      </div>
      <div>
        <label >New Task : <input value={content} onChange={(e)=>setContent(e.target.value)}/></label>
        <button onClick={()=>{
          addTask(content)
        }}>Add Task</button>
      </div>
       <div>
        {task && task.map((item)=>(
          <div key={item.id}>
               <TaskList tasks={item} />
          </div>
        ))}
       </div>

    </>
  )
}

export default App
