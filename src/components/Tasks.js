import React from 'react'
import Task from './Task.js'

const Tasks = ({tasks, deleteTask, select}) => {
  return (
    <div>
      {tasks.map((task, index)=> <Task key={index} task={task} deleteTask ={()=>deleteTask(index)} select ={()=> select(index)}/>)}
    </div>
  )
}

export default Tasks
