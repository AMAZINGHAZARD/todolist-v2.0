import Button from './UI/Button';
import styles from './TodosActions.module.css'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

function TodosActions({ resetTodos, deleteCompletedTodos,completedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Reset Todos"
        onClick={resetTodos}
      >
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        title="Clear Compleat Todos"
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
