import Link from "next/link";
import React from "react";
import styles from "./leftbar.module.css";
import Image from "next/image";
import LeftbarItem from "./leftbarItem";

export default function Leftbar() {
  return (
    <nav className={styles.nav}>
      <Link href={"/home"} className={styles.xlogo}>
        <Image src={"/X-Logo.png"} alt="X-Logo" width={24} height={24} />
      </Link>
      <ul className={styles.ul}>
        <li>
          <LeftbarItem content="홈" link={["home"]} imageSrc={"/home.svg"} />
        </li>
        <li>
          <LeftbarItem
            content="검색"
            link={["explore", "search", "history"]}
            imageSrc={"/search.svg"}
          />
        </li>
      </ul>
      <div>테스트 유저</div>
    </nav>
  );
}
