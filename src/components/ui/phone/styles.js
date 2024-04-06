import styled from "styled-components";
import Phone from "../../../assets/phone.svg";

export const PhoneButton = styled.button`
  grid-column: 4;
  justify-self: center;
  cursor: pointer;
  text-align: center;
  background: url(${Phone});
  color: #131313;
  border: none;
  width: 24px;
  height: 24px;
` 