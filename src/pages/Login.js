import React from 'react';
import { useAuth } from '../utils/use-auth';

function Login() {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <div>auth: {auth ? '已登入' : '未登入'}</div>
      <button
        onClick={() => {
          setAuth(true);
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          setAuth(false);
        }}
      >
        登出
      </button>
    </>
  );
}

export default Login;
