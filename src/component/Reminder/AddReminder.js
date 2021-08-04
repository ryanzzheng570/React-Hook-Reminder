import React from 'react'
import { useState, useEffect } from 'react' 
import ReminderHeader from './ReminderHeader';
import { Tasks } from '../Task/Tasks';
import { fetchTasks } from "../../util/dataFetch"
import { serverAddress, HTTP_HEADER } from '../../util/constants';
import Footer from '../Footer';
import AddTask from '../Task/AddTask';

// Add reminder functionality
const AddReminder = () => {
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
  
    const toggleShowAddTask = () => {
        return setShowAddTask(!showAddTask);
    }
  
   //handler to add a new task
    const onAddTask = async (task) => {
      const res = await fetch(`${serverAddress}/tasks`, {
        method: 'POST',
        headers: HTTP_HEADER,
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
      const taskToToggle = await fetch(`${serverAddress}/tasks/${id}`);
      const task = await taskToToggle.json();
  
      const updTask = {...task, important: !task.important}
    
      const res = await fetch(`${serverAddress}/tasks/${id}`,{
        method: 'PUT',
        headers: HTTP_HEADER,
        body: JSON.stringify(updTask)
      })
  
      const data = await res.json();
  
      setTasks(tasks.map((task) => task.id === id ? {...task, important: data.important} : task));
    }
    return (
        <div className='container'>
        <ReminderHeader onAddTask={toggleShowAddTask}/>
           {tasks.length > 0 ? 
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleImportance}/> :
           'No Tasks'}
           {showAddTask && 
           <div className='overlay'>
              <div className='popup'>
                <AddTask onAddTask={onAddTask} toggleShowAddTask={toggleShowAddTask}/>
              </div>
            </div>
           }       
        <Footer/>
      </div>
    )
}

export default AddReminder
