import { createContext, useState } from "react";


const student = {
  name: "Priya Nair",
  email: "priya@gmail.com",
  year: "3rd Year",
};
const initialTasks = [
  { id: 1, title: "Finish DBMS assignment", completed: false },
  { id: 2, title: "Revise React hooks", completed: false },
  { id: 3, title: "Submit lab report", completed: true },
];
const defaultValue = {
  student,
  initialTasks
}
export  const StudentContext = createContext(defaultValue);
 
const studentContextProvider =({children})=>{
    
  const [task,setTask]=useState([])
  const deleteTask =(id)=>{
    const newTasks = task.filter((item)=>item.id!=id)
    setTask(newTasks)
  }
  const addTask =(content)=>{
    let id =task.length
    id+=1
    const ans ={
      id:id,
      title:content,
      completed:false

    }
    setTask((prev)=>[...prev , ans])
  }
  return(<StudentContext.Provider value={{
    ...defaultValue,
    task,addTask,deleteTask,setTask
  }}>
    {children}
    </StudentContext.Provider>)
}
export default studentContextProvider