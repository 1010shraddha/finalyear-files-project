

import React from 'react';
import { Container } from 'react-bootstrap';
import '../../style/common-section.css';

const CommonSection = ({title}) => {
  return (
  <section className="common__section">
  <Container className="text-center">
    <h1>{title}</h1>
  </Container>
  </section>
  );
};

export default CommonSection;
