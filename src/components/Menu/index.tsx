import { cookieType } from "../../utils/types";

import { Cookies } from "../Cookies";
import { MenuContainer } from "./styles";

interface MenuProps {
  cookies: cookieType[];
}

export function Menu({ cookies }: MenuProps) {
  return (
    <MenuContainer>
      <Cookies cookies={cookies} />
    </MenuContainer>
  );
}
