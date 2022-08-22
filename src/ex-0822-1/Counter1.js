// import { useState } from 'react';

function Counter1({ totalFromParent, plusOne }) {
  //   const [total, setTotal] = useState(0);
  return (
    <>
      <h1>{totalFromParent}</h1>
      <button onClick={plusOne}>+1</button>
    </>
  );
}

export default Counter1;
