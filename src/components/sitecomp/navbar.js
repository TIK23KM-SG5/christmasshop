import {Link} from 'react-router-dom';
import { customerData } from '../Signals/CustomerSignal';


/**
 * This is just a simple example of navigation with bootstrap using router links
 */
const NavigationBar = () => {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            {customerData.value ? customerData.value.lname : 'Home'}
          </Link>
          <Link to ="/categories" className='navbar-brand'>
            Categories
          </Link>
          <Link to="/products" className='navbar-brand'>
            Products
          </Link>
          <Link to ="/special" className='navbar-brand'>
            Special FAQ
          </Link>
          <div className="navbar-links">
          <Link to="/register" className="navbar-link">
              Register
            </Link>
            <Link to="/login" className="navbar-link">
              Sign in
            </Link>
            <Link to="/cart" className="navbar-link">
              Shopping cart
            </Link>
          </div>
        </nav>
      </div>
    );
  };
  
  export default NavigationBar;