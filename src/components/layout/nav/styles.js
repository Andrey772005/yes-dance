import styled from "styled-components";
import {defaultTheme} from "../../../theme/default.js";

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 110px 110px auto 40px 40px ;
  align-items: center;
  width: auto;
  height: 51px;
  background-color: ${defaultTheme.navBackgroundColorMobile};
  
  @media (min-width: 1200px){
    background-color: ${defaultTheme.navBackgroundColorMobile};
  }  
`;
