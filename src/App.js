import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthorizationExample from './components/AuthorizationExample';
import NavigationBar from './components/sitecomp/navbar';
import { HeroSection } from './components/sitecomp/herosection';
import Footer from './components/sitecomp/footer';
import { Cart } from './components/cart';
import { Products } from './components/products';
import { Categories } from './components/categories';
import CardCollection from './components/sitecomp/cardsection';
import Special from './components/special';



/**
 * App contains only routing links to examples.
 * Routing is built in index.js
 */
function App() {

  return (
    <div className='App'>
      
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<HeroSection/>}/>
          <Route path='/auth' element={<AuthorizationExample/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products/:category' element={<CardCollection/>}/>
          <Route path='/products' element={<CardCollection/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/special' element={<Special/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;