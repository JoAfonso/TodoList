import React, { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  return (
    <div className="todo-list">
   
        <Formulario addTodo={addTodo} />
        <Lista todos={todos} setTodos={setTodos} />
  
    </div>
  );
}

export default App;
