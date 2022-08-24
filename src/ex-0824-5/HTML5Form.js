import { useState } from 'react';
import './HTML5Form.css';

function HTML5Form() {
  //{} 不是初始值 要加上key才算定義初始
  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  //存錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleFieldChange = (e) => {
    //e(事件).target(觸發).type、name、value
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    //阻擋預設行為
    //如果<form>沒有填寫action method 資訊會產生在網址上
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setFieldErrors({
        ...fieldErrors,
        password: '密碼跟確認密碼不同',
        confirmPassword: '密碼跟確認密碼不同',
      });
      return; //終止程式行為
    }

    //最後都輸入正確 會送出axios、fetch
    // console.log(user);
  };

  const handleInvalid = (e) => {
    //required表單提示 就是預設行為
    e.preventDefault();

    //可以抓到瀏覽器的提示訊息
    // console.log(e.target.validationMessage);

    //fouce() 未填的欄位
    document.querySelector('input:invalid').focus();

    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    });
  };

  //清空錯誤訊息
  const handleFormChange = (e) => {
    if (e.target.name === 'showPassword') return;
    setFieldErrors({ ...fieldErrors, [e.target.name]: '' });
  };

  return (
    <>
      <h1>HTML5表單驗證</h1>
      <hr />
      {/* 送出表單 submit 會有事件產生 */}
      <form
        onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        onChange={handleFormChange}
      >
        <label>姓名</label>
        <input
          name="fullName"
          type="text"
          value={user.fullName}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.fullName}</span>
        <br />
        <label>電話</label>
        <input
          name="phone"
          type="text"
          value={user.phone}
          onChange={handleFieldChange}
        />
        <span className="error">{fieldErrors.phone}</span>
        <br />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.email}</span>
        <br />
        <label>username</label>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.username}</span>
        <br />
        <label>密碼</label>
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          onChange={handleFieldChange}
          minLength={6}
          maxLength={10}
          required
        />
        <input
          type="checkbox"
          name="showPassword"
          checked={showPassword}
          onChange={() => {
            setShowPassword(!showPassword);
          }}
        />
        <label>顯示密碼</label>
        <span className="error">{fieldErrors.password}</span>
        <br />
        <label>確認密碼</label>
        <input
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          value={user.confirmPassword}
          onChange={handleFieldChange}
          minLength={6}
          maxLength={10}
          required
        />

        <input
          type="checkbox"
          name="showPassword"
          checked={showPassword}
          onChange={() => {
            setShowPassword(!showPassword);
          }}
        />
        <label>顯示密碼</label>
        <span className="error">{fieldErrors.confirmPassword}</span>
        <br />
        <button type="submit">確認表單</button>
      </form>
    </>
  );
}

export default HTML5Form;
