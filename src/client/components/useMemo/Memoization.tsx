import React, { useMemo } from "react";

interface MyComponentProps {
  a: number;
  b: number;
}

const Memoization: React.FC<MyComponentProps> = ({ a, b }) => {
  // 복잡한 계산을 메모이제이션
  const result = useMemo(() => {
    return a + b;
  }, [a, b]);

  return <div>Result: {result}</div>;
};

export default Memoization;
