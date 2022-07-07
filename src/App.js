import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddPlan from './components/AddPlan'

function App() {
  const[showAddPlan, setShowAddPlan] = useState(true)
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn react on YouTube',
        day: 'June 25th at 1:00pm',
        reminder: true,
    }
  ])
  // add plan
  const addPlan = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  // delete plan
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !==id))
  }

  const setReminder = (id) => {
    setTasks(tasks.map((task) => task.id=== id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header onAdd={ ()=>setShowAddPlan(!showAddPlan)} showAdd={showAddPlan} />
      {showAddPlan === true ? <AddPlan onAdd={addPlan} /> : <> </>}
      {tasks.length >0 ?<Tasks tasks={tasks} onDelete={deleteTask} 
      onSetReminder={setReminder}/> : 'No plans available'}
    </div>
  );
}

export default App;
