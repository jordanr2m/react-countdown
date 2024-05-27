import './App.css';
import Product from './components/product/Product';
import Countdown from './components/countdown/Countdown';
import { useState } from 'react';

// Create prop of onHideCountdown, which will be passed to the Countdown component
function App() {
  // Create a state to store if countdown is visible. Initially set to true in order to show the countdown
  const [showCountdown, setShowCountdown] = useState(true);

  return (
    <div className="App">
      {/* Saying "if show countdown is true, then show the Countdown component". And pass it the prop onHideCountdown. Must use arrow function with setShowCountdown (because it uses ()) */}
      {showCountdown && (
        <Countdown onHideCountdown={() => setShowCountdown(false)} />
      )}

      <Product />
    </div>
  );
}

export default App;
