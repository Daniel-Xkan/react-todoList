import React from 'react'
import Task from './Task'
const Tasks = ({tasks, onDelete, onSetReminder }) => {
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onSetReminder={onSetReminder}/>
            ))}
        </>
    )
}

export default Tasks