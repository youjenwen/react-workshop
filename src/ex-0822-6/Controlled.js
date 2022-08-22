import { useState } from 'react';

function Controlled(props) {
  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState(0);
  const [textArea, setTextArea] = useState('11233');

  const [gender, setGender] = useState('女');
  const genderOption = ['男', '女', '不提供'];

  return (
    <>
      <h1>可控的表單元素</h1>
      <hr />
      <section id="input-text">
        <h2>文字輸入框(input text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <br />
        數字:
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => {
            setInputNumber(Number(e.target.value));
          }}
        />
        目前價格:{inputNumber + 100}
      </section>
      <section id="text-area">
        <h2>文字輸入框(input textarea)</h2>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
      </section>
      <section id="radio">
        <h2>選項按鈕(radio)</h2>
        {genderOption.map((v, i) => {
          return (
            //隨機數
            <div key={Math.random().toString(36).replace('0.', '')}>
              <input
                type="radio"
                value={v}
                checked={gender === v}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>{v}</label>
              <br />
            </div>
          );
        })}
        {/* <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>男</label>
        <br />
        <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>女</label>
        <br />
        <input
          type="radio"
          value="不提供"
          checked={gender === '不提供'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>不提供</label> */}
      </section>
    </>
  );
}

export default Controlled;
