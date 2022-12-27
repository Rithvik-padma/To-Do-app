import React from 'react'
import {useState} from 'react'

const AddTask = ({saveTask, showTask}) => {
    const [text,changeTaskName] = useState("")
    const [day,changeTaskDate] = useState("")
    const [reminder,changeTaskSave] = useState(false)

  return (
    <div >
      <form className={showTask ? "addTask":""} onSubmit={(e)=>{e.preventDefault()
        if(!text){
          alert("The task is empty");
          return;
        }
        saveTask({text, day, reminder})
        changeTaskName("")
        changeTaskDate("")
        changeTaskSave(false)}}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder='Add Task' value={text} onChange={(e)=> changeTaskName(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label>Date & Time</label>
            <input type="text" placeholder='Add Timing' value={day} onChange={(e)=> changeTaskDate(e.target.value)}></input>
        </div>
        <div className="form-control add-reminder">
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} onChange={(e)=> changeTaskSave(e.currentTarget.checked)}></input>
        </div>
        <div className="form-control">
            <input type="submit" className='btn' value='Add Task'/>
        </div>
      </form>
    </div>
  )
}

export default AddTask
