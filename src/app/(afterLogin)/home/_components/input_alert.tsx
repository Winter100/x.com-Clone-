"use client";

import { useState } from "react";
import styles from "./input_alert.module.css";

export default function InputAlert() {
  const [isTouch, setIsTouch] = useState(false);

  return (
    <div className={styles.input_container}>
      <input
        onClick={() => setIsTouch(true)}
        className={styles.input}
        type="text"
        placeholder="무슨 일이 일어나고 있나요?"
      />
      {isTouch && (
        <div className={styles.input_alert}>
          모든 사람이 답글을 달 수 있습니다
        </div>
      )}
    </div>
  );
}
