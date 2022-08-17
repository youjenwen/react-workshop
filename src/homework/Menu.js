//方法二
import './Menu.css';
import { useState } from 'react';

function Menu() {
  const [activeText, setActiveText] = useState('');
  const menuItems = ['首頁', '關於我們', '產品'];
  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={Math.random().toString(36).replace('0.', '')}
              onClick={() => {
                setActiveText(v);
              }}
            >
              <a href="#/" className={activeText === v ? 'active' : ''}>
                {v}
              </a>
            </li>
          );
        })}

        {/* <li
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
        </li> */}
      </ul>
    </>
  );
}

export default Menu;
