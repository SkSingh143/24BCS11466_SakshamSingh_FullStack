import React from 'react'
import Employee from './Employee'
function Dashboard({
    data
}) {
    return (
        <>
        <Employee data={data}/>
        <div>Welcome{data}</div>
        </>
    )
}

export default Dashboard
