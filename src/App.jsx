import React from "react"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


let globalId= 0;
function App() {
  const [task , setTask]= useState("")
  const [todos , setTodos]= useState([])

  function createTodo(){
     event.preventDefault()
   setTodos(prevState=>{
    setTask('')
    return[...prevState , {todo:task, id: globalId++}]
   })
  }
  function deleteHandle(itemID){
    setTodos(prevState=> prevState.filter(item=>item.id !== itemID))

  }
  return <div className="form">
        <h1>BEST TODO APP</h1>
        <form>
        <input className="input" type="text" value={task} onChange={event=> {
          setTask(event.target.value)
        }}/>
        <button onClick={createTodo} type="submit">Create todo</button>
        </form>
        <ul>
          {todos.map(item=>{
            return <div key={item.id }>
            <li>{item.todo}</li> 
            <button onClick={()=>deleteHandle(item.id)}>delete</button>
            </div>})}
          
        </ul>
      </div>
    }

export default App
