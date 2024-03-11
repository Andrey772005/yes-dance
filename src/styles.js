import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 22px;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #ffffff;
    color: #333333;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 100%;
  }

  div {
    text-align: center;
  }

  small {
    display: block;
  }

  a {
    color: #343078;
    text-decoration: none;
  }
`

export default GlobalStyle;