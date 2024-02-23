import { ItemType } from "@/app/(afterLogin)/home/_components/commend";
import styles from "./content.module.css";

export default function Content({ item }: { item: ItemType }) {
  return (
    <div className={styles.right}>
      <div className={styles.write_info}>
        <div>{item.id}</div>
      </div>
      <div>
        <div>{item.title}</div>
      </div>
    </div>
  );
}
