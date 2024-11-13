import React from 'react';
import { Container, Row } from 'reactstrap';
import ProductCard from './ProductCard';

const ProductsList = ({ data }) => {
  return (
    <Container>
      <Row className="products_row"> {/* Add the custom class here */}
        {data?.map((item , index) => (
          <ProductCard item={item} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
