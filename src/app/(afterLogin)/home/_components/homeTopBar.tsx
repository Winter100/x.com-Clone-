"use client";

import React from "react";
import styles from "./homeTopBar.module.css";
import TopBarProvider from "@/app/_components/inbar/topbarProvider";

export default function HomeTopBar() {
  return (
    <TopBarProvider>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div>
            <div>추천</div>
            <div>_____</div>
          </div>
        </div>
        <div className={styles.follow}>
          <div>
            <div>팔로우 중</div>
            <div>_____</div>
          </div>
        </div>
        <div className={styles.setting}>설정</div>
      </div>
    </TopBarProvider>
  );
}
