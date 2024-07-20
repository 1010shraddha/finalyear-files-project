import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
//import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import About from "../pages/About";


const Routers = () => {
    return (
    <Routes>
        <Route path="/" element={<Navigate to ="home"/> }  />
        <Route path="home" element={<Home />}    />
        <Route path="signup" element={<Signup />}    />
        <Route path="shop" element={<Shop />}    />
        <Route path="checkout" element={<Checkout />}    />
        <Route path="login" element={<Login />}    />
        <Route path="cart" element={<Cart />}    />
        <Route path="product" element={<Product />}    />
        <Route path="about" element={<About/>}    />

    </Routes>
    );
};

export default Routers;