import React, { useState } from "react";

const Calculator = () => {
  const [number, setNumber] = useState(0);
  const [sum, setSum] = useState(0);

  function addSum(e) {
    const value = parseFloat(e.target.value);
    setNumber(value);
    Sum(value);
  }

  function Sum(value) {
    // Calculate the sum of all numbers (previous numbers + new value)
    setSum((prevSum) => prevSum + value);
  }

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={addSum} />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default Calculator;
