import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export function Task() {
  return (
    <div className={styles.task}>
      <Checkbox.Root className={styles.CheckboxRoot} defaultChecked id="c1">
        <Checkbox.Indicator className={styles.CheckboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer
      </p>
      <button className={styles.trash} title="Deletar comentáro">
        <Trash size={24} />
      </button>
    </div>
  );
}
