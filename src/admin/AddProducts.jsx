
import React from 'react'
import {Container, Row, Col, Form ,FormGroup} from "reactstrap";


const AddProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
          <h4>Add Product</h4>
          <Form>
             <FormGroup className="form_group">
              <span>Product title</span>
              <input type="text" placeholder="Double sofa" />
             </FormGroup>

             <FormGroup className="form_group">
             <span>Short Description</span>
             <input type="text" placeholder="lorem...."/>
             </FormGroup>

             <FormGroup className="form_group">
             <span>Description</span>
             <input type="text" placeholder="Description..."/>
             </FormGroup>

             <FormGroup className="form_group">
             <span>Price</span>
             <input type="number" placeholder="Rs.10000"/>
             </FormGroup>

             
          </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts
