import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container'
import Navbar from "./components/layout/Navbar";
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Projetos from './components/pages/Projetos';
import Contato from './components/pages/Contato';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/projetos' element={<Projetos />}></Route>
          <Route exact path='/contato' element={<Contato />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
