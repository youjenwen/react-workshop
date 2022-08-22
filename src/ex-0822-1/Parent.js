import Counter1 from './Counter1';
import Counter2 from './Counter2';
import { useState } from 'react';

function Parent() {
  const [totalFromParent, setTotalFromParent] = useState(0);

  const plusOne = () => {
    setTotalFromParent(totalFromParent + 1);
  };
  return (
    <>
      <Counter1 totalFromParent={totalFromParent} plusOne={plusOne} />
      <Counter2 totalFromParent={totalFromParent} plusOne={plusOne} />
    </>
  );
}

export default Parent;
