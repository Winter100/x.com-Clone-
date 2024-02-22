import ExploreTopBar from "./_components/exploreTopBar";
import styles from "./page.module.css";
import TrendList from "@/app/_components/trend/trendList";

export default function ExplorePage() {
  return (
    <div>
      <header className={styles.header}>
        <ExploreTopBar />
      </header>
      <div className={styles.body_container}>
        <h3 className={styles.title}>나를 위한 트렌드</h3>
        <TrendList />
      </div>
    </div>
  );
}
