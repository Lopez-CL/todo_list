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
        // todo.status = !todo.status;
        // setList([...list]);
    };
    const style = (status) =>{
        if(status === true){
            return "complete";
        }else{
            return "not-complete";
        }
    }
    // const handleUpdate
    // const handleDelete
    return (
        <div>
            {list.map((todo,index) =>(
                <div className={style(todo.status)} key={index}>
                <p>{todo.content}</p>
                <input type='checkbox' onChange= {(e)=> handleChecked(todo)} />
                </div>
            ))}
        </div>
    );
};

export default List;