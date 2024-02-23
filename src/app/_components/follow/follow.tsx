"use client";
import { useState } from "react";
import styles from "./follow.module.css";
import FollowItem from "./followItem";

export default function Follow() {
  const [dummy, setDummy] = useState([
    { title: "BTS", tag: "@BTS...", isFollow: false },
    { title: "가수", tag: "@가수가 궁금해!", isFollow: false },
    { title: "연예인", tag: "@연예인이 궁금해!", isFollow: false },
    { title: "음식", tag: "@뭐가 맛있지?", isFollow: false },
    { title: "휴일", tag: "@휴일이 언제야!", isFollow: false },
  ]);

  const handleFollowClick = (title: string) => {
    setDummy((prevDummy) =>
      prevDummy.map((item) =>
        item.title === title ? { ...item, isFollow: !item.isFollow } : item
      )
    );
  };

  return (
    <div className={styles.container}>
      <h3>팔로우 추천</h3>
      {dummy.map((item) => (
        <FollowItem
          key={item.title}
          title={item.title}
          tag={item.tag}
          isFollow={item.isFollow}
          onFollowClick={() => handleFollowClick(item.title)}
        />
      ))}
    </div>
  );
}
