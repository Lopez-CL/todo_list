import React, {useState} from 'react'
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <div>
      <h1>Your ToDos</h1>
        <Form list={list} setList={setList}/>
        <List list={list} setList={setList} />
      </div>
    </div>
  );
};

export default App;
