"use client";

import { FormEvent } from "react";
import styles from "./search.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SearchType {
  input: string;
  onChange: any;
  setInput: any;
}

export default function Search({ input, onChange, setInput }: SearchType) {
  const router = useRouter();
  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    router.push(`search?keyword=${input}`);
    // setInput("");
  }

  return (
    <form className={styles.inputContainer} onSubmit={onSubmitHandler}>
      <div className={styles.search}>
        <Image src={"/search.svg"} alt="설정" width={18} height={18} />
      </div>
      <input
        value={input}
        onChange={onChange}
        className={styles.input}
        type="text"
        placeholder="검색"
      />
    </form>
  );
}
