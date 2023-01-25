import styles from './Botoes.module.css'

const Botoes = ({ todos, setTodos, index }) => {

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className={styles.btns}>
      <button className={styles.complete_btn} onClick={() => completeTodo(index)}>
      Completo
      </button>
      <button className={styles.remove_btn} onClick={() => removeTodo(index)}>
      Remover
      </button>
    </div>
  );
};

export default Botoes;
