import React from "react";
import Leftbar from "../_components/leftbar/leftbar";
import styles from "./layout.module.css";
import TanstackProvider from "../_components/tanstackProvider/tanstackProvider";

export default function AfterLoginLayout({
  children,
  right,
}: {
  children: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div />
      <div>
        <Leftbar />
      </div>
      <section className={styles.section}>
        <TanstackProvider>{children}</TanstackProvider>
      </section>
      <div className={styles.right}>{right}</div>
      <div />
    </div>
  );
}
