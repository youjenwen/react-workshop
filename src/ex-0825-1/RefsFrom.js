import React from 'react';
import { useRef } from 'react';

function RefsFrom() {
  //ref的原型: { current: T}
  const inputRef = useRef(null);
  return (
    <>
      <h1>RefsFrom</h1>
      {/* 不可控表單元素 沒有狀態控制 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
      <button
        onClick={() => {
          inputRef.current.blur();
        }}
      >
        blur
      </button>
      <button
        onClick={() => {
          alert(inputRef.current.value);
        }}
      >
        get value
      </button>
    </>
  );
}

export default RefsFrom;
