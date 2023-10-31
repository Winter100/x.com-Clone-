import Image from "next/image";
import X_Logo from "@/../../public/X-Logo.png";
import styles from "./homePage.module.css";
import Link from "next/link";
import FooterLayout from "../footer/FooterLayout";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.layoutLeft}>
          <Image src={X_Logo} alt="X_Logo" />
        </div>
        <div className={styles.layoutRight}>
          <h2>지금 일어나고 있는 일</h2>
          <h3>지금 가입하세요.</h3>
          <div className={styles.linkContainer}>
            <div className={styles.link}>
              <Link href={""}>구글 계정으로 가입하기</Link>
            </div>
            <div className={styles.link}>
              <Link href={""}>애플 계정으로 가입하기</Link>
            </div>
            <div className={styles.or}>
              <span>또는</span>
            </div>
            <div className={styles.linkAuth}>
              <Link href={""}>계정 만들기</Link>
            </div>
            <div className={styles.help}>
              가입하시려면 쿠키 사용을 포함해 이용약관과 개인정보 처리방침에
              동의해야 합니다.
            </div>
          </div>
          <span className={styles.description}>
            이미 트위터에 가입하셨나요?
          </span>
          <Link className={styles.login} href={"/login"}>
            로그인
          </Link>
        </div>
      </div>
      <FooterLayout />
    </>
  );
}
