import React, { useState } from 'react';

interface Props {
  initialValue: number;
}

type Count = number | null;

const Counter: React.FC<Props> = ({ initialValue }) => {
  const [count, setCount] = useState<Count>(initialValue);

  const incValue = (n: number = 1) => {
    setCount(count !== null ? count + n : count);
  };

  return (
    <div>
      Счётчик равен = <b>{count}</b>.
      <br />
      <button onClick={() => incValue()}>+1</button>
      <button onClick={() => incValue(5)}>+5</button>
      <button onClick={() => setCount(0)}>0</button>
    </div>
  );
};

export default Counter;
