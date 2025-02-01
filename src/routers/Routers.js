import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
//import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import About from "../pages/About";
import ProductDetail from '../pages/ProductDetail';
import ProtectedRoute from './ProtectedRoute';

import AddProducts from '../admin/AddProducts';
import Dashboard from '../admin/Dashboard';


const Routers = () => {
    return (
    <Routes>
        <Route path="/" element={<Navigate to ="home"/> }  />
        <Route path="home" element={<Home />}    />
        <Route path="signup" element={<Signup />}    />
        <Route path="shop/:id" element={<ProductDetail/>}    />
        <Route path="shop" element={<Shop />}    />
        {/* <Route path="checkout" element={
        <ProtectedRoute>
            <Checkout/> 
        </ProtectedRoute>
    }    /> */}
        <Route path="login" element={<Login />}    />
        <Route path="cart" element={<Cart />}    />

        <Route path="/*" element={<ProtectedRoute/>}>
            <Route path="checkout" element={<Checkout/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="dashboard/add-products" element={<AddProducts/>} /> 
        </Route>
         
            
      
        <Route path="about" element={<About/>}    />

    </Routes>
    );
};

export default Routers;

