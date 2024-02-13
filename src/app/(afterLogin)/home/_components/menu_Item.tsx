"use client";
import styles from "./menu_Item.module.css";
import { useUpdateContentName } from "@/app/util/zustand/useUpdateContentName";

interface MuntItemPropsType {
  content: string;
}

export default function MenuItem({ content }: MuntItemPropsType) {
  const contentName = useUpdateContentName((state) => state.content);
  const updateContentName = useUpdateContentName(
    (state) => state.upDateContentName
  );

  return (
    <div
      onClick={() => updateContentName(content)}
      className={styles.container}
    >
      <div
        className={`${styles.content} ${
          contentName === content && styles.bold
        }`}
      >
        {content}
      </div>
      {contentName && (
        <div className={`${contentName === content && styles.underbar}`} />
      )}
    </div>
  );
}
