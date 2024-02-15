import React from "react";
import Leftbar from "../_components/leftbar/leftbar";
import styles from "./layout.module.css";
import TanstackProvider from "../_components/tanstackProvider/tanstackProvider";

export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
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
      <div>
        <p>오른쪽 사이드바</p>
      </div>
      <div />
    </div>
  );
}
