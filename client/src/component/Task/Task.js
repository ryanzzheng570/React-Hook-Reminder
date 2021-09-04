import React from 'react';
import { FaTimes } from 'react-icons/fa';

//Task Component
export const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.important ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>
                {task.name}
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=>onDelete(task.id)}/>
            </h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task;