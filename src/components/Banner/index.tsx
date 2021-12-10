import Image from "next/image";

import shape_left from "../../../public/Banner/shape_left.svg";
import shape_right from "../../../public/Banner/shape_right.svg";
import main_cookies from "../../../public/Banner/main_cookies.svg";
import yummer_logo from "../../../public/Logos/yummer_logo.svg";

import styles from "./styles.module.scss";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.shape_left}>
        <Image src={shape_left} alt="shape left" />
      </div>
      <div className={styles.shape_right}>
        <Image src={shape_right} alt="shape right" />
      </div>

      <div className={styles.logoContainer}>
        <Image src={yummer_logo} alt="Yummer Logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Libero sit aliquam leo ullamcorper nisl.
        </p>
        <button>Faça seu pedido</button>
        <div className={styles.main_cookies}>
          <Image src={main_cookies} alt="Yummer Cookies" />
        </div>
      </div>
    </div>
  );
}
