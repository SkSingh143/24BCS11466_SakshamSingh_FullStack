import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './component/Welcome'
function App() {
  const [count, setCount] = useState(0)
  const [student,setStudent]=useState([
    {
      id:1,
    name:"employee1",
    leave:12
    },{
      id:1,
    name:"employee1",
    leave:12
    },{
      id:1,
    name:"employee1",
    leave:12
    }
  ])
  const studentData=["good","bad"]
  return (
    <>
      {student.map((item)=>(
        <Welcome name={item}/>
      ))}
      {studentData.map((item)=>{
       return (<div><Welcome name={item}/></div>)
      })}
    </>
  )
}

export default App
