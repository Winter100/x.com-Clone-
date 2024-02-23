import { ChangeEvent, useState } from "react";

export function useInput() {
  const [input, setInput] = useState("");

  function onChageHandler(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return { input, setInput, onChageHandler };
}
