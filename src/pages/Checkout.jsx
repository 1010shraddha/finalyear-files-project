// import React from "react";
// import { Container, Row, Col, Form, FormGroup } from "reactstrap";
// import Helmet from '../components/Helmet/Helmet';
// import CommonSection from '../components/UI/CommonSection'; // Adjust path if needed

// import "../style/checkout.css";
// import {useSelector } from "react-redux";

// const Checkout = () => {  

//     const totalQty = useSelector(state=>state.cart.totalQuantity)
//     const totalAmount = useSelector(state=>state.cart.totalAmount)
    

//     return (
//         <Helmet title="Checkout">
//             <CommonSection title="Checkout" />
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="8">
//                             <h6 className="mb-4 fw-bold">Billing Information</h6>
//                             <Form className="billing__form">
//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="Enter your name" />
//                                 </FormGroup>

//                                 <FormGroup className="form_group">
//                                     <input type="email" placeholder="Enter your email" />
//                                 </FormGroup>

//                                 <FormGroup className="form_group">
//                                     <input type="number" placeholder="Enter your number" />
//                                 </FormGroup>

//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="Street Address" />
//                                 </FormGroup>

//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="City" />
//                                 </FormGroup>

//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="Postal Code" />
//                                 </FormGroup>

//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="Country" />
//                                 </FormGroup>
//                             </Form>
//                         </Col>    
//                         <Col lg="4">
//                            <div className="checkout__cart">
//                             <h6>Total Qty: <span>{totalQty} items</span></h6>
//                             <h6>Subtotal: <span>₹{totalAmount}</span></h6>
//                             <h6>
//                                 <span>
//                                     Shipping: <br/>
//                                     free shipping
//                                 </span>
//                                 <span>₹0</span>
//                             </h6>
//                             <h4>Total Cost: <span>₹{totalAmount}</span></h4>
//                             <button className="buy__btn auth__btn w-100">Place An Order</button>  
//                            </div>
//                         </Col>    
//                     </Row>  
//                 </Container>
//             </section>   
//         </Helmet>
//     );
// };

// export default Checkout;



// import React from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { Container, Row, Col, Form, FormGroup } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import { useEffect } from "react";

// import "../style/checkout.css";

// const Checkout = () => {
//     const totalQty = useSelector((state) => state.cart.totalQuantity);
//     const totalAmount = useSelector((state) => state.cart.totalAmount);

  

//       useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://checkout.razorpay.com/v1/checkout.js";
//         script.async = true;
//         script.onload = () => setRazorpayLoaded(true);
//         document.body.appendChild(script);
//       }, []);
    
//       const handlePayment = async () => {
//         if (!razorpayLoaded) {
//           console.error("Razorpay SDK not loaded yet. Please wait.");
//           return;
//         }
    
//         setIsProcessing(true);
//         try {
//           const response = await fetch("/api/create-order", { method: "POST" });
//           const data = await response.json();
    
//           const options = {
//             key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//             amount: price * 1000,
//             currency: "USD",
//             name: "Blockhub",
//             description: "Payment",
//             image: "/logo.png",
//             order_id: data.id,
//             handler: function (response) {
//               console.log("Payment Successful", response);
//               onPaymentSuccess();
//             },
//             prefill: {

//             },
//             theme: {
//               color: "#3399cc",
//             },
//           };
    
//           const rzp1 = new window.Razorpay(options);
//           rzp1.open();
//         } catch (error) {
//           console.error("Payment failed", error);
//         } finally {
//           setIsProcessing(false);
//         }
//       };
    
//       const onPaymentSuccess = async () => {
//         const token = userDetail?.token + Number(selectedOption?.Value);
//         console.log("Updated Tokens:", token);
//         await UpdateToken({
//           token: token,
//           userId: userDetail?._id,
//         });
//       };

//     return (
//         <Helmet title="Checkout">
//             <CommonSection title="Checkout" />
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg="8">
//                             <h6 className="mb-4 fw-bold">Billing Information</h6>
//                             <Form className="billing__form">
//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="Enter your name" />
//                                 </FormGroup>
//                                 <FormGroup className="form_group">
//                                     <input type="email" placeholder="Enter your email" />
//                                 </FormGroup>
//                                 <FormGroup className="form_group">
//                                     <input type="number" placeholder="Enter your number" />
//                                 </FormGroup>
//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="Street Address" />
//                                 </FormGroup>
//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="City" />
//                                 </FormGroup>
//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="Postal Code" />
//                                 </FormGroup>
//                                 <FormGroup className="form_group">
//                                     <input type="text" placeholder="Country" />
//                                 </FormGroup>
//                             </Form>
//                         </Col>
//                         <Col lg="4">
//                             <div className="checkout__cart">
//                                 <h6>Total Qty: <span>{totalQty} items</span></h6>
//                                 <h6>Subtotal: <span>₹{totalAmount}</span></h6>
//                                 <h6>
//                                     <span>
//                                         Shipping: <br />
//                                         free shipping
//                                     </span>
//                                     <span>₹0</span>
//                                 </h6>
//                                 <h4>Total Cost: <span>₹{totalAmount}</span></h4>
//                                 <button
//                                     className="buy__btn auth__btn w-100"
//                                     onClick={handlePayment} disabled={isProcessing}

//                                 >
//                                     Place An Order
//                                     {isProcessing ? "Processing..." : "Pay now"}
//                                 </button>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </Helmet>
//     );
// };

// export default Checkout;
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../style/checkout.css";

const Checkout = () => {
    const totalQty = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => setRazorpayLoaded(true);
        document.body.appendChild(script);
    }, []);

    const handlePayment = async () => {
        if (!razorpayLoaded) {
            console.error("Razorpay SDK not loaded yet. Please wait.");
            return;
        }

        setIsProcessing(true);
        try {
            // Step 1: Create Order using backend API
            const response = await axios.post("http://localhost:5000/create-order", {
                amount: totalAmount, // Send amount to backend
            });

            const { id: orderId } = response.data;

            // Step 2: Open Razorpay Checkout
            const options = {
                key: "rzp_test_hsQHAwJVL7ccoX", // Public Key (Frontend safe)
                amount: totalAmount * 100, // Convert to paise
                currency: "INR",
                name: "Shrinath Furnitures",
                description: "Furniture Payment",
                order_id: orderId,
                handler: function (response) {
                    console.log("Payment Successful", response);
                },
                prefill: {
                    name: "Customer Name",
                    email: "customer@example.com",
                    contact: "9876543210",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Payment failed", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h6 className="mb-4 fw-bold">Billing Information</h6>
                            <Form className="billing__form">
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="Enter your name" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="email" placeholder="Enter your email" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="number" placeholder="Enter your number" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="Street Address" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="City" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="Postal Code" />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder="Country" />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg="4">
                            <div className="checkout__cart">
                                <h6>Total Qty: <span>{totalQty} items</span></h6>
                                <h6>Subtotal: <span>₹{totalAmount}</span></h6>
                                <h6>
                                    <span>
                                        Shipping: <br />
                                        Free shipping
                                    </span>
                                    <span>₹0</span>
                                </h6>
                                <h4>Total Cost: <span>₹{totalAmount}</span></h4>
                                <button
                                    className="buy__btn auth__btn w-100"
                                    onClick={handlePayment}
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? "Processing..." : "Pay Now"}
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;
