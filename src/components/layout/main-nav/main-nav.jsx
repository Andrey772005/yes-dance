import React from "react";
import { Navigation } from "./styles";
import { AboutButton} from '../../ui/main-navigation-button/styles';
import {navButtons} from '../../ui/main-navigation-button/styles.js'

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
        <button key={button.id} style={button.style}>
          {button.text}
        </button>
      ))}
    </>
  );
}