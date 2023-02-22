import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
import toDoLogo from "./assets/logo.svg";
import tasksTable from "./assets/tasks_table.svg";
import { Task } from "./components/Task";

export function App() {
  const [tasks, setTasks] = useState(["Essa é sua primeira tarefa"]);
  const [newTaskText, setNewTaskText] = useState("");
  const isNewTaskEmpty = newTaskText.length == 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img src={toDoLogo} alt="" />
      </div>
      <div className={styles.task_input}>
        <form onSubmit={handleCreateNewTask}>
          <textarea
            placeholder="Adicione uma nova tarefa"
            name="task"
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          ></textarea>
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar<span className="material-symbols-outlined">add_circle</span>
          </button>
        </form>
      </div>
      <div className={styles.task_list_content}>
        <div className={styles.tasks_header}>
          <div className={styles.created_tasks}>
            <p>Tarefas criadas</p>
            <div className={styles.created_tasks_counter}>0</div>
          </div>
          <div className={styles.completed_tasks}>
            <p>Tarefas Concluídas</p>
            <div className={styles.completed_tasks_counter}>2 de 5</div>
          </div>
        </div>
        <div className={styles.task_list}>
          <div className={styles.empty_tasks}>
            <img src={tasksTable} alt="" />
            <div>
              <h3>Você ainda não tem tarefas cadastradas</h3>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>

          <Task />
        </div>
      </div>
    </div>
  );
}
