import Image from "next/image";

import shape_left from "../../../public/Banner/shape_left.svg";
import shape_right from "../../../public/Banner/shape_right.svg";
import main_cookies from "../../../public/Banner/main_cookies.svg";
import main_cookies_mobile from "../../../public/Banner/mobile/main_cookies_mobile.svg";
import yummer_logo from "../../../public/Logos/yummer_logo.svg";

import styles from "./styles.module.scss";

import useWindowDimensions from "../../hooks/useWindowDimensions";

export function Banner() {
  const { height, width } = useWindowDimensions();

  return (
    <div className={styles.banner}>
      <div className={styles.shape_left}>
        <Image src={shape_left} alt="shape left" layout="responsive" />
      </div>
      <div className={styles.shape_right}>
        <Image src={shape_right} alt="shape right" layout="responsive" />
      </div>
      <div className={styles.yummer_logo}>
        <Image src={yummer_logo} alt="Yummer Logo" layout="responsive" />
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Libero sit aliquam leo ullamcorper nisl.
      </p>
      <button>Faça seu pedido</button>

      {width > 768 ? (
        <Image src={main_cookies} alt="Yummer Cookies" />
      ) : (
        <Image src={main_cookies_mobile} alt="Yummer Cookies" />
      )}
    </div>
  );
}
