import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [list,setList] = useState([]);
  const [input,setInput] = useState("");

  const addTodo = (todo) =>{
    const newTodo = {
      id:Math.random(),
      todo:todo
    }

    setList([...list,newTodo])

    setInput("")

  }

  const deleteTodo = (id) =>{
    const newList = list.filter((e) => e.id !== id )

    setList(newList)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text"
       value = {input} 
       onChange = {(e) => setInput(e.target.value)
       }
       />
      <button onClick={() => addTodo(input)}>Add List</button>
      <ul>
        {list.map((e) => {
          return(
          <li key={e.id}>{e.todo}
          <button onClick = {() => deleteTodo(e.id)}>&times;</button>
          </li>
          )
        }
        )}
      </ul>
    </div>
  );
}

export default App;
