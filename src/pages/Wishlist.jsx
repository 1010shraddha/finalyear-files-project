// import React from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "../redux/slices/cartSlice"; // Import addItem
// import Helmet from '../components/Helmet/Helmet';
// import CommonSection from '../components/UI/CommonSection';
// import { Container, Row, Col } from "react-bootstrap";
// import { motion } from 'framer-motion';
// import { useSelector } from "react-redux";
// import { removeFromWishlist } from "../redux/slices/wishlistSlice";
// import { useNavigate } from "react-router-dom";
// import '../style/wishlist.css';


// const Wishlist = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const wishlistItems = useSelector((state) => state.wishlist.items || []);

//     const handleRemove = (id) => {
//         dispatch(removeFromWishlist(id));
//     };

//     const handleAddToCart = (item) => {
//         dispatch(addItem(item)); // Add item to cart
//     };

//     return (
//         <Helmet title="Wishlist">
//             <CommonSection title="Wishlist" />
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="9">
//                             {
//                                 wishlistItems.length === 0 ? (
//                                     <h2 className="fs-4 text-center">No items in wishlist</h2>
//                                 ) : (
//                                     <table className="table bordered">
//                                         <thead>
//                                             <tr>
//                                                 <th>Image</th>
//                                                 <th>Title</th>
//                                                 <th>Price</th>
//                                                 <motion.th whileTap={{ scale: 1.2 }}>Remove</motion.th>
//                                                 <th>Action</th> {/* Add Action column */}
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {wishlistItems.map((item, index) => (
//                                                 <tr key={index}>
//                                                     <td>
//                                                         <img src={item.imgUrl} alt={item.productName} />
//                                                     </td>
//                                                     <td>{item.productName}</td>
//                                                     <td>₹{Number(item.price).toLocaleString('en-IN')}</td>
//                                                     <td>
//                                                         <i
//                                                             className="ri-delete-bin-6-line"
//                                                             onClick={() => handleRemove(item.id)}
//                                                             style={{ cursor: "pointer" }}
//                                                         ></i>
//                                                     </td>
//                                                     <td>
//                                                         <button
//                                                             className="add-to-cart-btn"
//                                                             onClick={() => handleAddToCart(item)}
//                                                         >
//                                                             Add to Cart
//                                                         </button>
//                                                     </td> {/* Add to Cart button */}
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 )
//                             }
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </Helmet>
//     );
// };

// export default Wishlist;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice"; // Import addItem
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import '../style/wishlist.css';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items || []);
    const [addedToCart, setAddedToCart] = useState(new Set()); // Use Set for better performance

    const handleRemove = (id) => {
        dispatch(removeFromWishlist(id));
    };

    const handleAddToCart = (item) => {
        dispatch(addItem(item)); // Add item to cart
        setAddedToCart((prevSet) => new Set(prevSet).add(item.id)); // Track added items using Set
    };

    return (
        <Helmet title="Wishlist">
            <CommonSection title="Wishlist" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9">
                            {
                                wishlistItems.length === 0 ? (
                                    <h2 className="fs-4 text-center">No items in wishlist</h2>
                                ) : (
                                    <table className="table bordered">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <motion.th whileTap={{ scale: 1.2 }}>Remove</motion.th>
                                                <th>Action</th> {/* Add Action column */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlistItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <img src={item.imgUrl} alt={item.productName} />
                                                    </td>
                                                    <td className={addedToCart.has(item.id) ? 'strikethrough' : ''}>
                                                        {item.productName}
                                                    </td>
                                                    <td>₹{Number(item.price).toLocaleString('en-IN')}</td>
                                                    <td>
                                                        <i
                                                            className="ri-delete-bin-6-line"
                                                            onClick={() => handleRemove(item.id)}
                                                            style={{ cursor: "pointer" }}
                                                        ></i>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="add-to-cart-btn"
                                                            onClick={() => handleAddToCart(item)}
                                                            disabled={addedToCart.has(item.id)} // Disable if added to cart
                                                        >
                                                            {addedToCart.has(item.id) ? "Added" : "Add to Cart"}
                                                        </button>
                                                    </td> {/* Add to Cart button */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Wishlist;
