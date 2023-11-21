import React ,{useState} from 'react'
import {useDispatch} from "react-redux"
import {addTodo } from "../features/todo/todoSlice"

function addTodo() {
  const [input,serinput] = useState(" ")
  return (
    <div>addTodo</div>
  )
}

export default addTodo