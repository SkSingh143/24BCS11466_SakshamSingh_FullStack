import React, { useContext } from 'react'
import { StudentContext } from '../Context/StudentContext'
function TaskList({tasks}) {
   const {deleteTask,setTask,task}= useContext(StudentContext)
   
    return (
        <>
        <div >
            <pre><input type="checkbox" checked={tasks?.completed} onChange={(e)=>{
                setTask(task.map((item)=>{
                  if(item.id == tasks.id){
                    return {...item ,completed:e.target.checked}
                  }else{
                    return item
                  }
                }))
            }} /> {tasks?.title}  <button onClick={()=>{
                deleteTask(tasks.id)
            }}>Delete</button></pre>
            

        </div>
        </>
    )
}

export default TaskList
