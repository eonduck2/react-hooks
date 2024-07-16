import React, { useState, useCallback } from "react";

const CounterMeMoiCallback = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // useCallback을 사용하여 increment 함수 메모이제이션
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + step);
  }, [step]); // step이 변경될 때마다 새롭게 생성

  return (
    <div>
      <p>Count: {count}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        placeholder="Set step"
      />
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterMeMoiCallback;
