import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [status,setStatus] = useState("reset")
  const [time,setTime]=useState(0)
  const [sec,setsec]=useState(0)
  const [min,setmin]=useState(0)
  const [hr,sethr]=useState(0)
  const [formatTime,setFormat]=useState({
    sec:0,
    min:0,
    hr:0
  })
useEffect(()=>{

  const good = setInterval(()=>{
         setTime((prev)=>(prev+1))
        },1)
  if(status=="start"){
        good();
        Format(time)
    }
    if(status=="stop"){
       Format(time)
    }
    if(status=="reset"){
        setTime(0);
        Format(time);
        good
    }
},[status])


const Format = useCallback((time)=>{
    let secs=parseInt(time/1000) ;
    let mins=parseInt(secs/60);
    let hrs=parseInt(mins/60);
    setsec(secs);
    setmin(mins);
    sethr(hrs);

},[time])
  return (
    <>
    <h1> Stopwatch</h1>
    <div>Time= {hr}:{min}:{sec}</div>
    <button onClick={()=>{
      setStatus("start")}}>Start</button>
    <button onClick={()=>{
      setStatus("stop")
    }}>Stop</button>
    <button onClick={()=>{
      setStatus("reset")
    }}>Reset</button>

      
    </>
  )
}

export default App
