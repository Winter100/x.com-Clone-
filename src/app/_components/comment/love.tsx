import Image from "next/image";
import styles from "./love.module.css";

export default function Love({ id }: { id: number }) {
  // const [commentNum, setCommendNum] = useState(id);
  return (
    <div className={styles.footer}>
      <div className={styles.commend}>
        <Image
          className={styles.footer_image}
          // onClick={() => setCommendNum((pre) => pre + 1)}
          src={"/heart.svg"}
          width={20}
          height={20}
          alt="좋아요"
        />
        <span className={styles.footer_span}>{id}</span>
      </div>
    </div>
  );
}
