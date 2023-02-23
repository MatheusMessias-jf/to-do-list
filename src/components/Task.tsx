import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface Props {
  taskContent: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: Props;
  handleCheckTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
  id: number;
}

export function Task({
  task,
  handleCheckTask,
  id,
  handleDeleteTask,
}: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <Checkbox.Root
          checked={task.isCompleted}
          onCheckedChange={() => handleCheckTask(id)}
          className={
            task.isCompleted
              ? styles.CheckboxRoot
              : styles.CheckboxRootNotChecked
          }
        >
          <Checkbox.Indicator className={styles.CheckboxIndicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>

      <p
        className={task.isCompleted ? styles.CheckedText : styles.UncheckedText}
      >
        {task.taskContent}
      </p>

      <button
        className={styles.trash}
        onClick={() => handleDeleteTask(id)}
        title="Deletar comentáro"
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
