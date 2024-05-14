import {StyledNav} from "./styles.js";
import NavButton from "../../../styled/button/button";
import {PhoneComponent} from "../../ui/phone/phone.jsx";
import { BellComponent } from "../../ui/notofications/notifications.jsx";

export function UserNav() {
  return (
    <StyledNav>
      <NavButton role={"button"}>
        Записаться
      </NavButton>
      <NavButton role={"button"}>
        Мои записи
      </NavButton>
      <PhoneComponent role={"button"}/>
      <BellComponent role={"button"}/>
    </StyledNav>
  )
}