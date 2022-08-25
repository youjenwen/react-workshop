import React from 'react';
import { useState, useEffect } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);

  const [searchWord, setSearchWord] = useState('');

  //代表是否正在載入
  const [isLoading, setIsLoading] = useState(false);

  //向伺服器要資料
  //在didMount的時候呼叫這個函式
  const fetchUsers = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    );
    //剖析資料類型
    const data = await response.json();
    //設定到state中
    setUsers(data);
  };

  //向伺服器要資料
  const fetchUsersBySearchWord = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=' +
        searchWord
    );
    //剖析資料類型
    const data = await response.json();
    //設定到state中
    setUsers(data);
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
        {/* {console.log('第1次Users', users)} */}
        {users.map((v, i) => {
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
      <h1>UserList(向伺服器要資料)</h1>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          //方法一 邊輸入邊搜尋  fetchUsersBySearchWord()上面函式要帶參數 set系列是非同步 先變數裝改變的value再各別給 set 和 fetchUserSearchWord 這樣就能看似變成同步
          //   const newSearchWord = e.target.value;
          //   setSearchWord(newSearchWord);
          //   fetchUsersBySearchWord(newSearchWord);
          setSearchWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchUsersBySearchWord();
        }}
      >
        搜尋
      </button>
      <div>{isLoading ? loader : open}</div>
    </>
  );
}

export default UserList;
