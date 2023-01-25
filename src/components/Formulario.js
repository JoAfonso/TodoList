import styles from './Formulario.module.css'
import React from "react";

const Formulario = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.elements.todo.value);
    e.target.elements.todo.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicione uma tarefa:</h2>
      <div className={styles.inputs}>
        <input type="text" name="todo" placeholder="Insira aqui" required />
        <button type="submit" className={styles.btnAdd}>
          Adicionar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
