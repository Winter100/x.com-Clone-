"use client";
import Preminum from "@/app/_components/preminum/preminum";
import Search from "@/app/_components/search/search";
import { useInput } from "@/app/util/hooks/useInput";
import styles from "./home.module.css";

export default function Page() {
  const { input, setInput, onChageHandler } = useInput();

  return (
    <div className={styles.container}>
      <Search input={input} setInput={setInput} onChange={onChageHandler} />
      <Preminum />
    </div>
  );
}
