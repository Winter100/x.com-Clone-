import ItemProfile from "../item/ItemProfile";
import styles from "./comment.module.css";

export default function Comment() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ItemProfile flex={true} />
        <div className={styles.body}>
          <span>Mr. {Math.floor(Math.random() * 100)}</span>
          <span>안녕하세요! 더미 텍스트 입니다</span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
