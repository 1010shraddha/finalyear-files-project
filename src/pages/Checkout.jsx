import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection'; // Adjust path if needed

const Checkout = () => {  
    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h6 className="mb-4 fw-bold">Billing Information</h6>
                            <Form>
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
                            {/* Additional content for the sidebar if needed */}
                        </Col>    
                    </Row>  
                </Container>
            </section>   
        </Helmet>
    );
};

export default Checkout;
