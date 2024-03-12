import styled from "styled-components";
import {defaultTheme} from "../../../theme/default.js";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: 51px;
  background-color: ${defaultTheme.navBackgroundColorMobile};
  
  @media (min-width: 1200px){
    background-color: blue;
  }  
`;
