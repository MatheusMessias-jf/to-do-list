import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";
import styles from "./App.module.css";
import toDoLogo from "./assets/logo.svg";
import tasksTable from "./assets/tasks_table.svg";
import { Task } from "./components/Task";

interface TaskProps {
  taskContent: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(() => {
    const receiveStorage = localStorage.getItem("@to-do-list:tasks:1.0.0");
    if (receiveStorage) {
      return JSON.parse(receiveStorage);
    } else return [];
  });
  const [newTaskText, setNewTaskText] = useState("");
  const isNewTaskEmpty = newTaskText.length == 0;
  var created_tasks = tasks.length;
  const completed_tasks = tasks.filter((task) => {
    return task.isCompleted === true;
  });
  console.log(localStorage.getItem("@to-do-list:tasks:1.0.0"));

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      taskContent: newTaskText,
      isCompleted: false,
    };
    setTasks((state) => [...state, newTask]);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleDeleteTask(id: number) {
    const tasksWithoutDeleted = tasks.filter((task, index) => {
      return index != id;
    });
    setTasks(tasksWithoutDeleted);
  }

  function handleCheckTask(id: number) {
    const tempArray = [...tasks];
    tempArray[id].isCompleted = !tempArray[id].isCompleted;
    setTasks(tempArray);
  }

  useEffect(() => {
    const jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("@to-do-list:tasks:1.0.0", jsonTasks);
  }, [tasks]);

  //localStorage.clear();
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
            <div className={styles.created_tasks_counter}>{created_tasks}</div>
          </div>
          <div className={styles.completed_tasks}>
            <p>Tarefas Concluídas</p>
            <div className={styles.completed_tasks_counter}>
              {completed_tasks.length} de {created_tasks}
            </div>
          </div>
        </div>
        <div className={styles.task_list}>
          <div className={styles.empty_tasks}>
            {tasks.length == 0 && (
              <>
                <img src={tasksTable} alt="" />
                <div>
                  <h3>Você ainda não tem tarefas cadastradas</h3>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </>
            )}
          </div>
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                id={index}
                task={task}
                handleCheckTask={handleCheckTask}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
