import './App.css';
import Product from './components/product/Product';
import Countdown from './components/countdown/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown />
      <Product />
    </div>
  );
}

export default App;
