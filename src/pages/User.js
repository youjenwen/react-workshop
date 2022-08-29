import React from 'react';

import { useAuth } from '../utils/use-auth';

function User(props) {
  const { auth } = useAuth();

  return (
    <>
      <h1>User</h1>
      <div>會員目前: {auth ? '已登入' : '未登入'}</div>
      <div>{auth && '歡迎進入會員區'}</div>
    </>
  );
}

export default User;
