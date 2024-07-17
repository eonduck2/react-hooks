import React, { useLayoutEffect, useRef } from "react";

const LayoutEffect: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "lightblue";
    }

    // 정리 함수
    return () => {
      if (divRef.current) {
        divRef.current.style.backgroundColor = ""; // 초기화
      }
    };
  }, []); // 의존성 배열이 빈 배열이면 컴포넌트가 마운트될 때만 실행

  return (
    <div ref={divRef} style={{ padding: "20px" }}>
      Layout Effect Example
    </div>
  );
};

export default LayoutEffect;
