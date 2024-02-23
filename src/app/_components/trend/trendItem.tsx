import styles from "./trendItem.module.css";

export default function TrendItem({ story }: { story: string }) {
  return (
    <div className={styles.container}>
      <div>대한민국에서 트렌드 중</div>
      <div>
        <h3>{`${story}`} 이야기</h3>
      </div>
      <div>5 posts</div>
    </div>
  );
}
