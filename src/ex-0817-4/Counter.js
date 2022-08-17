import { useState } from 'react';

function Counter() {
  const [total, setTotal] = useState(0);
  return (
    <>
      {/* set ->不管寫多少個都只會讀一行 */}
      <h1
        onClick={() => {
          console.log(total);
          const newTotal = total + 1; //先把存在變數，再丟給setTotal改變狀態
          setTotal(newTotal); //setTotal是非同步
          console.log(newTotal);
          //   setTotal(total + 1);
          //   setTotal(total + 1);
        }}
      >
        {total}
      </h1>
      {/* Truthy falsy判斷 */}
      {/* {total !== 0 && 'total > 0'} */}
    </>
  );
}

export default Counter;
