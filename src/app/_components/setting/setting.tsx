import Image from "next/image";
import styles from "./setting.module.css";

export default function Setting() {
  return (
    <div className={styles.setting_div}>
      <Image src={"/settings.svg"} alt="설정" width={18} height={18} />
    </div>
  );
}
