import React from 'react'

const ToggleTodoButtons = () => {
    return (
        <div>
            <button onClick={()=> setFilter("ALL") }>
                All
            </button>
            <button onClick={()=> setFilter("ACTIVE")}>
                Active
            </button>
            <button onClick={()=> setFilter("COMPLETED")}>
                Completed
            </button>
        </div>
    )
}

export default ToggleTodoButtons
