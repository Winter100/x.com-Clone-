"use client";

import TopBarProvider from "@/app/_components/inbar/topbarProvider";
import Image from "next/image";
import React from "react";
import styles from "./historyTopBar.module.css";
import { useRouter } from "next/navigation";

export default function HistoryTopBar() {
  const router = useRouter();
  return (
    <TopBarProvider>
      <div className={styles.container}>
        <Image
          onClick={() => router.back()}
          className={styles.image}
          src={"/arrow-left.svg"}
          alt="뒤로가기"
          width={25}
          height={25}
        />
        <p className={styles.upload}>게시하기</p>
      </div>
    </TopBarProvider>
  );
}
