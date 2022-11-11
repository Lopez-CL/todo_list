import React from 'react'
import {useState} from 'react';

const Form = (props) => {
    const [task, setTask] = useState('');
    const {list, setList} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button was pressed');
        console.log(`adding ${task} to the list`);
        let taskObject = {
            content: task,
            status: false
        }
        setList([...list, taskObject]);
        setTask('')
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='task' >Set a task</label>
                <input id='task' type='text' onChange={(e)=>setTask(e.target.value)} value={task}/>
                <input type='submit' value='Add your Task!'/>
            </form>
        </div>
    );
};

export default Form;