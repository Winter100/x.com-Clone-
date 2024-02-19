import Link from "next/link";
import React from "react";
import styles from "./leftbar.module.css";
import Image from "next/image";

export default function Leftbar() {
  return (
    <nav className={styles.nav}>
      <Link href={"/home"} className={styles.xlogo}>
        <Image src={"/X-Logo.png"} alt="X-Logo" width={24} height={24} />
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href={"/home"} className={styles.liLink}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={"/home.svg"} alt="Home" fill />
              </div>
              <div>홈</div>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/explore"} className={styles.liLink}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={"/search.svg"} alt="Home" fill />
              </div>
              <div>검색</div>
            </div>
          </Link>
        </li>
        <button className={styles.btn} type="button">
          게시하기
        </button>
      </ul>
      <div>테스트 유저</div>
    </nav>
  );
}
