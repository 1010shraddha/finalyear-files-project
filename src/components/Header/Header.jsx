import React, { useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../asset/image/logo2.jpg";
import usericon from "../../asset/image/add-friend.png";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__links = [
    { path: "/home", display: "Home" },
    { path: "/shop", display: "Shop" },
    { path: "/cart", display: "Cart" },
    { path: "/about", display: "About us" },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const profileActionRef = useRef(null);
    const { currentUser } = useAuth();

    const menuToggle = () => {
        menuRef.current.classList.toggle("active__menu");
    };

    const navigateToCart = () => {
        navigate("../cart");
    };

    const toggleProfileActions = () => {
        profileActionRef.current.classList.toggle("show__profileActions");
    };

    const logout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully");
            navigate("/home");
        } catch (err) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        const stickyHeaderFunc = () => {
            if (window.scrollY > 80) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        };

        window.addEventListener("scroll", stickyHeaderFunc);
        return () => {
            window.removeEventListener("scroll", stickyHeaderFunc);
        };
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="Shrinath Furnitures Logo" />
                            <div>
                                <h1>Shrinath Furnitures</h1>
                                <p>Since 1996</p>
                            </div>
                        </div>

                        <div className="navigation" ref={menuRef}>
                            <ul className="menu">
                                {nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                isActive ? "nav__active" : ""
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav__icon">
                            <span className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge">1</span>
                            </span>

                            <span className="cart__icon" onClick={navigateToCart}>
                                <i className="ri-shopping-cart-fill"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>

                            <div className="profile">
                                <motion.img
                                    whileTap={{ scale: 1.1 }}
                                    src={currentUser?.photoURL || usericon}
                                    alt="User Icon"
                                    height={40}
                                    width={40}
                                    onClick={toggleProfileActions}
                                />
                                <div
                                    className="profile__actions"
                                    ref={profileActionRef}
                                >
                                    {currentUser ? (
                                        <div>
                                        <Link to="/dashboard">Dashboard</Link>
                                        <span onClick={logout}>Logout</span>
                                        </div>
                                    ) : (
                                        <div>
                                            <Link to="/signup">Signup</Link>
                                            <Link to="/login">Login</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mob__menu">
                            <span onClick={menuToggle}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
