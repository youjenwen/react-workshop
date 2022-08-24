import { useReducer, useState } from 'react';

function MultipleInput() {
  //{} 不是初始值 要加上key才算定義初始
  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    email: '',
  });

  const handleFieldChange = (e) => {
    //e(事件).target(觸發).type、name、value
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  return (
    <>
      <h1>多個表單元素對應同一個state</h1>
      <hr />
      <label>姓名</label>
      <input
        name="fullName"
        type="text"
        value={user.fullName}
        onChange={handleFieldChange}
      />
      <br />
      <label>電話</label>
      <input
        name="phone"
        type="text"
        value={user.phone}
        onChange={handleFieldChange}
      />
      <br />
      <label>Email</label>
      <input
        name="email"
        type="text"
        value={user.email}
        onChange={handleFieldChange}
      />
      <br />
    </>
  );
}

export default MultipleInput;
