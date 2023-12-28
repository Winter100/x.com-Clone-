import React, { ReactNode } from "react";
import styles from "./topBarProvider.module.css";

export default function TopBarProvider({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
