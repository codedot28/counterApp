
import MenuAppBar from 'components/Header'
import {Counter} from 'components/Counter'
import About from 'components/About'
import {Contact} from './components/Contact'
import Home from 'components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import LandingPage from 'components/LandingPage.jsx'

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
``


function App() {


  return (
    <Router>
   <MenuAppBar />
   <Container>
   <Routes>
    <Route path='/' element={<LandingPage />} />
   <Route path="/counter" element={<Counter />} />
   <Route path="/about" element={<About />} />
   <Route path="/Contact" element={<Contact />} />
   </Routes>
   </Container>
    </Router>    
  );
}

export default App;
