import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

//Add Task Form
const AddTask = ({ onAddTask, toggleShowAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [date, setDate] = useState('');
    const [important, setimportant] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!taskName) {
            alert('Please add a task name');
            return;
        }

        if (!date) {
            alert('Please add a task date');
            return;
        }

        onAddTask({ name: taskName, date, important });
        setTaskName('');
        setDate('');
        setimportant(false);
        toggleShowAddTask();
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div>
                <h2>Add New Task</h2>
                {/* <FaTimes className='delete' onClick={toggleShowAddTask}/> */}
            </div>

            <div className='form-control'>
                <label>Task</label>
                <input
                    type="text"
                    placeholder='Add Task'
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input
                    type="text"
                    placeholder='Add Date and Time'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Important</label>
                <input
                    type="checkbox"
                    checked={important}
                    // value={important} 
                    onChange={(e) => setimportant(e.currentTarget.checked)}
                />
            </div>

            <input className='btn btn-block' type="submit" value='Save New Task' />
        </form>
    )
}

export default AddTask
