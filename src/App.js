import './App.css';
import About from './Components/About/About';
import { Contact } from './Components/contact/Contact';
import Intro from './Components/Intro/Intro';
import ProductList from './Components/ProductList/ProductList';
import Toggle from './Components/toggle/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
