import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './utils/use-auth';
//引入頁面
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import React from 'react';
import User from './pages/User';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          {/* 連結到各頁面連結 */}
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/product">Product</Link>
          <br />
          <Link to="/user">User</Link>
          <br />
          <Link to="/login">Login</Link>
          <hr />
          {/* <a href=''/> 連結 會重新整理 */}

          {/* 路由表 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="user" element={<User />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
