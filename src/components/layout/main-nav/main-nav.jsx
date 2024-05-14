/* eslint-disable no-unused-vars */
import React from "react";
import { Navigation } from "./styles";
import { AboutButton, navButtons} from './styles.js';
import { Link, BrowserRouter} from "react-router-dom";

export default function MainNav() {
  return (
    <BrowserRouter>
    <Navigation>
      <AboutButton role={"button"}>
        <Link to="/about" style={{color: '#fff'}}>О студии</Link>
      </AboutButton>
      <NavButtonList/>
    </Navigation>
    </BrowserRouter>
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

