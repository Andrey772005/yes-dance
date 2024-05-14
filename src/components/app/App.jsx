import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import GlobalStyle from './styles.js';
import Main from '../pages/main/main-page.jsx';
import  AboutPage  from '../pages/about/about-page.jsx';
// import { AppRoute } from '../../theme/const.js';
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
      <Adaptive>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Main/>}>
            <Route path="/about" element={<AboutPage/>}/>
          </Route>
          </Routes>
        </BrowserRouter>
      </Adaptive>
    </>
  )
}

export default App;
