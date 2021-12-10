import Image from "next/image";

import shape_left from "../../../public/Banner/shape_left.svg";
import shape_right from "../../../public/Banner/shape_right.svg";
import main_cookies from "../../../public/Banner/main_cookies.png";
import main_cookies_mobile from "../../../public/Banner/mobile/main_cookies_mobile.png";
import yummer_logo from "../../../public/Logos/yummer_logo.svg";

import styles from "./styles.module.scss";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.yummer_logo}>
        <Image src={yummer_logo} alt="Yummer Logo" layout="responsive" />
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero sit aliquam leo ullamcorper nisl.</p>
      <button>Faça seu pedido</button>

      <div className={styles.shape}>
        <div className={styles.shape_left}>
          <Image src={shape_left} alt="shape left" layout="responsive" />
        </div>
        <div className={styles.shape_right}>
          <Image src={shape_right} alt="shape right" layout="responsive" />
        </div>
        <div className={styles.main_cookies}>
          <Image src={main_cookies} alt="Yummer Cookies" />
        </div>
        <div className={styles.main_cookies_mobile}>
          <Image src={main_cookies_mobile} alt="Yummer Cookies Mobile" />
        </div>
      </div>
    </div>
  );
}
