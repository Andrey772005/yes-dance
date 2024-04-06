import styled from "styled-components";
import Bell from "../../../assets/bell.svg";

export const BellButton = styled.button`
  grid-column: 5;
  justify-self: center;
  cursor: pointer;
  text-align: center;
  background: url(${Bell});
  color: #131313;
  border: none;
  width: 24px;
  height: 24px;
` 