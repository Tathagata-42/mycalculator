import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const calcResult = eval(input);
      setResult(calcResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={calculateResult}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;