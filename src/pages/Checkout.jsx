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



import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../style/checkout.css";

const Checkout = () => {
    const totalQty = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    // const handlePlaceOrder = async () => {
    //     try {
    //         // Fetch order ID from backend
    //         const { data } = await axios.post("http://localhost:5000/create-order", {
    //             amount: totalAmount,
    //             currency: "INR",
    //         });

    //         const options = {
    //             key: "your_key_id", // Replace with Razorpay Key ID
    //             amount: data.amount,
    //             currency: data.currency,
    //             name: "Your Company Name",
    //             description: "Order Payment",
    //             order_id: data.id,
    //             handler: function (response) {
    //                 // Handle payment success
    //                 console.log("Payment Success:", response);
    //             },
    //             prefill: {
    //                 name: "Customer Name",
    //                 email: "customer@example.com",
    //                 contact: "9999999999",
    //             },
    //             notes: {
    //                 address: "Razorpay Corporate Office",
    //             },
    //             theme: {
    //                 color: "#F37254",
    //             },
    //         };

    //         const razorpay = new window.Razorpay(options);
    //         razorpay.open();
    //     } catch (error) {
    //         console.error("Error during Razorpay integration:", error);
    //     }
    // };

    const handlePlaceOrder = async () => {
        try {
          // Step 1: Create the order on your backend using fetch
          const response = await fetch('http://localhost:5000/create-order', {
            method: 'POST', // Specify the request method
            headers: {
              'Content-Type': 'application/json', // Send JSON data
            },
            body: JSON.stringify({
              amount: totalAmount,
              currency: 'INR',
            }), // Send data as a string
          });
      
          // Check if the response is successful (status code 200-299)
          if (!response.ok) {
            throw new Error('Failed to create order');
          }
      
          // Parse the JSON response
          const data = await response.json();
      
          // Step 2: Use the order_id returned by your backend to create Razorpay payment
          const options = {
            key: 'your_key_id', // Replace with your Razorpay Key ID
            amount: data.amount, // The order amount in paise (from the backend)
            currency: data.currency,
            name: 'Your Company Name',
            description: 'Order Description',
            order_id: data.id, // The order ID returned by your backend
            handler: function (response) {
              alert('Payment Successful: ' + response.razorpay_payment_id);
            },
            prefill: {
              name: 'Customer Name',
              email: 'customer@example.com',
              contact: '9999999999',
            },
            notes: {
              address: 'Customer Address',
            },
            theme: {
              color: '#F37254', // Razorpay theme color
            },
          };
      
          const rzp1 = new window.Razorpay(options); // Initialize Razorpay checkout
          rzp1.open(); // Open Razorpay modal for payment
        } catch (error) {
          console.error('Error creating order:', error);
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
                                        free shipping
                                    </span>
                                    <span>₹0</span>
                                </h6>
                                <h4>Total Cost: <span>₹{totalAmount}</span></h4>
                                <button
                                    className="buy__btn auth__btn w-100"
                                    onClick={handlePlaceOrder}
                                >
                                    Place An Order
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
