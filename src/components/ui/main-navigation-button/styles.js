import styled from "styled-components";
import { Button } from "../../../styled/button/styles";

export const MainButton = styled(Button)`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  min-width: 321px;
  height: 40px;
  margin: 0;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background-color: #E20055;
  color: #fff;
  border: none;
  border-radius: 100px;
`