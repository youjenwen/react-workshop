import { useState } from 'react';

function BMI() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  return (
    <>
      <h1>BMI</h1>
      <hr />
      <label>身高(cm)</label>
      <input
        type="number"
        value={height === 0 ? '' : height}
        onChange={(e) => {
          //e.target.value是字串
          //轉Number再存入狀態
          setHeight(Number(e.target.value));
        }}
      />
      <br />
      <label>體重(kg)</label>
      <input
        type="number"
        value={weight === 0 ? '' : weight}
        onChange={(e) => {
          //e.target.value是字串
          //轉Number再存入狀態
          setWeight(Number(e.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          if (weight === 0 || height === 0) {
            alert('請輸入身高體重');
            return;
          }
          //BMI = 體重(公斤) / 身高2(公尺平方)
          setBmi(weight / Math.pow(height / 100, 2));
        }}
      >
        計算
      </button>
      <hr />
      <h2>你的BMI: {bmi.toFixed(1)}</h2>
    </>
  );
}

export default BMI;
