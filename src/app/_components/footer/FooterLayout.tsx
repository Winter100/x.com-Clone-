import Link from "next/link";
import styles from "./FooterLayout.module.css";

export default function FooterLayout() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href={""}>소개 </Link>
        <Link href={""}>X앱 다운로드하기 </Link>
        <Link href={""}>고객센터 </Link>
        <Link href={""}>이용약관 </Link>
        <Link href={""}>개인정보 처리방침 </Link>
        <Link href={""}>쿠키 정책 </Link>
        <Link href={""}>접근성 </Link>
        <Link href={""}>광고정보 </Link>
        <Link href={""}>블로그 </Link>
        <Link href={""}>상태 </Link>
        <Link href={""}>채용 </Link>
        <Link href={""}>브랜드리소스 </Link>
      </nav>
    </div>
  );
}
