import styled from "styled-components";
import { Button } from "../../../styled/button/styles";

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 40px 40px;
  row-gap: 6px;
  column-gap: 8px;
  min-width: 321px;
  margin: 0;
  align-items: center;
  justify-items: center;
`;

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
      borderRadius: '100px',
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
  },
  {
    id: 2,
    text: 'Цены',
    style: {
      gridColumn: '1 / 2',
      gridRow: '3 / 4',
      width: 'clamp(157px, 24vw, 300px)',
      height: '40px',
      margin: '0',
      justifySelf: 'end',
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
  },
  {
    id: 3,
    text: 'Контакты',
    style: {
      gridColumn: '2 / 3',
      gridRow: '3 / 4',
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


