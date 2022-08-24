import { useState } from 'react';

function BirthSelect() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [text, setText] = useState('');

  //這是函式
  const makeOptions = (min, max) => {
    const options = [];

    for (let i = min; i < max + 1; i++) {
      const v = String(i);
      options.push(v);
    }

    return options;
  };

  return (
    <>
      <h1>生日下拉選單與判斷18歲</h1>
      {/* 要3個下拉選單 */}
      <label>西元</label>
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      >
        <option value="">請選擇</option>
        {makeOptions(1920, 2010).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <label>年</label>

      <select
        value={month}
        onChange={(e) => {
          setMonth(e.target.value);
        }}
      >
        <option value="">請選擇</option>
        {/* {console.log(monthOption)} */}
        {makeOptions(1, 12).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <label>月</label>

      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
        }}
      >
        <option value="">請選擇</option>
        {year !== '' &&
          month !== '' &&
          makeOptions(
            1,
            new Date(Number(year), Number(month), 0).getDate()
          ).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
      </select>
      <label>日</label>
      <button
        onClick={() => {
          if (year === '' || month === '' || day === '') {
            alert('請先完成年月日');
            return; //跳出 老師說'常用!!!!'
          }
          const ms18years = 568036800000;

          //很常用，正號(+)是強制轉換為數字的語法
          const msBirth = +new Date(`${year}/${month}/${day}`);

          //很常用，正號(+)是強制轉換為數字的語法
          const msNow = +new Date();

          if (msNow - msBirth > ms18years) {
            setText('滿18');
          } else {
            setText('未滿18');
          }
        }}
      >
        送出檢查
      </button>
      <h2 style={{ color: text === '滿18' ? 'green' : 'red' }}>{text}</h2>
    </>
  );
}

export default BirthSelect;
