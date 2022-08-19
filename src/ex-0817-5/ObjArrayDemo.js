import React, { useState } from 'react';

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
];

function ObjArrayDemo() {
  const [data, setData] = useState(objArray);

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <p>呈現資料</p>
      <table border="1">
        {data.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.text}</td>
            </tr>
          );
        })}
      </table>
      <hr />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' };
          //immutable
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data];

          //3
          setData(newData);
        }}
      >
        陣列最前面新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' };

          //1 //2
          const newData = [...data, newObj];

          //3
          setData(newData);
        }}
      >
        陣列最後面新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.text.includes('a');
          });
          setData(newData);
        }}
      >
        尋找(過濾)只呈現所有文字有a字母的
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            // return !v.text.includes('b');
            return v.text !== 'b';
          });
          setData(newData);
        }}
      >
        刪除文字為b的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.id !== 99;
            // return v.id.includes(99);//這個錯誤
          });
          setData(newData);
        }}
      >
        刪除id為99的物件
      </button>
      <br />
      <button
        onClick={() => {
          //1.建立要插入的物件
          const newObj = { id: 5, text: 'bbb' };
          //2.找到id=2的物件位置索引值
          const index = data.findIndex((v, i) => {
            return v.id === 2;
          });
          //3.如果有找到
          if (index > -1) {
            //分割兩個陣列
            const aa = data.slice(0, index + 1);
            const ab = data.slice(index + 1);
            //合併陣列
            const newData = [...aa, newObj, ...ab];
            //set新狀態
            setData(newData);
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          //找id=3的index
          const index = data.findIndex((v, i) => {
            return v.id === 3;
          });
          if (index !== -1) {
            const newData = data.map((v) => {
              return { ...v };
            });
            //常見深拷貝
            // const newData = JSON.parse(JSON.stringify(data));
            console.log(newData);
            newData[index].text = 'cccc';
            setData(newData);
          }
        }}
      >
        取代id為3的文字為cccc
      </button>
    </>
  );
}

export default ObjArrayDemo;
