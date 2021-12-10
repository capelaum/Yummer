import Image from "next/image";

import shape_left from "../../../public/Banner/shape_left.svg";
import shape_right from "../../../public/Banner/shape_right.svg";
import main_cookies from "../../../public/Banner/main_cookies.png";
import main_cookies_mobile from "../../../public/Banner/mobile/main_cookies_mobile.png";
import yummer_logo from "../../../public/Logos/yummer_logo.svg";

import { BannerContainer, Shape, ShapeLeft, ShapeRight } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <div className="yummer_logo">
        <Image src={yummer_logo} alt="Yummer Logo" layout="responsive" />
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero sit aliquam leo ullamcorper nisl.</p>
      <button>Faça seu pedido</button>

      <Shape>
        <ShapeLeft>
          <Image src={shape_left} alt="shape left" layout="responsive" />
        </ShapeLeft>
        <ShapeRight>
          <Image src={shape_right} alt="shape right" layout="responsive" />
        </ShapeRight>
        <div className="main_cookies">
          <Image src={main_cookies} alt="Yummer Cookies" />
        </div>
        <div className="main_cookies_mobile">
          <Image src={main_cookies_mobile} alt="Yummer Cookies Mobile" />
        </div>
      </Shape>
    </BannerContainer>
  );
}
