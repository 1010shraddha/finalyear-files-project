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
import React from "react";
import '../style/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from "react-bootstrap";

//import tdImg from '../../src/asset/image/armchair01.jpeg';
import { motion } from 'framer-motion';
// import { cartActions } from '../redux/slices/cartSlice';
import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items || []);

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9">
                            {
                                 cartItems.length === 0 ? ( 
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
                                          {
                                            cartItems.map((item,index)=>(
                                                
                                                <tr key={index}>
                                                  <td><img src={item.imgUrl} alt="" /></td>

                                                    <td>{item.productName}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>
                                                        <i class="ri-delete-bin-6-line"></i>
                                                    </td>
                                                </tr>
                                            ))
                                          }
                                        </tbody>
                                    </table>
                                 )}
                        </Col>
                        <Col lg="3"></Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Cart;
