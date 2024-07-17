import React, { useState, useLayoutEffect } from "react";

const LayoutEffectDependency = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // 브라우저 창 크기 변경 시 width 상태 업데이트
  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // cleanup 함수: 컴포넌트가 unmount 되거나 재렌더링 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 의존성 배열이 비어있으므로 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <h2>Window Width: {width}px</h2>
    </div>
  );
};

export default LayoutEffectDependency;
