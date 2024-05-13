import React from 'react';
import { useMediaQuery } from 'react-responsive';
import GlobalStyle from './styles.js';
import UserNav from '../layout/nav/nav.jsx';
import Main from "../pages/main/main-page.jsx";
import './styles.js'


const Mobile = ({ children }) => {
  const isMobile = useMediaQuery ({ minWidth: 320, maxWidth: 498 })
  return isMobile ? children : null
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery ({ minWidth: 499, maxWidth: 1199 })
  return isTablet ? children : null
};

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery ({ minWidth: 1200 })
  return isDesktop ? children : null
};

const Adaptive = () => {
  return (
    <>
      <Mobile>
        <UserNav/>
        <Main/>
      </Mobile>
      <Tablet>
        Tablet
      </Tablet>
      <Desktop>
        Desktop
      </Desktop>
    </>
  )
}

function App() {
  return (
    <>
      <GlobalStyle/>
      <Adaptive/>
    </>
  )
}

export default App;
