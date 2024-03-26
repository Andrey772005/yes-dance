import styled from "styled-components";
import {defaultTheme} from "../../../theme/default.js";
import {Button} from "../../../styled/button/styles.js";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: auto;
  height: 51px;
  background-color: ${defaultTheme.navBackgroundColorMobile};
  
  @media (min-width: 1200px){
    background-color: blue;
  }  
`;

export const MyNotesButton = styled(Button)`
  margin-left: 7px;
`
