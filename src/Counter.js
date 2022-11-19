import React, { useState } from 'react';

const Counter = () => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  // 컴포넌트는 자신의 state가 변경되면 rerender!
  console.log('counter 호출');

  // 배열 비구조화 할당
  // count: 상태
  // setCount: 상태 변화 함수
  // 0: 초기값
  const [count, setCount] = useState(0);
  const onIncrese = () => {
    setCount(count + 1);
  };
  const onDecrese = () => {
    setCount(count - 1);
  };
  // 한 컴포넌트가 여러 개의 state를 가질 수도 있음
  const [count2, setCount2] = useState(0);
  const onIncrese2 = () => {
    setCount2(count2 + 1);
  };
  const onDecrese2 = () => {
    setCount2(count2 - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrese}>+</button>
      <button onClick={onDecrese}>-</button>
      <h2>{count2}</h2>
      <button onClick={onIncrese2}>+</button>
      <button onClick={onDecrese2}>-</button>
    </div>
  );
};

export default Counter;
