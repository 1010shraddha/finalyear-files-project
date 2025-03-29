// import React from "react";
// import '../style/cart.css';
// import Helmet from '../components/Helmet/Helmet'
// import CommonSection from '../components/UI/CommonSection'
// import { Container, Row, Col} from "react-bootstrap";

// import tdImg from '../../src/asset/image/armchair01.jpeg'
// import {motion} from 'framer-motion'
// //import {cartActions} from '../redux/slices/cartSlice'
// import {useSelector} from "react-redux";

// const Cart = () => {

// const cartItems = useSelector(state=> state.cart.cartItems)

//     return <Helmet title="Cart">
//     <CommonSection title="Shopping Cart"/>
//     <section>
//      <Container>
//         <Row>
//           <Col lg='9'>
//            {
//              cartItems.length===0 ? (<h2 className="fs-4 text-center">No item added to the cart</h2>
//              ): (
//             <table className="table bordered">
//                 <thead>
//                   <tr>
//                     <th>Image</th>
//                     <th>Title</th>
//                     <th>Price</th>
//                     <th>Qty</th>
//                     <motion.th whileTap={{scale: 1.2}}>Delete</motion.th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                     <tr>
//                         <td><img src={tdImg} alt=""/></td>
//                         <td>Modern Arm Chair</td>
//                         <td>Rs.29000</td>
//                         <td>2px</td>
//                         <td><i class="ri-delete-bin-6-line"></i></td>
//                     </tr>
//                 </tbody>
//             </table>
//             )}
//           </Col>
//           <Col lg='3'></Col>
//         </Row>
//      </Container>
//     </section>
//     </Helmet>
// };

// export default Cart;



import React, { useEffect } from "react";
import "../style/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, fetchCartFromFirestore } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const cartItems = useSelector((state) => state.cart.items || []);
    const totalAmount = useSelector((state) => state.cart.totalAmount || 0);

    useEffect(() => {
        dispatch(fetchCartFromFirestore);
    }, [dispatch]);

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9">
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center">No item added to the cart</h2>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <motion.th whileTap={{ scale: 1.2 }}>Delete</motion.th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.imgUrl} alt={item.productName} />
                                                </td>
                                                <td>{item.productName}</td>
                                                <td>₹{Number(item.price).toLocaleString("en-IN")}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <i
                                                        className="ri-delete-bin-6-line"
                                                        onClick={() => handleRemove(item.id)}
                                                        style={{ cursor: "pointer" }}
                                                    ></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg="3">
                            <div className="cart-summary">
                                <h6 className="d-flex align-items-center justify-content-between">
                                    Subtotal
                                </h6>
                                <h4 className="fs-4 fw-bold">
                                    ₹{Number(totalAmount).toLocaleString("en-IN")}
                                </h4>
                            </div>
                            <div>
                                <p className="fs-6 mt-2">
                                    Taxes and shipping will calculate at checkout
                                </p>
                                <button
                                    className="buy__btn w-100 mt-3"
                                    onClick={() => navigate("/checkout")}
                                >
                                    Checkout
                                </button>
                                <button
                                    className="buy__btn w-100 mt-3"
                                    onClick={() => navigate("/shop")}
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Cart;

