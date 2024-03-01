"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./leftbarItem.module.css";
import { usePathname } from "next/navigation";

interface ItemType {
  link: string[];
  imageSrc: string;
  content: string;
}

export default function LeftbarItem({ link, imageSrc, content }: ItemType) {
  const params = usePathname();
  const isActive = link?.includes(params.split("/")[1]);
  return (
    <Link href={link[0]} className={styles.liLink}>
      <div className={`${styles.content} ${isActive && styles.active}`}>
        <div className={styles.image}>
          <Image src={imageSrc} alt={content} fill />
        </div>
        <div>{content}</div>
      </div>
      <div></div>
    </Link>
  );
}
