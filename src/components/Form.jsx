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
            // if I wanted to add id   markedDelete: false, // markedDelete will be initialized in every todo as false  We need a unique id for each to item. This is a common javascript way to generate a random, unique number. id: Math.floor(Math.random() * 100000000).toString(),
        }
        setList([...list, taskObject])
        localStorage.setItem("todos", JSON.stringify([...list]));
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