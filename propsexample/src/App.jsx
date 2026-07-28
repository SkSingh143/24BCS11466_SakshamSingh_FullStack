import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './component/Welcome'
import Dashboard from './component/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const [employee,setEmployee]=useState([
    {
      id:1,
    name:"Saksham",
    leave:12
    },{
      id:1,
    name:"Arpit",
    leave:12
    },{
      id:1,
    name:"Dost",
    leave:12
    }
  ])
  const studentData=["good","bad"]
  return (
    <>

      <Dashboard data={employee}/>
    </>
  )
}

export default App
