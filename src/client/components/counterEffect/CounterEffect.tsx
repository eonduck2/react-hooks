import React, { useState, useEffect } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  const h1Ref = React.useRef<HTMLHeadingElement | null>(null); // h1 요소를 저장하기 위한 ref

  useEffect(() => {
    document.title = `Count: ${count}`;

    const h1 = document.createElement("h1");
    h1.textContent = "ㅎㅇ";
    document.getElementById("root")?.appendChild(h1);

    h1Ref.current = h1;

    return () => {
      if (h1Ref.current) {
        document.getElementById("root")?.removeChild(h1Ref.current);
      }
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
