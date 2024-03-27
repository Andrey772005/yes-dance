import React from "react";
import {StyledNav} from "./styles.js";
import NavButton from "../../../styled/button/button.jsx";
import {MyNotesButton} from "./styles.js";

export default function Nav() {
  return (
    <StyledNav>
      <NavButton>
        Записаться
      </NavButton>
      <MyNotesButton>
        Мои записи
      </MyNotesButton>
    </StyledNav>
  )
}
