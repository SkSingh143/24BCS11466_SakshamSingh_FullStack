import React from 'react'

function Todolist({
    content,todoid,
    setCount
}) {
    const onDelete=()=>{

    }
    return (
        <>
        <div id={todoid}><div>
            {content}
        </div>
        <button id={todoid} onClick={()=>(
            setCount((prev)=>(prev.filter((item)=>item.id!=todoid)))
        )}>Delete</button></div>
        
        </>
    )
}

export default Todolist
