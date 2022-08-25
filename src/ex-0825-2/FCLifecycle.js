import React from 'react';
import { useState, useEffect } from 'react';

function FCLifecycle() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //componentdidMount
    console.log('模擬Mount 元件初次出現在頁面上的時候');
  }, []);

  //模擬didUpdate
  useEffect(() => {
    //componentdidMount
    console.log('模擬didUpdate');
    //當total(放在相依性陣列中的狀態)有改變的時候會觸發didUpdate
    //相依性陣列填入2種: 1.元件自己本身state 2.接收的props
  }, [total]);

  //模擬willUnmount
  useEffect(() => {
    return () => {
      //willUnmount
      //必須透過父母元件來處理 自己沒辦法移除自己
      //在元件被移除的時候觸發
      console.log('模擬willUnmount');
    };
  }, []);

  return (
    <>
      <h1>useEffect與生命周期</h1>
      <h1
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
    </>
  );
}

export default FCLifecycle;
