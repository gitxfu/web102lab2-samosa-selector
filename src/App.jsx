import './App.css'
import { useState } from 'react';

const App = () => {


  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + 1 * multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      // setCount(count-10);
      setCount(count => count - 10);
      // setCount(count - 10); not recommend

      // setMultiplier(100);
      // { console.log('1:' + multiplier) };
      // setMultiplier(0);
      // { console.log('2:' + multiplier) };
      // setMultiplier(multiplier => multiplier * 2);
      setMultiplier(multiplier => multiplier * 2);
      // { console.log('3:' + multiplier) };
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count => count  - 100);
      setMultiplier(multiplier => multiplier * 5);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count => count  - 1000);
      setMultiplier(multiplier => multiplier * 10);
    }
  }

  const buyRandom = () => {
    if (count >= 1) {
      setCount(count - 1);
      const randomMultiplier = Math.floor(Math.random() * 9) + 2; //
      setMultiplier(multiplier => multiplier * randomMultiplier);
    }
  }

  return (
    <div className="App">

      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <h2>multiplier: {multiplier}</h2>
        <img src="/samosa.png" className="samosa" onClick={updateCount} />
      </div>

      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳 </h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Random 👩🏽‍🍳 </h3>
          <p>Random per click</p>
          <button onClick={buyRandom}>1 samosas</button>
        </div>

      </div>

    </div>
  )
}

export default App


/*

React setState vs Direct Update

In React, are there any difference between these 2?
setCount((count) => count - 10);
setCount(count - 10);

Yes, there is a significant difference between these two lines of code in React.

    setCount((count) => count - 10);
    This code uses the functional form of the setState updater function. When you pass a function to setState, 
    React guarantees that the state update will be based on the previous state, and it will not have any race conditions. 
    In this case, you are provided with the previous state value as count, and you return the new state value by 
    subtracting 10 from it. This is the recommended way to update state when the new state depends on the previous state.

    setCount(count - 10);
    This code directly sets the state to the result of count - 10. It does not take the previous state into account. 
    While this may work in some cases, it's generally not recommended, especially if there are asynchronous updates or 
    multiple state updates happening in close succession. Directly updating state like this can lead to unexpected behavior.

The first approach, using the functional form of setState, is preferred because it ensures that you're working with 
the latest state and that updates are applied correctly, even in complex scenarios. The second approach is less reliable 
and can lead to bugs in your application, especially when dealing with asynchronous state updates.



*/