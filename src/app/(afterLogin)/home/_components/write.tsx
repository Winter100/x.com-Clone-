import React from "react";
import styles from "./write.module.css";

export default function Write() {
  return (
    <div className={styles.container}>
      <div>이미지</div>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="text"
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <div className={styles.input_alert}>
          모든 사람이 답글을 달 수 있습니다 공간
        </div>
        <div className={styles.upload_btn_container}>
          <ul className={styles.upload_btn_ul}>
            <li>미</li>
            <li>G</li>
            <li>이</li>
          </ul>
          <div>
            <button className={styles.btn}>게시하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
