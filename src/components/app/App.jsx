import React from 'react';
import GlobalStyle from './styles.js';
import Nav from '../layout/nav/nav.jsx';
import Main from "../pages/main/main-page.jsx";
import './styles.js'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Nav/>
      <Main/>
    </>
  )
}

export default App;
