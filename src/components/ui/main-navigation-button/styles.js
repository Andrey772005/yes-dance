import styled from "styled-components";
import { Button } from "../../../styled/button/styles";

export const AboutButton = styled(Button)`
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

/* export const NavigationButton = styled(Button)`
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
` */

export const navButtons = [
  {
    id: 0,
    text: 'Направления',
    style: {
      gridColumn: '1 / 2',
      gridRow: '2 / 3',
      width: 'clamp(157px, 24vw, 300px)',
      height: '40px',
      margin: '0',
      justifySelf: 'end',
      cursor: 'pointer',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: '500',
      textAlign: 'center',
      backgroundColor: '#E20055',
      color: '#fff',
      border: 'none',
      borderRadius: '100px'
    }
  },
  {
    id: 1,
    text: 'Преподаватели',
    style: {
      gridColumn: '2 / 3',
      gridRow: '2 / 3',
      width: 'clamp(157px, 24vw, 300px)',
      height: '40px',
      margin: '0',
      justifySelf: 'start',
      cursor: 'pointer',
      fontFamily: '"Roboto", sans-serif',
      fontSize: '14px',
      fontWeight: '500',
      textAlign: 'center',
      backgroundColor: '#E20055',
      color: '#fff',
      border: 'none',
      borderRadius: '100px'
    }
  }
]

