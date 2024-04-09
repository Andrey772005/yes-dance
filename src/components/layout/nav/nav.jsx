import {StyledNav} from "./styles.js";
import NavButton from "../../../styled/button/button";
import {PhoneComponent} from "../../ui/phone/phone.jsx";
import { BellComponent } from "../../ui/notofications/notifications.jsx";

export default function UserNav() {
  return (
    <StyledNav>
      <NavButton role={"button"} to="/">
        Записаться
      </NavButton>
      <NavButton role={"button"} to="/">
        Мои записи
      </NavButton>
      <PhoneComponent role={"button"}/>
      <BellComponent role={"button"}/>
    </StyledNav>
  )
}