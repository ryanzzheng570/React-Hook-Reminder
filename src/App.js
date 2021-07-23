import React from 'react'
import './App.css';
import { useState, useEffect } from 'react' 
import Header from './component/Header';
import { Tasks } from './component/Tasks';
import AddTask from './component/AddTask';
import {fetchTasks} from "./util/dataFetch"
import { serverAddress } from './util/constants';
import Footer from './component/Footer';

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
  const onAddTask = async (task) => {
    const res = await fetch(`${serverAddress}/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    //Wait until promise is finished
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  //Handler to delete a task
  const deleteTask = async (id) => {
    await fetch(`${serverAddress}/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Handler to toggle the checkbox
  const toggleImportance = async (id) => {
    const taskToToggle = await fetch(id);
    const updTask = {...taskToToggle, important: !taskToToggle.important}

    const res = await fetch(`${serverAddress}/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? {...task, important: !data.important} : task));
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
