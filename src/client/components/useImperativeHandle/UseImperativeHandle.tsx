import React, { useImperativeHandle, forwardRef, useRef } from "react";

interface ChildProps {
  // 자식 컴포넌트에서 사용할 수 있는 메서드 타입 정의
  focus: () => void;
}

const ChildComponent = forwardRef<ChildProps, any>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 부모가 사용할 수 있는 메서드 정의
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus(); // input에 포커스를 맞춤
      }
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Type here..." />;
});

const ParentComponentImperative = () => {
  const childRef = useRef<ChildProps>(null);

  const handleFocus = () => {
    if (childRef.current) {
      childRef.current.focus(); // 자식 컴포넌트의 focus 메서드 호출
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleFocus}>Focus on Input</button>
    </div>
  );
};

export default ParentComponentImperative;
