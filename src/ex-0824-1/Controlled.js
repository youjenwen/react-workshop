import { useState } from 'react';

function Controlled(props) {
  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState(0);
  const [textArea, setTextArea] = useState('11233');

  const [gender, setGender] = useState('女');
  const genderOption = ['男', '女', '不提供'];

  //select
  const [pet, setPet] = useState('');
  const petOptions = ['狗', '貓', '金魚', '袋熊', '無尾熊'];

  //checkbox
  const [likeList, setLikeList] = useState([]);
  const checkboxFruit = ['芒果', '西瓜', '鳳梨'];
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
            //因為是靜態資料 可以使用索引值當key
            //div key={Math.random().toString(36).replace('0.', '')}>
            <div key={i}>
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
      <section id="select">
        <h2>下拉選單(select)</h2>
        <label>選擇寵物</label>
        {/* 狀態綁在select 原本是直接抓option的value react會把狀態綁在select的value*/}
        <select
          value={pet}
          onChange={(e) => {
            setPet(e.target.value);
          }}
        >
          <option value="">---請選擇---</option>
          {petOptions.map((v, i) => {
            return <option value={v}>{v}</option>;
          })}
          {/* <option value="狗">狗</option>
          <option value="猫">貓</option>
          <option value="金魚">金魚</option> */}
        </select>
      </section>
      <section id="checkbox">
        <h2>核取方塊(checkbox)</h2>
        {/* <input
          type="checkbox"
          value="芒果"
          checked={likeList.includes('芒果')}
          onChange={(e) => {
            const value = e.target.value;
            if (likeList.includes(value)) {
              //如果包含項目 移除
              const newLikeList = likeList.filter((v, i) => {
                return v !== value;
              });

              setLikeList(newLikeList);
            } else {
              //如果不包含 新增
              const newLikeList = [...likeList, value];
              setLikeList(newLikeList);
            }
          }}
        />
        <label>芒果</label> */}

        <hr />
        {checkboxFruit.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList.includes(v)}
                onChange={(e) => {
                  const value = e.target.value;

                  if (likeList.includes(value)) {
                    //如果包含項目 移除
                    const newLikeList = likeList.filter((v, i) => {
                      return v !== value;
                    });

                    setLikeList(newLikeList);
                  } else {
                    //如果不包含 新增
                    const newLikeList = [...likeList, value];
                    setLikeList(newLikeList);
                  }
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Controlled;
