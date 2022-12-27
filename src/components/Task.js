import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, deleteTask, select}) => {
  return (
    <div className={`list ${task.reminder ? 'select':''}`} onDoubleClick={select}>
        <h3 className='headTask'>{task.text} <FaTimes onClick={deleteTask} style={{color:'red', cursor:'pointer',margin:'0 5px'}}/></h3>
        <p>{task.day}</p>
    </div>
    
  )
}

export default Task
