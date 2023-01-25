import React from 'react'
import Botoes from './Botoes'
import styles from './Botoes.module.css'

const Lista = ({todos, setTodos}) => {
  return (
    <ul>
    {todos.map((todo, index) => (
      <li
        className={`todo ${todo.isCompleted ? "completed" : ""}`}
        key={index}
      >
        <span>{todo.text}</span>
        <Botoes todos={todos} setTodos={setTodos} index={index}/>
      </li>
    ))}
  </ul>
  )
}

export default Lista