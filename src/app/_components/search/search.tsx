"use client";

import React from "react";
import styles from "./search.module.css";
import Image from "next/image";

export default function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.search}>
          <Image src={"/search.svg"} alt="설정" width={18} height={18} />
        </div>
        <input className={styles.input} type="text" placeholder="검색" />
      </div>
      <div className={styles.setting_div}>
        <Image src={"/settings.svg"} alt="설정" width={18} height={18} />
      </div>
    </div>
  );
}
