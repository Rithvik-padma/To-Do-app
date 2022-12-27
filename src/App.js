
import {useState} from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'

function App() {
  const [tasks, setTask] = useState([])
  const [showTask, addShowTask] = useState(false)

  const deleteTask =(id)=> setTask(tasks.filter((task,index)=> index!==id))
  const select = (id)=> setTask(tasks.map((task, index)=> index===id? {...task, reminder:!task.reminder}: task))
  const saveTask = (newTask) => setTask([...tasks, newTask])
  const addTask = ()=>  addShowTask(!showTask)

  return (
    <div className="container">
      <Header addShowTask={addTask} showTask={showTask}></Header>
      <AddTask saveTask={saveTask} showTask={showTask}></AddTask>
      {tasks.length>0 ? <Tasks tasks={tasks} deleteTask={deleteTask} select={select}></Tasks>: <h3 style={{fontFamily:"'Poppins'", fontWeight:'600'}}>No Tasks are left to show</h3> }     
    </div>
  );
}

export default App;
