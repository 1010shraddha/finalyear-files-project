import React from "react";
import {NavLink} from 'react-router-dom';
import './header.css';
import logo from '../../image/logo2.jpg';
//import logo from '../../../image/logo2.jpg';
import usericon from '../../image/add-friend.png';
import { motion } from 'framer-motion';

import{Container,Row} from "reactstrap";
//import {NavLink } from 'reactstrap';

const nav__links=[
    {
        path:"home",
        display:"Home",
    },
    {
        path:"shop",
        display:"Shop",
    },
    {
        path:"cart",
        display:"Cart",
    },
    {
        path:"about",
        display:"About us",
    },
    
];
const Header = () => {
    return <header className="header">
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo"  />
                        <div>
                            <h1>Shrinath Furnitures</h1>
                            <p>Since 1996</p>
                        </div>
                    </div>

                    <div className="navigation">
                        <ul className="menu">
                           {nav__links.map((item,index) => (
                                <li className="nav__item" key={index}
                                >
                                <NavLink 
                                to={item.path}
                                 className={(navClass) => 
                                 navClass.isActive ? "nav__active":""}
                                 >
                                    {item.display}</NavLink>
                                </li>
                           
                        
                            ))
                           }
                        </ul>
                    </div>

                    <div className="nav__icon">
                        
                    <span className="fav__icon"><i class="ri-heart-line"></i>
                    <span className="badge">1</span></span>
                        <span className="cart__icon"><i class="ri-shopping-cart-fill"></i>
                        <span className="badge">1</span>
                    </span>
                    

                    <span><motion.img whileTap={{scale:1.1}}src={usericon} alt=""  height={20}/></span>
                    </div>
                    <div className=".mob__menu">
                    <span>
                         <i className="ri-menu-line"></i>
                    </span>
                    </div>

                    
                </div>
            </Row>
        </Container>
    </header>
};

export default Header;