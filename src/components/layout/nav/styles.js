import styled from "styled-components";
import {defaultTheme} from "../../../theme/default.js";

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr ;
  align-items: center;
  width: auto;
  height: 51px;
  background-color: ${defaultTheme.navBackgroundColorMobile};
  
  @media (min-width: 1200px){
    background-color: ${defaultTheme.navBackgroundColorMobile};
  }  
`;
