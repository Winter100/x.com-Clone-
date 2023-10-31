"use client";
import { useState } from "react";
import styles from "./LoginModalPage.module.css";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const onChangeId = () => {};
  const onChagePassword = () => {};
  const formSubmitHandler = () => {};
  const backMoveHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <div onClick={backMoveHandler}>X</div>
        </div>
        <div>
          <form className={styles.form} onSubmit={formSubmitHandler}>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" onChange={onChangeId} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={onChagePassword} />
            </div>
            <div>
              <button>로그인</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
