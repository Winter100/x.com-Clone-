"use client";

import React from "react";
import styles from "./homeTopBar.module.css";
import TopBarProvider from "@/app/_components/inbar/topbarProvider";
import Image from "next/image";
import MenuItem from "./menu_Item";

export default function HomeTopBar() {
  return (
    <TopBarProvider>
      <div className={styles.container}>
        <div className={`${styles.menu} ${styles.menu_hover}`}>
          <MenuItem content={"추천"} />
        </div>
        <div className={`${styles.follow} ${styles.menu_hover}`}>
          <MenuItem content={"팔로우 중"} />
        </div>
        <div className={styles.setting_container}>
          <div className={styles.setting_div}>
            <Image src={"/settings.svg"} alt="설정" width={18} height={18} />
          </div>
        </div>
      </div>
    </TopBarProvider>
  );
}
