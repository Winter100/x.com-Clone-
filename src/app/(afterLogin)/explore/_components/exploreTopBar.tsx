"use client";

import TopBarProvider from "@/app/_components/inbar/topbarProvider";
import Search from "@/app/_components/search/search";
import Setting from "@/app/_components/setting/setting";

import { useInput } from "@/app/util/hooks/useInput";
import styles from "./exploreTopBar.module.css";

export default function ExploreTopBar() {
  const { input, setInput, onChageHandler } = useInput();
  return (
    <TopBarProvider>
      <div className={styles.container}>
        <Search input={input} setInput={setInput} onChange={onChageHandler} />
        <Setting />
      </div>
    </TopBarProvider>
  );
}
