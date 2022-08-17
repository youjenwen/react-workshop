function JSXTest() {
  return (
    <>
      <h1>JSXTest</h1>
      <hr />
      <h2>Number</h2>
      {/* 以下類似顯示在html的純文字 但不會主動換行*/}
      {123}
      {123 - 99}
      {NaN}
      <h2>String</h2>
      {'abc'}
      <br />
      {`total = ${100 - 5}`}
      <h2>Boolean</h2>
      {/* 顯示不出來 */}
      {true}
      {false}
      <h2>null</h2>
      {/* 顯示不出來 */}
      {null}
      <h2>undefined</h2>
      {/* 顯示不出來 */}
      {undefined}
      <h2>Array</h2>
      {/* 每個value會顯示不包含陣列 還是一個陣列*/}
      {[1, 2, 3, 4]}
      <h2>object</h2>
      {/* 會中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>function</h2>
      {() => {}}
      {console.log(123)}
    </>
  );
}

export default JSXTest;
