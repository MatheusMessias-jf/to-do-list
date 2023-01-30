import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
import toDoLogo from "./assets/logo.svg";

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img src={toDoLogo} alt="" />
      </div>
      <div className={styles.task_input}>
        <input type="text" />
        <button>Criar</button>
      </div>
    </div>
  );
}
