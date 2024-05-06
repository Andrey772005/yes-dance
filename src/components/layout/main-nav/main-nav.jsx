/* eslint-disable no-unused-vars */
import React from "react";
import { Navigation } from "./styles";
import { AboutButton, navButtons} from './styles.js';

export default function MainNav() {
  return (
    <Navigation>
      <AboutButton role={"button"}>
        О студии
      </AboutButton>
      <NavButtonList/>
    </Navigation>
  )
}

const NavButtonList = () => {
  return (
    <>
      {navButtons.map((button) => (
        <button key={button.id} style={button.style} role={"button"}>
          {button.text}
        </button>
      ))}
    </>
  );
}

