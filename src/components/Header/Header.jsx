import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";  // Add useLocation here
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
    const location = useLocation();  // Use useLocation hook here to access the current pathname
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const wishlistItems = useSelector((state) => state.wishlist.items); // Get wishlist items
    const profileActionRef = useRef(null);
    const { currentUser } = useAuth();

    const [showActions, setShowActions] = useState(false);

    const menuToggle = () => {
        menuRef.current.classList.toggle("active__menu");
    };

    const navigateToCart = () => {
        navigate("../cart");
    };

    const toggleProfileActions = () => {
        setShowActions((prev) => !prev);
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

    const handleActionClick = () => {
        setShowActions(false); // Hide the actions when an action is clicked
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
                            {/* Wishlist Icon */}
                            <span
                                className={`fav__icon ${location.pathname === "/wishlist" ? "nav__active" : ""}`}  // Highlight if on /wishlist page
                                onClick={() => navigate("/wishlist")}
                            >
                                <i className="ri-heart-line"></i>
                                {/* Display the number of items in the wishlist */}
                                {wishlistItems.length > 0 && <span className="badge">{wishlistItems.length}</span>}
                            </span>

                            {/* Cart Icon */}
                            <span className="cart__icon" onClick={navigateToCart}>
                                <i className="ri-shopping-cart-fill"></i>
                                {/* Display the badge only if totalQuantity is greater than 0 */}
                                {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
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
                                    className={`profile__actions ${showActions ? "show__profileActions" : ""}`}
                                    ref={profileActionRef}
                                >
                                    {currentUser ? (
                                        <div>
                                            <Link to="#" onClick={logout} className="logout-link">Logout</Link>
                                        </div>
                                    ) : (
                                        <div>
                                            <Link to="/signup" onClick={handleActionClick}>
                                                Signup
                                            </Link>
                                            <Link to="/login" onClick={handleActionClick}>
                                                Login
                                            </Link>
                                            <Link to="/dashboard">Dashboard</Link>
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
