import React from "react";
import styles from "./write.module.css";
import Image from "next/image";
import InputAlert from "./input_alert";

export default function Write() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.logo}>
          <Image src={"/home.svg"} alt="프로필" width={35} height={35} />
        </div>
      </div>
      <div className={styles.input_container}>
        <InputAlert />
        <div className={styles.upload_btn_container}>
          <ul className={styles.upload_btn_ul}>
            <li className={styles.upload_btn_li}>
              <Image src={"/image.svg"} alt="이미지 업로드" fill />
            </li>
          </ul>
          <div>
            <button className={styles.btn}>게시하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
