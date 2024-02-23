"use client";
import Image from "next/image";
import styles from "./followItem.module.css";

interface ItemType {
  title: string;
  tag: string;
  isFollow: boolean;
  onFollowClick: () => void;
}

export default function FollowItem({
  title,
  tag,
  isFollow,
  onFollowClick,
}: ItemType) {
  return (
    <div className={styles.content_container}>
      <div className={styles.image}>
        <Image
          className={styles.image_b}
          src={"/dummy_book.jpg"}
          alt={title}
          width={40}
          height={40}
        />
      </div>
      <div className={styles.body}>
        <h4>{title}</h4>
        <p className={styles.p}>{tag}</p>
      </div>
      <div className={styles.btn_container}>
        <button
          onClick={onFollowClick}
          className={`${isFollow ? styles.follow : styles.follow_btn}`}
        >
          팔로우
        </button>
      </div>
    </div>
  );
}
