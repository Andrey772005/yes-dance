import GlobalStyle from './styles.js';
import UserNav from '../layout/nav/nav.jsx';
import Main from "../pages/main/main-page.jsx";
import './styles.js'

function App() {
  return (
    <>
      <GlobalStyle/>
      <UserNav/>
      <Main/>
    </>
  )
}

export default App;
