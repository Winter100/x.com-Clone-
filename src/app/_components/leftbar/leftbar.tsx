import Link from "next/link";
import React from "react";
import styles from "./leftbar.module.css";
import homeSvg from "../../../../public/home.svg";
import searchSvg from "../../../../public/search.svg";
import xLogo from "../../../../public/X-Logo.png";
import Image from "next/image";

export default function Leftbar() {
  return (
    <nav className={styles.nav}>
      <Link href={"/home"} className={styles.xlogo}>
        <Image src={xLogo} alt="X-Logo" width={24} height={24} />
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href={"/home"} className={styles.liLink}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={homeSvg} alt="Home" fill />
              </div>
              <div>홈홈홈홈홈</div>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/explore"} className={styles.liLink}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Image src={homeSvg} alt="Home" fill />
              </div>
              <div>explore</div>
            </div>
          </Link>
        </li>
        <button className={styles.btn} type="button">
          게시하기
        </button>
      </ul>
      <div>유저 정보</div>
    </nav>
  );
}
