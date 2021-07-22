import {useState} from 'react';

const AddTask = ({onAddTask}) => {
    const [taskName, setTaskName] = useState('');
    const [date, setDate] = useState('');
    const [important, setimportant] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!taskName) {
            alert('Please add a task name');
            return;
        }

        if(!date) {
            alert('Please add a task date');
            return;
        }

        onAddTask({name:taskName, date, important});
        setTaskName('');
        setDate('');
        setimportant(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
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
            
            <input className='btn btn-block' type="submit" value='Save New Task'/>
        </form>
    )
}

export default AddTask
