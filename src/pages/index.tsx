import Image from "next/image";
import shape_left from "../../public/Banner/shape_left.svg";
import shape_right from "../../public/Banner/shape_right.svg";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.shape_left}>
        <Image src={shape_left} alt="shape left" />
      </div>
      <div className={styles.shape_right}>
        <Image src={shape_right} alt="shape left" />
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Yummer</h1>
        </main>
      </div>
    </>
  );
}
