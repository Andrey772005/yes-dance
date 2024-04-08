import styled from "styled-components";
import { Button } from "../../../styled/button/styles";

export const MainButton = styled(Button)`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  width: clamp(321px, 50vw, 500px);
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

export const DirectionsButton = styled(Button)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: clamp(157px, 24vw, 300px);
  height: 40px;
  margin: 0;
  justify-self: end;
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

