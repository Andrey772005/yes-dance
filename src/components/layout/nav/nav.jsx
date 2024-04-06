import {StyledNav} from "./styles.js";
import NavButton from "../../../styled/button/button";
import {PhoneComponent} from "../../ui/phone/phone.jsx";
import { BellComponent } from "../../ui/notofications/notifications.jsx";

export default function UserNav() {
  return (
    <StyledNav>
      <NavButton style={NavButton} type={"button"} to="/">
        Записаться
      </NavButton>
      <NavButton style={NavButton} type={"button"} to="/">
        Мои записи
      </NavButton>
      <PhoneComponent type={"button"}/>
      <BellComponent type={"button"}/>
    </StyledNav>
  )
}