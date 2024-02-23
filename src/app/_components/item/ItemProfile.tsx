import Image from "next/image";
import styles from "./ItemProfile.module.css";

export default function ItemProfile({ flex }: { flex: boolean }) {
  return (
    <div className={`${flex ? styles.flex : styles.left}`}>
      <Image src={"/home.svg"} alt="이미지" width={25} height={25} />
    </div>
  );
}
