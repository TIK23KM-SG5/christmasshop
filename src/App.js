import './App.css';
import NavigationBar from './components/sitecomp/navbar/navbar';
import HeroSection from './components/sitecomp/herosection';
import Footer from './components/sitecomp/footer';
import CardCollection from './components/sitecomp/cardsection';



/**
 * App contains only routing links to examples.
 * Routing is built in index.js
 */
function App() {

  return (
    <div className='App'>
      <NavigationBar/>
        <div className='page-content'>
          <HeroSection/>
          <CardCollection/>
        </div>
      <Footer />
    </div>
  );
}

export default App;