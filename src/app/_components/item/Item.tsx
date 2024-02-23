import Image from "next/image";
import styles from "./Item.module.css";
import { ItemType } from "@/app/(afterLogin)/home/_components/commend";
import Love from "../comment/love";
import ItemProfile from "./ItemProfile";

export default function Item({ item }: { item: ItemType }) {
  return (
    <div className={styles.container}>
      <ItemProfile flex={false} />
      <div className={styles.right}>
        <div className={styles.write_info}>
          <div>{item.id}</div>
        </div>
        <div>
          <div>{item.title || item.name}</div>
        </div>
        <div>
          {item.url && (
            <div className={styles.image_container}>
              <Image
                className={styles.image}
                src={item?.url}
                alt={item.id.toString()}
                sizes="100%"
                priority
                fill
              />
            </div>
          )}
        </div>
        {item.body && <div>{item.body}</div>}
        <div>
          <div>
            <Love id={item.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
