import React, { useState } from 'react';
import OddEvenResult from './OddEvenResult';

const Counter = ({ initialValue }) => {
  // 객체 비구조화 할당
  const [count, setCount] = useState(initialValue);

  const onIncrese = () => {
    setCount(count + 1);
  };

  const onDecrese = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrese}>+</button>
      <button onClick={onDecrese}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

// 전달받지 못한 prop의 기본 값 설정
Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
