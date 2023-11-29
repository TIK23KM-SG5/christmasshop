import './App.css';
import { Routes, Route } from 'react-router-dom';
import CartExample from './components/CartExample';
import AuthorizationExample from './components/AuthorizationExample';
import NavigationBar from './components/NavigationBar';

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
    </div>
  );
}

export default App;