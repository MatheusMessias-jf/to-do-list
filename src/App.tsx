import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
import toDoLogo from "./assets/logo.svg";
import tasksTable from "./assets/tasks_table.svg";
import { Task } from "./components/Task";

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img src={toDoLogo} alt="" />
      </div>
      <div className={styles.task_input}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar<span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
      <div className={styles.task_list_content}>
        <div className={styles.tasks_header}>
          <div className={styles.created_tasks}>
            <p>Tarefas criadas</p>
            <div className={styles.created_tasks_counter}>0</div>
          </div>
          <div className={styles.completed_tasks}>
            <p>Tarefas Concluídas</p>
            <div className={styles.completed_tasks_counter}>0</div>
          </div>
        </div>
        <div className={styles.task_list}>
          <img src={tasksTable} alt="" />
          <div>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          <Task />
        </div>
      </div>
    </div>
  );
}
