import React from 'react';
import {useState} from 'react';

const List = (props) => {
    const {list, setList} = props;
    // const [taskItem, setTaskItem] = useState('');
    const handleChecked = (todo) =>{
        let updateStatus = list.map((todoItem) =>{
            if(todoItem === todo){
                let updatedItem = {...todoItem}
                updatedItem.status = !todoItem.status
                console.log(updatedItem);
                return updatedItem
            }
            else{
                return todoItem;
            }
        });
        setList(updateStatus);
        localStorage.setItem("todos", JSON.stringify(updateStatus));
    };
    const style = (status) =>{
        if(status === true){
            return "complete";
        }else{
            return "not-complete";
        }
    }
    // delete function
    const handleDelete = (idx) =>{
        const filterTodos = list.filter((todo, index)=>{
            return idx !== index;
        })
        setList(filterTodos);
        localStorage.setItem("todos", JSON.stringify(filterTodos));
    };
    // const handleUpdate

    return (
        <div>
            {list.map((todo,index) =>(
                <div key={index}>
                    <label className={style(todo.status)} htmlFor='task'>{todo.content}</label>
                    <input id='task' type='checkbox' onChange= {(e)=> handleChecked(todo)} />
                    <div>
                        <button onClick={(e) => handleDelete(index)} className='btn btn-danger'>Remove Task</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
