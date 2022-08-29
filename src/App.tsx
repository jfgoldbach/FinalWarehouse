import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import { NavBar } from './components/NavBar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import "./App.css"
import Product from './pages/Product';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
