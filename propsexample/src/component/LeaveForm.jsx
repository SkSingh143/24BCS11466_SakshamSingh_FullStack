import React from 'react'

function LeaveForm({data}) {
    return (
        <>
        {data.map((item)=>(
      <div>
        <ol>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.leave}</li>
        </ol>
      </div>
        ))}</>
    )
}

export default LeaveForm
