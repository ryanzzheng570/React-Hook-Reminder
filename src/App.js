import React from 'react'
import './App.css';
import { useState, useEffect } from 'react' 
import Header from './component/Header';
import { Tasks } from './component/Tasks';
import AddTask from './component/AddTask';
import {fetchTasks} from "./util/dataFetch"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
  ])

  //fetch Data from the backend server
  useEffect(()=> {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);


 //handler to add a new task
  const onAddTask = (task) => {
    //get random id (assuming same number will not be used twice)
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Handler to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Handler to toggle the checkbox
  const toggleImportance = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, important: !task.important} : task));
  }

    return (
      <div className='container'>
        <Header onAddTask={()=>setShowAddTask(!showAddTask)}/>
        {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleImportance}/>:
        'No Tasks'}

        {showAddTask && <AddTask onAddTask={onAddTask}/>}
      </div>
    );
}


export default App;
