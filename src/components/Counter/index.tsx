import React from 'react';

function Counter() {
  // const ReactUseState = React.useState(0);
  // const counter = ReactUseState[0];
  // const setCounter = ReactUseState[1];

  const [counter, setCounter] = React.useState(0);

  function add() {
    setCounter(counter + 1);
  }

  function sub() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <button onClick = { () => sub()}>-</button>
      <div>{counter}</div>
      <button onClick = { () => add()}>+</button>
    </div>
  );

}

export default Counter;