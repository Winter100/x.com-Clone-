import styles from "./preminum.module.css";

export default function Preminum() {
  return (
    <div className={styles.container}>
      <h2>Preminum 구독하기</h2>
      <p className={styles.content}>
        구독하여 새로운 기능을 이용해 보세요. 자격을 충족하는 경우 광고 수익
        분배금도 받을 수 있습니다.
      </p>
      <button className={styles.btn}>구독하기</button>
    </div>
  );
}
