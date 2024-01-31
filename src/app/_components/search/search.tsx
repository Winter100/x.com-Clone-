"use client";

import React from "react";
import styles from "./search.module.css";

export default function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div>로고</div>
        <input className={styles.input} type="text" placeholder="검색" />
      </div>
      <div>설정</div>
    </div>
  );
}
