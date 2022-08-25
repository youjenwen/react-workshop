import React from 'react';
import { useState, useEffect } from 'react';
import './UserList.css';
import _ from 'lodash';

function UserList() {
  //只記錄第一次didMount跟伺服器要資料
  const [usersRaw, setUsersRaw] = useState([]);
  //畫面上目前呈現狀態
  const [usersDisplay, setUsersDisplay] = useState([]);
  //搜尋
  const [searchWord, setSearchWord] = useState('');
  //代表是否正在載入
  const [isLoading, setIsLoading] = useState(false);
  //分頁用 初始值1 頁數沒有0
  const [pageNow, setPageNow] = useState(1); //目前頁號
  const [perPage, setPerPage] = useState(5); //每頁多少筆資料
  const [pageTotal, setPageTotal] = useState(0); //一共有幾頁在didMount的時候做

  //向伺服器要資料
  //在didMount的時候呼叫這個函式
  const fetchUsers = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    );
    //剖析資料類型
    const data = await response.json();
    // console.log(data);
    //拆頁數
    const pageList = _.chunk(data, perPage);
    console.log(pageList);
    if (pageList.length > 0) {
      setPageTotal(pageList.length);
    }

    //設定到state中
    setUsersDisplay(pageList);
    setUsersRaw(data);
  };

  //didMount
  useEffect(() => {
    //開啟載入指示動畫
    setIsLoading(true);
    //載入資料
    fetchUsers();

    //2秒後關動畫
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const loader = (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
  const open = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>生日</th>
        </tr>
      </thead>
      <tbody>
        {usersDisplay.length > 0 &&
          usersDisplay[pageNow - 1].map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.birth}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );

  return (
    <>
      <h1>UserList(React處理)</h1>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          const newData = e.target.value;
          setSearchWord(newData);
          setUsersDisplay(
            usersRaw.filter(
              (v) =>
                v.name.includes(newData) ||
                v.id.includes(newData) ||
                v.birth.includes(newData)
            )
          );
        }}
      />
      <button
        onClick={() => {
          //開啟載入指示動畫
          // setIsLoading(true);
          // setUsersDisplay(usersRaw.filter((v) => v.name.includes(searchWord)));
          // //2秒後關動畫
          // setTimeout(() => {
          //   setIsLoading(false);
          // }, 2000);
        }}
      >
        搜尋
      </button>
      <div>{isLoading ? loader : open}</div>
    </>
  );
}

export default UserList;
