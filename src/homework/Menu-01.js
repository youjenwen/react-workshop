//方法一
import './Menu.css';
import { useState } from 'react';

function Menu() {
  const [activeText, setActiveText] = useState('');
  return (
    <>
      <ul>
        <li
          onClick={() => {
            setActiveText('首頁');
          }}
        >
          <a className={activeText === '首頁' ? 'active' : ''}>首頁</a>
        </li>
        <li
          onClick={() => {
            setActiveText('關於我們');
          }}
        >
          <a className={activeText === '關於我們' ? 'active' : ''}>關於我們</a>
        </li>
        <li
          onClick={() => {
            setActiveText('產品');
          }}
        >
          <a className={activeText === '產品' ? 'active' : ''}>產品</a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
