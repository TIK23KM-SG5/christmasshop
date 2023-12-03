import './App.css';
import { Routes, Route } from 'react-router-dom';
import CartExample from './components/CartExample';
import AuthorizationExample from './components/AuthorizationExample';
import NavigationBar from './components/sitecomp/navbar';
import HeroSection from './components/sitecomp/herosection';
import CardCollection from './components/sitecomp/cardsection';
import Footer from './components/sitecomp/footer';
/**
 * App contains only routing links to examples.
 * Routing is built in index.js
 */
function App() {

  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<h1>Holly Christmas shop</h1>}/>
        <Route path='/auth' element={<AuthorizationExample/>}/>
        <Route path='/cart' element={<CartExample/>}/>
      </Routes>
      <HeroSection />
      <CardCollection />
      <Footer />
    </div>
  );
}

export default App;